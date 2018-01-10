![Pepperoni - Empowered by Futurice](/template/assets/pepperoni-logo.png?v=1)

Futurice React Native Starter Kit
=================================

[![Join the chat at https://gitter.im/futurice/pepperoni-app-kit](https://badges.gitter.im/futurice/pepperoni-app-kit.svg)](https://gitter.im/futurice/pepperoni-app-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Sponsored](https://img.shields.io/badge/chilicorn-sponsored-brightgreen.svg)](http://spiceprogram.org/oss-sponsorship/)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/futurice/pepperoni-app-kit/blob/master/LICENSE)

We :green_heart: building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.

Getting started on a new app just takes too damn long, though. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.

This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.

React Native Starter Kit is a part of [Pepperoni](http://getpepperoni.com), a framework for kickstarting digital product development.

Getting started by bootstrapping a new project
----------------------------------------------

### Install create-react-native-app, initialize new project

- `yarn global add create-react-native-app`
- `create-react-native-app AwesomeProject`

### Clone the pepperoni-crna repository

- `git clone https://github.com/futurice/pepperoni-crna`

NOTE: Before the next step, you may want to manually merge in parts of your
project's `app.json` and `package.json` files into the template's respective
files. This is in order to preserve project name as well as newer library
versions.

- `cp -r pepperoni-crna/template/* AwesomeProject`

### Install new dependencies

- `cd AwesomeProject`
- `rm -rf node_modules/`
- `yarn install`

TODO
----

- Better initial setup experience (automated tool rather than all these manual
  steps)
- Including `package.json` in the `template/` directory is bad, but a necessary
  workaround until `create-react-native-app` updates the Expo SDK to `>=v24`.
  Until then, library versions are decided by us rather than CRNA, which is
  an annoying maintenance burden.
