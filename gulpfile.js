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
        tasks: ['concat']
    })
})

gulp.task('concat', function () {
    gulp.src([
        'public/javascripts/**/*.module.js',  // load modules first
        'public/javascripts/*!(.module|.spec).js',  // load other files except modules/specs on top folder
        'public/javascripts/**/*!(.module|.spec).js'])  // load other files except modules/specs on all subfolders
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/dist/javascripts'));
})

gulp.task('default',['concat', 'debug']);
