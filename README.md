# React Redux Web

An extension of create-react-app with some extras: linters, redux, redux-thunk,
routing and basic structure. This extension also has built-in support for the
[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension#installation)


# FAQ

- __How do I remove that eslint is so strict?__

We extend the default `react-app`, but the stricter one is the `airbnb` one. To
remove this you can remove `airbnb` along with all the `rules` in `.eslintrc.js`:

```javascript
module.exports = {
  "extends": [
    "react-app",
    "airbnb" // <-- Remove this
  ],

  "env": {
    ...
  },

  "rules": { // <-- Remove this
    ...
  }
};
```
