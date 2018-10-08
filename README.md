# React Native App 

Quality assurane app improves the supply chain management work. It helps the PG team to collaborate the work with the seller more efficiently. This app is being developed in React-Native.

## STATUS

Project is now in development mode. It uses the bizongo-backend as a base api source. It uses react-native

# Create React Native App
[![Backers on Open Collective](https://opencollective.com/create-react-native-app/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/create-react-native-app/sponsors/badge.svg)](#sponsors) [![npm version](https://badge.fury.io/js/create-react-native-app.svg)](https://badge.fury.io/js/create-react-native-app)

Create React Native apps with no build configuration.

* [Getting Started](#getting-started)
* [User Guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

Once you're up and running with Create React Native App, visit [this tutorial](https://facebook.github.io/react-native/docs/tutorial.html) for more information on building apps with React Native.

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start
```
## Getting Started

### Installation

Install it once globally:

```sh
$ npm install -g create-react-native-app
# or
$ yarn global add create-react-native-app
```

You'll need to have Node v6 or later on your machine. We strongly recommend using npm v3, v4, or a recent version of Yarn. Create React Native App does not currently work with npm v5 due to bugs in npm ([you can track the issue here](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103)).

### Creating an App

To create a new app, run:

```sh
$ create-react-native-app QcApp
$ cd QcApp
```

This will create a directory called `QcApp` inside the current working directory. Inside `QcApp`, this will generate the initial project structure and install all of its dependencies.

### Run an App for ios

```sh
$ react-native run-ios
```

### Run an App for Android

```sh
$ react-native run-android
```
## FAQs

### What API specification should I be looking at while developing?

Apps made with Create React Native App support everything in the Components and APIs sections of the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

Apps made with Create React Native App also support most of the JavaScript-to-Native APIs provided by the [Expo SDK](https://docs.expo.io/versions/latest/sdk/index.html), since they are loaded by the Expo app.

### What are the limitations of Create React Native App?

The main limitation of a Create React Native App project is that it must be written in pure JavaScript and not have any dependencies which rely on custom native code (i.e. ones which require running `react-native link` to work). This allows the projects to load directly on a phone without native compilation, and also means that it's not necessary to install or use Android Studio or Xcode.

### What if I want to write custom native code for my app?

If you're sure that you need custom native code, please read the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md).

### How do I get my app into the Play Store/App Store?

If you need to build IPAs and APKs for publishing to the App Store and/or Play Store, you can either eject (see above guide) and build them yourself using Xcode and Android Studio, or you can use a service like [Expo's standalone app builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) to publish your pure JS

