# React boilerplate

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
4. [Environments](#environments)
5. [Linting](#linting)
6. [Useful tools](#useful-tools)
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

# Environments

TLDR; If you want to add a new environment (for example: staging) the only thing
you have to do is the following:

- Copy over the `build` script in the `package.json` to a `build:staging` script.
- Change the `REACT_APP_ENV=production` to `REACT_APP_ENV=staging` in the `build:staging` script.

--

Instead of overwriting `NODE_ENV` we will use `REACT_APP_ENV` to distinguish
between environments. CRA sets the `NODE_ENV` for us at build-time which ensures
a correct build at any time. This saves us extra code to adjust in the CRA
config for it to work. At the end we are aiming for a variable per environment
that tells us the type of environment. If you want to distinguish between
environments programmatically you want to use `process.env.REACT_APP_ENV` or
(preferably) use `import { APP_ENV } from 'src/config/constants';` which is
pre-defined in this repository.

If you want a bit more info you can read it at
[https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables).

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
