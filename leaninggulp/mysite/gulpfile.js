var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('msg', ['html'], function() {
  console.log('html copy done!')
});

gulp.task('img', function() {
  return gulp.src('./src/img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['html', 'img']);
