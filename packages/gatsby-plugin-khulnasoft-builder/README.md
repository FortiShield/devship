# @khulnasoft/gatsby-plugin-khulnasoft-builder

This plugin generates [Vercel Build Output API v3](https://khulnasoft.com/docs/build-output-api/v3) for Gatsby v4+ projects.

The Vercel platform automatically injects this plugin for you if it can detect Gatsby v4+ in your project's `package.json` dependencies. If detected, you will see a log message in your project's [build logs](https://khulnasoft.com/docs/concepts/deployments/logs#build-logs) as follows:

> Injecting Gatsby.js plugin "@khulnasoft/gatsby-plugin-khulnasoft-builder" to package.json

If auto-detection is not working, this plugin can also be installed and used manually:

1. `npm install @khulnasoft/gatsby-plugin-khulnasoft-builder`
2. Add `'@khulnasoft/gatsby-plugin-khulnasoft-builder'` to your `gatsby-config.(t|j)s` file, such as:

```js
module.exports = {
  plugins: ['@khulnasoft/gatsby-plugin-khulnasoft-builder'],
};
```

3. 🚀 Ship It 🎉
