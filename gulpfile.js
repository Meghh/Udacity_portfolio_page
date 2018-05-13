var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


/**
 * Convert css to sass
 */
gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./css'))

      .pipe(browserSync.reload({
          stream: true
      }));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('styles'));
});


/**
 *  Live reloading
 */
gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('sass/**/*.scss', gulp.series('styles'));
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('styles', 'serve'));
