var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('default', function() {
//    console.log("Initializing Gulp");
// });


/**
 * Convert css to sass
 */
gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
