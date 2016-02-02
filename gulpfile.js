var data        = require('gulp-data'),
    jade        = require('gulp-jade'),
    gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    path        = require('path'),
    sass        = require('gulp-sass'),
    inject      = require('gulp-inject'),
    clean       = require('gulp-clean'),
    browserify  = require('browserify'),
    envify      = require('envify/custom'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    sourcemaps  = require('gulp-sourcemaps'),
    ghPages     = require('gulp-gh-pages');

var src = 'src',
    dist = 'dist',
    js = path.join(src, 'js'),
    templates = path.join(src,'templates'),
    theme = 'yeti',
    NODE_ENV = "development";

gulp.task('clean', function () {
	return gulp.src(dist, {read: false})
		.pipe(clean());
});

gulp.task('html', ['resources', 'clean'], function() {
  return gulp.src(path.join(templates,'*.jade'))
    .pipe(data(function(file) {
      return require(file.base + path.basename(file.path, '.jade') + '.json');
    }))
    .pipe(jade({pretty: true}))
    .pipe(inject(gulp.src(['css/**/*','js/**/*'], {read: false, cwd: dist}), {addRootSlash: false}))
    .pipe(gulp.dest(dist));
});

gulp.task('styles', ['clean'], function(){
  var opts = {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets',
                   './node_modules/bootswatch/' + theme,
                   './node_modules/font-awesome/scss']
  };
  return gulp.src(path.join(src, 'scss', 'main.scss'))
    .pipe(sass(opts))
    .pipe(gulp.dest(path.join(dist, 'css')));
});

gulp.task('fonts', ['clean'], function(){
  return gulp.src(['./node_modules/bootstrap-sass/assets/fonts/**/*',
                   './node_modules/font-awesome/fonts/**/*'])
    .pipe(gulp.dest(path.join(dist,'fonts')));
});

gulp.task('js', ['clean'], function(){
  return  browserify({
      entries: path.join(js, 'main.js'), // source js file
      debug: true
    })
    .transform(envify({ _: 'purge', NODE_ENV: NODE_ENV}), {global: true})
    .bundle()
    .pipe(source('main.js')) //Name the ouput js file
    .pipe(buffer())
    // .pipe(uglify({
    //   compress: true
    //   ,mangle: false
    // }).on('error', gulpUtil.log))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.join(dist, 'js')));
});

gulp.task('deploy', function() {
  return gulp.src(dist + '/**/*')
    .pipe(ghPages());
});

gulp.task('resources', ['styles', 'fonts', 'js']);

gulp.task('default', ['html']);

gulp.task('dist', function(cb) {
  NODE_ENV = 'production';
  runSequence('default', cb);
});
