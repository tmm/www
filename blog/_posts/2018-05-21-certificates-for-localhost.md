---
title:  Certificates for localhost
date: 2018-05-21 18:22:29
---

Since I've been using Docker more lately, I wanted my dev set up to be as close to other environments as possible. Basically everything I do locally should be the same as when it runs on AWS. One of the biggest headaches was SSL.

For example, let's assume that you have a website container (`example.com`) and an api container running off a subdomain (`api.example.com`). In production, you'll run everything on SSL, but locally you might not. Setting up SSL locally is usually a pain, and likely means you would create separate `nginx.conf`s for each environment, etc. It would be much easier to use environment variables and have the configuration updated accordingly.

This is exactly what we will do! You won't need separate files for all your environments nor will you have to use something like [`jwilder/nginx-proxy`](https://github.com/jwilder/nginx-proxy).[^1]

First we'll create a wildcard certificate for our dev environment—instead of `example.com` and `api.example.com`, we will use `example.local` and `api.example.local`. Then we'll set up our mac to trust the certificate. Finally, we can use environment variables to make our `nginx.conf` dynamic based on where the containers are running.

Before you continue, you'll want to set up your directory structure to look something like this (don't worry too much about the contents of `api` and `web`):

```bash
example
│   docker-compose.yml
│   ... 
│
└───nginx
│   │   Dockerfile
│   │   nginx.conf
│   │   ...
│   │
│   └───certs
│   └───sites-enabled
│       │   api
│       │   web
│   
└───api
│   │   Dockerfile
│   │   ...
│   
└───web
    │   Dockerfile
    │   ...
```

**1/ Generate certs**

Use the [ZeroSSL Self-Signed Certificate Generator](https://zerossl.com/free-ssl/#self) to generate your local dev certs. Since we want to use a wildcard certificate, you should enter `example.local` and `*.example.local`.

![self-signed certificate](/blog/assets/2018/07/01.png)

Download the key and certificate, and rename them: `key.txt` to `example.key` and `crt.txt` to `example.crt`. Next, move the files to a directory your server has access to. For example, `nginx/certs/local`.

**2/ Server config**

Update your `nginx.conf` to reference the newly created certificate and key paths (`ssl_certificate` and `ssl_certificate_key`).[^2]

```nginx
http {

	##
	# SSL Settings
	##
	
    ssl_certificate     		/certs/local/example.crt;
    ssl_certificate_key 		/certs/local/example.key;
    ssl_ciphers                 HIGH+kEECDH+AESGCM:HIGH+kEECDH:HIGH+kEDH:HIGH:!aNULL;
	ssl_protocols             	TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers	on;
	
	##
	# Virtual Host Configs
	##

    include /etc/nginx/sites-enabled/*;

}
```

The `sites-enabled` directory contains sites that are currently accessible through nginx. For example, we have two files: `api` and `web`. Since we are using a wildcard certificate, you won't need to add the `ssl_certificate` or `ssl_certificate_key` params to these files. 

The basics for `api` include listening on port `433` for secure connections to the `api.*` subdomain. This matches `api.example.com` as well as `api.example.local`. Next it routes traffic from `/` to a unix socket using [`uwsgi`](https://uwsgi-docs.readthedocs.io/en/latest/). Finally, the site also listens on port `80` so we can redirect insecure traffic along to the first server block.

```nginx
upstream api {
    server unix:/home/api/server.sock;
}

server {

    listen      443 ssl;
    server_name api.*;

    location / {
		include		uwsgi_params;
		uwsgi_pass  api;
    }

}

server {

    listen      [::]:80;
	listen      80;
    server_name api.*;
	return 301  https://$host$request_uri;

}
```

There's a bit more going on in `web`:

```nginx
upstream web {
    server unix:/home/web/server.sock;
}

server {

    listen      443 default_server ssl;
    server_name _;

    if ($host ~* ^www\.(.*)) {
        set $host_without_www $1;
        rewrite ^(.*) https://$host_without_www$1 permanent;
    }

    location / {
		include		uwsgi_params;
		uwsgi_pass  web;
    }

}

server {

    listen      [::]:80;
	listen      80 default_server;
	server_name _;
	return      301 https://$host$request_uri;

}

server {

  server_name   www.*;
  return        301 https://$1$request_uri;

}
```

It uses very similar rules for listening on ports `443` and `80`, and then passes on traffic through `uwsgi`. What's different is it will redirect traffic from `www` to non-`www` and rewrite non-`https` traffic to `https`.

Now that we've set up our `nginx.conf` and `sites-enabled`, nginx knows how to route incoming connections correctly.

**3/ Update `/etc/hosts`**

Add the following line to your `/etc/hosts`. This tells your computer to route all traffic to the root `example.local` domain and the `api` and `www` subdomains to `0.0.0.0` (a.k.a. `localhost`).

```
0.0.0.0 example.local api.example.local www.example.local
```

With your Docker containers running, you can hit `example.local` and it's subdomains from your browser.

**4/ Substituting in environment variables**

Almost there! If you don't already have a basic `docker-compose.yml` file created, it should look something like this:

```yml
version: '2'
services:
    api:
		...
    web:
		...
    nginx:
        build: ./nginx
        command: bash -c "envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
        container_name: nginx
        environment:
            - SSL_CERTIFICATE=$SSL_CERTIFICATE
            - SSL_CERTIFICATE_KEY=$SSL_CERTIFICATE_KEY
        depends_on:
            - api
            - web
        ports:
            - 80:80
            - 443:443
        restart: always
        volumes:
            - ./nginx/nginx.tmpl:/etc/nginx/nginx.tmpl
        volumes_from:
            - api
            - web
```

The most important section to pay attention to is `nginx > environment`. Here you specify where your certificate files are located, then the docker `command` is run with `envsubst` performing the substitution. Notice you also change `nginx.conf`'s extension to `.tmpl`.  `nginx.tmpl` is now a template file, where you can use environment variables.

```nginx
http {

    ssl_certificate     ${SSL_CERTIFICATE};
    ssl_certificate_key ${SSL_CERTIFICATE_KEY};

}
```

Now when you run `docker-compose build nginx`, your environment variables will add the correct paths based on the environment.

**5/ Make Chrome Accept a Self-Signed Certificate (on OSX)** [^3]

Right now, if you spin up your containers and navigate to `example.local`, you'll see:

![not private](/blog/assets/2018/07/02.png)

Since your certificate is self-signed, Chrome needs to trust the certificate in order for a secure connection to exist. First, click on the "Not Secure" button in the URL bar.

![not secure button](/blog/assets/2018/07/03.png)

Next, select certificate and you'll see an overlay appear with some information about the certificate you created earlier. Hold and drag the certificate graphic to your Desktop or somewhere else for safe-keeping.

![overlay](/blog/assets/2018/07/04.png)

Now you want to open up Keychain Access. Navigate to the "Certificates" section on the right-side pane. Then drag the certificate into Keychain Access. (You might have to unlock your keychain by clicking on the lock in the top-left corner.)

![keychain](/blog/assets/2018/07/05.png)

Once your certificate is in keychain, double click on it to bring up the certificate info. Here you want to change "Secure Sockets Layer (SSL)" from "no specified value" to "Always Trust." After you do that, you can close this window. (You may be prompted for your password.)

![keychain permissions](/blog/assets/2018/07/06.png)

Congrats! Your computer now trusts the certificate! Navigate to `example.local` or any of the subdomains and you now have local SSL.

![trusted](/blog/assets/2018/07/07.png)

---

Nerdier post than normal: There's a perfectly good reason for that though. Last month, I wrote a [letter to myself on productivity]({{ site.baseurl }}{% post_url blog/2018-04-27-letter-to-myself-on-productivity %}) and found that I need to improve at recording things I learn.

This post assumed a lot of knowledge. If you need help, feel free to reach out on [Twitter](https://twitter.com/tomfme) or [email](mailto:tom@meagher.co).

[^1]: [`nginx-proxy`](https://github.com/jwilder/nginx-proxy) introduces a lot more overhead and complexity, but is much more configurable than the method I use. #tradeoffs
[^2]: nginx has [many more](https://nginx.org/en/docs/http/configuring_https_servers.html) SSL parameters you can configure; we're only using the basics here.
[^3]: Gleaned this part of the tutorial from [Make Chrome Accept a Self-Signed Certificate (on OSX)](https://www.accuweaver.com/2014/09/19/make-chrome-accept-a-self-signed-certificate-on-osx/)