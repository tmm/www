## Dev

Create a `.env.development` file:

```
GATSBY_BUTTONDOWN_API_KEY=bc7e5a10-c92e-2c9e-a7aa-c979940f561c
```

## Prod

Run the following commands to configure [`now`](https://zeit.co/):

```
now secrets add gatsby-buttondown-api-key bc7e5a10-c92e-2c9e-a7aa-c979940f561c
now dns add meagher.co sa CNAME external.simpleanalytics.com.
now dns add meagher.co '@' TXT 'v=spf1 include:mailgun.org ~all'
now dns add meagher.co 'krs._domainkey' TXT 'k=rsa; p=MIGfMA0GCSqGSI[...]AQAB'
now dns add meagher.co 'email' CNAME 'mailgun.org'
now dns add meagher.co '@' MX 'mxa.mailgun.org' 10
now dns add meagher.co '@' MX 'mxb.mailgun.org' 10
```
