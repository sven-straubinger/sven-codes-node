# sven-codes-node
Source code of the [sven.codes](http://sven.codes) website written in Node.js and AngularJS. Workflow is automated with [gulp](http://gulpjs.com).

## Install

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com)
2. Checkout project
3. Install gulp `npm install -g gulp-cli`
4. Run `npm install`
5. Run `gulp` while developing
6. Run `npm start` for production

`Note: Please start the node process within the root folder of this project to avoid path conflicts.`

## Production environment (with PM2)

To run the application within a PM2 environment, do the following:

1. Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com)
2. Checkout project
3. Install PM2: `npm install pm2 -g`
4. Run `pm2 start pm2.json`

## Testing

Angular Unit tests are achieved by `Karma`.
* Run `npm run-script test-client` for hot reloaded testing
* Run `npm run-script test-client-single-run` for a single test run

## TODOs

* 404 and 500 status code handling
* add caching
* update naming and folder structure for Angular related files
* setup E2E tests with protractor
* remove trailing slash --> 301 redirect
* add credits in imprint to https://simpleicons.org
* integrate imprint
* add "paging" with about-page and account-page
* add sitemap.xml
* integrate [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites)
* integrate [PostCSS](http://postcss.org)
* use the HTTPS context
