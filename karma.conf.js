module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './public/javascripts/**/*.module.js',
      './public/javascripts/*!(.module|.spec).js',
      './public/javascripts/**/*!(.module|.spec).js',
      './public/javascripts/**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
