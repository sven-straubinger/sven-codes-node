module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      './public/javascripts/vendor/jquery-1.11.2.min.js',
      './public/javascripts/vendor/bootstrap.min.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-resource/angular-resource.js',
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
