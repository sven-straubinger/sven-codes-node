# sven-codes-node
Source code of the [sven.codes](http://sven.codes) website written in Node.js and AngularJS.

## Install

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com)
2. Checkout project
3. Run `npm install`
4. Run `npm run-script debug` while developing
5. Run `npm start` for production

## Testing

Angular Unit tests are achieved by `Karma`.
* Run `npm run-script test-client` for hot reloaded testing
* Run `npm run-script test-client-single-run` for a single test run

## TODOs

* 404 and 500 status code handling
* Caching
* Put Angular file to end of body, use `ng-cloak` or `ng-bind` to avoid blinking content
* Add bootstrap / add HTML5 boilerplate
* Rename `individual` to `profile`
* Bundle JavaScript files
* Fix naming and folder structure for Angular related files, review express/angular generator
* Setup E2E tests with protractor
* check against via yeoman: generator-angular
* remove trailing slash --> 301 redirect
* integrate JavaScript at botto, CSS in header
