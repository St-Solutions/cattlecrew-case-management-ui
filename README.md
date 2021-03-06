# CattleCrew Case Management UI
 
 Welcome to the CattleCrew Case Management UI source code!
 
![intro][intro]

The CattleCrew Case Management UI provides an interface to interact with CMMN 1.1 models in the camunda BPM platform via REST. It is development with [AngularJS](https://angularjs.org/) and uses [Grunt](http://gruntjs.com/) as build tool.

The following libraries are used in this project:

* __cmmn-js__: provides diagram rendering support for CMMN 1.1 models 

## Try it out

Download the desired release from the [Release page](https://github.com/opitzconsulting/cattlecrew-case-management-ui/releases/) and deploy it in your application server (e.g. Apache Tomcat).

Follow the instructions on https://camunda.org/ to adjust a CMMN Project.

After adjusting the backend you should call the CattleCrew Case Management UI webapp (e.g. [http://localhost:8080/cattlecrew-case-management-ui/](http://localhost:8080/cattlecrew-case-management-ui/)) via your browser to interact with your CMMN project.

## Development

### Prerequisite

For this project you need [node.js](http://nodejs.org/) in version ~4.5.0 with a npm version ~3.10.5.
To ensure to have the an actual version of [npm](https://www.npmjs.com/) update it globally using `npm install -g npm`.
You need to install [bower](https://bower.io/) globally using `npm install -g bower`.
You will also need to install [grunt](http://gruntjs.com/) globally using `npm install -g grunt grunt-cli`.
Optionally if you want to use a scaffolding tool for development you should install [yeoman](http://yeoman.io/) globally using `npm install -g yo`.

### Setup

#### Install the webapp

Follow the instructions:

```sh
# cd <path to your workspace>
git clone git@github.com:opitzconsulting/cattlecrew-case-management-ui.git
cd cattlecrew-case-management-ui
npm install
bower install
grunt
```

Finally the distribution will be build in the `/build` folder named as `/cattlecrew-case-management-ui.war`.

To start a web-server for development, call

```sh
grunt serve
```

The webapp is then available pointing a browser at [http://localhost:9000](http://localhost:9000)

You can now start developing. Please note CORS problems eventually.

#### Testing

To run the tests with grunt, call

```sh
grunt test
```

#### Create a CMMN Project

The backend part is not in scope of this project but in most cases you need JDK 7+ and [Maven](https://maven.apache.org/) 3.2.1+.

Go to [https://camunda.org/](https://camunda.org/) and follow the instructions to

* setup an application server,
* create a BPM Project
* and add a CMMN 1.1 model. 

You could follow the instructions on the [_Get started with Camunda and CMMN 1.1 guide_](https://docs.camunda.org/get-started/cmmn11/).

### Structure of this project

The structure is as follows:

* `app` - HTML, CSS and Javascript sources.
* `test` - Tests for the app sources.

## Browsers support

The supported browsers are:

- Chrome
- Firefox
- Internet Explorer 9+

## Contributing

You are __more than welcome__ to take part on the development of this project!

Clone the repository, add, fix or improve and send us a pull request.
But please take care about the commit messages and have a look at this [wiki entry](https://github.com/erlang/otp/wiki/Writing-good-commit-messages).

You can submit issues in the [Issues](https://github.com/opitzconsulting/cattlecrew-case-management-ui/issues/).

In place of a guide, just follow the formatting of existing code (and / or use the [.editorconfig](http://editorconfig.org/) files provided).

## Help and support

* Have a look at the [blog entry](https://thecattlecrew.net/2017/02/23/published-cattlecrew-case-management-ui/) at [CattleCrew Blog](https://thecattlecrew.net/)
* Contact us via [e-mail](mailto:halil.hancioglu@opitz-consulting.com) 
* Visit our website [http://www.opitz-consulting.com/](http://www.opitz-consulting.com/) to get more detailed info about us

## License

Copyright (c) 2016 Halil Hancioglu
Licensed under the [MIT license](./LICENSE).

## Build Status

[![Build Status](https://travis-ci.org/opitzconsulting/cattlecrew-case-management-ui.svg?branch=master)](https://travis-ci.org/opitzconsulting/cattlecrew-case-management-ui)

[intro]: assets/intro.png
