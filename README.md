# sven-codes-node
Source code of the [sven.codes](http://sven.codes) website written in Node.js and AngularJS.

## Install

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com)
2. Checkout project
3. Run `npm install`
4. Run `npm run-script debug` while developing
5. Run `npm start` for production

`Note: Please start the node process within the root folder of this project to avoid path conflicts.`

## Testing

Angular Unit tests are achieved by `Karma`.
* Run `npm run-script test-client` for hot reloaded testing
* Run `npm run-script test-client-single-run` for a single test run

## TODOs

* 404 and 500 status code handling
* add caching
* use `ng-cloak` or `ng-bind` to avoid blinking content
* bundle JavaScript and CSS files
* fix naming and folder structure for Angular related files
* setup E2E tests with protractor
* remove trailing slash --> 301 redirect
* review Glyphicons integration
