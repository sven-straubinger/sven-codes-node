// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// Debug task
gulp.task('debug', function() {
    nodemon({ // Configure nodemon to run & track project changes
        script: './bin/www', // the script to run the app
        ext: '',
        env: {'DEBUG': 'sven-codes-node:*'} // Expression matches: `DEBUG=sven-codes-node:* node ./bin/www`
    }).on('restart', function(){
        gulp.src(['./public/javascripts/*.js']);
    })
})
