# Former Selves JAMStack Site

An ecommerce JAMstack site using GatsbyJS, Contentful, Netlify, and Snipcart.

## Development

In order to run this site locally, you'll need to create Contentful/Google Analytics/Snipcart accounts and tie the appropriate keys to the variables below.

Create a new file called ".env.development". In it, Gatsby needs these env variables declared:

```
GA_TRACKING_ID
CF_SPACE_ID
CF_ACCESS_TOKEN
SC_API_KEY
```

You can then run the following to start a local server:

```bash
$ npm install
$ npm run dev
```
