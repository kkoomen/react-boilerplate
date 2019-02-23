# React Redux Web

An ejected version of create-react-app v2 with some extras:

- [x] hot reloading :fire:
- [x] linters
- [x] redux
- [x] redux-thunk
- [x] routing
- [x] ImmutableJS
- [x] local storage (for the redux state)
- [x] basic structure
- [x] absolute imports
- [x] [plop templates](https://www.npmjs.com/package/plop)

This version also has built-in support for the following extensions:

- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension#installation)

# Table of contents
1. [Branches](#branches)
2. [Getting started](#getting-started)
3. [Absolute imports](#absolute-imports)
3. [Linting](#linting)
3. [Useful tools](#useful-tools)
    1. [Chrome extensions](#chrome-extensions)
    2. [Template generators](#template-generators)

# Branches

- [bootstrap-4](https://github.com/kkoomen/react-boilerplate/tree/bootstrap-4)

    A duplicate of the master branch, including bootstrap 4.

# Getting started

- Clone the repository
- (optional, but recommended) Go into `package.json` and set the `name` property
  at the top to your new project its name. This will also set local storage keys
  automatically correct.
- Run `npm install`
- Run `npm start`

# Absolute imports

This repository supports absolute paths where `src` is an alias to the `/src`
directory. Absolute imports improve readability, consistency and the component
can be moved easily in structure without the hassle of adjusting the import
paths.

Example:<br />
- JSX: `import Button from 'src/components/Button';`
- SCSS: `background-image: url('~src/assets/images/icons/icongrid.svg');`

# Linting

All rules within linting are set to a warning, except for those that are
definitely a no-op, such as deprecated functions, or really bad ways of handling
code such as the use of `eval()`. Linters should suggest, not force.

If you find any rules that are left out or should be different, feel free to
make a pull request.

# Useful tools

Optional extensions that might be useful.

## Chrome extensions

- [ImmutableJS Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog)

## Template generators

- [cra-gen](https://github.com/kkoomen/cra-gen)
