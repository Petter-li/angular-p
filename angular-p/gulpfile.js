/*var gulp = require('gulp'),
   uglify = require('gulp-uglify');
   jshint = require('gulp-jshint');
   concat = require('gulp-concat');

gulp.task('minify', function () {
   gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
});
gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/js'));
});*/
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

/*gulp.task('js', function () {
   return gulp.src('app/js/controllers.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.uglify())
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest('dist/js'));
});*/
gulp.task('minify', function () {
   gulp.src('app/js/controllers.js')
      .pipe(plugins.uglify())
      .pipe(gulp.dest('dist/js'))
});
gulp.watch('app/js/controllers.js', ['minify']);