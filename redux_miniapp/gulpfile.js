var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

function errorHandler(err) {
  console.log('Error: ' + err.message);
}

// 自動ブラウザリロード
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./" // ルートとなるディレクトリを指定
    }
  });
});

// Javascriptへのビルド
// ES6かつJSXなファイル群をbuild/bundle.jsへ変換する
gulp.task('build', function() {
  var browserify = require("browserify");
  browserify("./src/entry.js")
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .on('error', errorHandler)
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({stream: true}));
});

// gulpコマンドで起動したときのデフォルトタスク
gulp.task('default', ['build', 'browser-sync']);
