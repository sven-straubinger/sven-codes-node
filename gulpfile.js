// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

// Debug task
gulp.task('debug', function() {
    nodemon({ // Configure nodemon to run & track project changes
        script: './bin/www', // the script to run the app
        ext: '',
        env: {'DEBUG': 'sven-codes-node:*'}, // Expression matches: `DEBUG=sven-codes-node:* node ./bin/www`
        watch: [
            'public/javascripts'
        ],
        tasks: ['concat-js']
    })
})

gulp.task('concat-js', function () {
    gulp.src([
        // jQuery
        'node_modules/jquery/dist/jquery.min.js',
        // Bootstrap
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        // Angular basics
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-resource/angular-resource.js',
        // Angular modules and components
        'public/javascripts/**/*.module.js',  // load modules first
        'public/javascripts/**/*.js',  // load all other files
        '!public/javascripts/**/*.spec.js'])  // exclude specs
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/dist/javascripts'));
})

gulp.task('default',['concat-js', 'debug']);
