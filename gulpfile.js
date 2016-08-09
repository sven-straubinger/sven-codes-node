// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');

// Gulp's default task
gulp.task('default', function() {
    nodemon({ // Configure nodemon to run & track project changes
        script: './bin/www', // the script to run the app
        ext: ''
    }).on('restart', function(){
        gulp.src('*')
            .pipe(notify('Recompiling ...'));
    })
})
