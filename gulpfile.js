// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// Debug task
gulp.task('debug', function() {
    nodemon({ // Configure nodemon to run & track project changes
        script: './bin/www', // the script to run the app
        ext: '',
        env: {'DEBUG': 'sven-codes-node:*'}, // Expression matches: `DEBUG=sven-codes-node:* node ./bin/www`
        watch: [
            'public/javascripts',
            'public/stylesheets/style.css',
            'public/stylesheets/responsiveness.css'
        ],
        tasks: ['concat-js','concat-css']
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
        .pipe(gulp.dest('./public/dist/javascripts'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/javascripts'));
})

gulp.task('concat-css', function () {
    gulp.src([ // CSS
        // Bootstrap
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'public/stylesheets/**/*.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/dist/stylesheets'))
        .pipe(rename('all.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/dist/stylesheets'));
    gulp.src([ // Fonts
        'node_modules/bootstrap/dist/fonts/*'])
        .pipe(gulp.dest('./public/dist/fonts'));
})

gulp.task('default',['concat-js', 'concat-css', 'debug']);
