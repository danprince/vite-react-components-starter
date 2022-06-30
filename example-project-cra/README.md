# Caveats With Peer Dependencies
Create React App has a different module resolution strategy to Vite, and linking the component library to an existing project during development can cause problems.

When Webpack bundles `my-package` it attempts to bundle its dependencies (`react`) which it finds in `node_modules/my-package/node_modules/react` instead of `node_modules/react`.

When two copies of React end up in the bundle, you'll start to see [invalid hook call warnings](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).

The simplest way around this problem is to link the project's version of React into the library's dependencies.

```sh
# ./my-package
npm link ./example-project-cra/node_modules/{react,react-dom}
```

Now `node_modules/react` and `example-project-cra/node_modules/react` are the same (symlinked) directory.

When you run `npm install` these links will be overwritten, so you'll need to recreate them after each install.

Adding a script to your library can make this less painful.

```ts
"scripts": {
  "link-peer-deps": "npm link example-project-cra/node_modules/{react,react-dom}"
}
```
