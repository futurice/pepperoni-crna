![Pepperoni - Empowered by Futurice](/docs/pepperoni.png?v=2)

Futurice React Native Starter Kit
=================================

[![Join the chat at https://gitter.im/futurice/pepperoni-app-kit](https://badges.gitter.im/futurice/pepperoni-app-kit.svg)](https://gitter.im/futurice/pepperoni-app-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![React Native](https://img.shields.io/badge/react%20native-0.49.3-brightgreen.svg)](https://github.com/facebook/react-native)
[![Sponsored](https://img.shields.io/badge/chilicorn-sponsored-brightgreen.svg)](http://spiceprogram.org/oss-sponsorship/)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/futurice/pepperoni-app-kit/blob/master/LICENSE)

We :green_heart: building apps with React Native, because it helps us create high quality products for both major mobile platforms quickly and cost-effectively.

Getting started on a new app just takes too damn long, though. Most apps need the same basic building blocks and developer infrastructure, and we are bored of reinventing the wheel time and time again.

This Starter Kit reflects the best practices of React Native development we have discovered while building real-world applications for our customers. It is opinionated about tooling, patterns and development practices. It might not be a one-size-fits-all solution for everyone, but feel free to customize it for your needs, or just take inspiration from it.

React Native Starter Kit is a part of [Pepperoni](http://getpepperoni.com), a framework for kickstarting digital product development.

Getting started
---------------

### Bootstrapping a new project:

**TODO: Steps >= 3 need rethinking / automation**

1. `yarn global add create-react-native-app`
2. `create-react-native-app AwesomeProject`
3. `git clone https://github.com/futurice/pepperoni-crna`
4. `cp -r pepperoni-crna/template/* AwesomeProject`
5. Manually merge `pepperoni-crna/app.json` with `AwesomeProject/app.json`
6. `cd AwesomeProject && yarn add react-navigation react-redux redux redux-persist styled-components`

### Setting up existing Pepperoni project

1. `yarn install`
2. `yarn start`
