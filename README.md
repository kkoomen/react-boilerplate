# React Redux Web

An extension of create-react-app (ejected) with some extras:

- hot reloading :fire:
- linters
- redux
- redux-thunk
- routing
- ImmutableJS
- local storage (for the redux state)
- basic structure
- absolute imports

This extension also has built-in support for the following extensions:

- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension#installation)

## Branches

- `bootstrap-4`: A duplicate of the master branch, including bootstrap 4.
- `immutablejs-excluded`: An duplicate of the master branch, excluding immutableJS.
- `immutablejs-excluded--bootstrap-4`: An duplicate of the `immutablejs-excluded` branch, including bootstrap 4.

# Absolute imports

Example: `import Button from 'src/components/Button';`

# Getting started

- Clone the repository
- (optional, but recommended) Go into `package.json` and set the `name` property
  at the top to your new project its name. This will also set local storage keys
  automatically correct.
- Run `npm install`
- Run `npm start`

# Linting

All rules within linting are set to a warning, except for those that are
definitely a no-op, such as deprecated functions, or really bad ways of handling
code such as the use of `eval()`. Linters should suggest, not force.

If you find any rules that are left out or should be different, feel free to
make a pull request.

# Handy tools

Optional extensions that might be handy.

### Chrome

- [ImmutableJS Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)

### Template generators

- [cra-gen](https://github.com/kkoomen/cra-gen)
