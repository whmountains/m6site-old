var sourcemaps  = require('gulp-sourcemaps')
var gulpif      = require('gulp-if')
var runSequence = require('run-sequence')
var flatten     = require('gulp-flatten')
var changed     = require('gulp-changed')

var gulp        = require('gulp')
// var less        = require('gulp-less')
var sass        = require('gulp-sass')
var concat      = require('gulp-concat')
var mincss      = require('gulp-minify-css')
var imagemin    = require('gulp-imagemin')
var del         = require('del')
var browserSync = require('browser-sync')
var critical    = require('critical')
var uglify      = require('gulp-uglify')
var minifyin    = require('gulp-minify-inline')
var htmlmin     = require('gulp-htmlmin')

gulp.task('hello', function() {
  console.log('hello, world!')
})

gulp.task('css', function() {
  return gulp.src('src/css/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(mincss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

var IMGDIR = 'dist/img';
gulp.task('images:progressive', function() {
  return gulp.src('src/img/progressive/**/*')
    .pipe(changed(IMGDIR))
    .pipe(imagemin({
      interlaced: true,
      progressive: true
    }))
    .pipe(flatten())
    .pipe(gulp.dest(IMGDIR))
})

gulp.task('images:baseline', function() {
  return gulp.src('src/img/baseline/**/*')
    .pipe(changed(IMGDIR))
    .pipe(imagemin({
      interlaced: false,
      progressive: false
    }))
    .pipe(flatten())
    .pipe(gulp.dest(IMGDIR))
})

gulp.task('images:other', function() {
  return gulp.src('src/img/other/**/*')
    .pipe(changed(IMGDIR))
    .pipe(imagemin({
      optimizationLevel: 7,
      multipass: true
    }))
    .pipe(flatten())
    .pipe(gulp.dest(IMGDIR))
})

// TODO: only process changed images
gulp.task('images', ['images:progressive', 'images:baseline', 'images:other'])

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(flatten())
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('html', function() {
  return gulp.src('src/html/**/*')
    .pipe(flatten())
    .pipe(gulpif('*.html', htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: false,
      removeRedundantAttributes: true,
      preventAttributesEscaping: false,
      useShortDoctype: true,
      removeEmptyAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: false,
      removeIgnored: true,
      removeEmptyElements: false,
      keepClosingSlash: true,
      caseSensitive: false,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: false
    })))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('js', function() {
  return gulp.src('src/js/**/*')
    .pipe(flatten())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

// TODO: this isn't properly ignoring images
gulp.task('clean', function() {
  del('dist/**/*', '!dist/img/**/*')
})

gulp.task('clean-deep', function() {
  del('dist')
})

gulp.task('browserSync', ['default'], function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('critical', ['default'], function() {
  critical.generate({
    inline: true,
    base: 'dist/',
    src: 'index.html',
    dest: 'dist/index.html',
    minify: true,
    width: 1300,
    height: 1200
  });
})

gulp.task('default', ['css', 'images', 'fonts', 'html', 'js'])

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/html/**/*', ['html'])
  gulp.watch('src/css/**/*', ['css'])
  gulp.watch('src/img/progressive/**/*', ['images:progressive'])
  gulp.watch('src/img/baseline/**/*', ['images:baseline'])
  gulp.watch('src/img/other/**/*', ['images:other'])
  gulp.watch('src/fonts/**/*', ['fonts'])
})
