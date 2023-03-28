# setup

You can use `relay-worker` in your app in less than 5 min. Here's how:

1. Deploy your worker to Cloudflare via `npm run deploy`
2. Integrate worker as an HTTP client in your app:
    - Replace the API url with your worker url
    - Set the API url in the `x-relay-url` header
    - Set expose headers bypass mode by including the `x-bypass-expose-headers` header

Here's your old API call in Javascript:

```javascript
fetch('https://facebook.com')
```

And here's your new API call:

```javascript
fetch('https://relay-worker.<cloudflare-subdomain>.workers.dev', {
        headers: {
            'x-relay-url': 'https://facebook.com',
            'x-bypass-expose-headers': 'true',
        }
    }
)
```

---

## Development

Run the local server via `npm run start`