## Dev

Create a `.env.development` file:

```
GATSBY_BUTTONDOWN_API_KEY=bc7e5a10-c92e-2c9e-a7aa-c979940f561c
```

## Prod

Run the following commands to configure [`now`](https://zeit.co/):

```
now secrets add gatsby-buttondown-api-key bc7e5a10-c92e-2c9e-a7aa-c979940f561c
```
