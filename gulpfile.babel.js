// var sourcemaps  = require('gulp-sourcemaps')
// var gulpif      = require('gulp-if')
// var runSequence = require('run-sequence')
var flatten     = require('gulp-flatten')
var changed     = require('gulp-changed')
var lazypipe    = require('lazypipe')
// var merge       = require('merge-stream')
var series      = require('stream-series')
// var debug       = require('gulp-debug')
var source      = require('vinyl-source-stream')
// var _           = require('lodash')
var gutil       = require('gulp-util')

var gulp        = require('gulp')
// var less        = require('gulp-less')
var sass        = require('gulp-sass')
var concat      = require('gulp-concat')
var mincss      = require('gulp-minify-css')
var imagemin    = require('gulp-imagemin')
var del         = require('del')
var browserSync = require('browser-sync')
// var critical    = require('critical')
// var ghPages     = require('gulp-gh-pages')
// var uglify      = require('gulp-uglify')
// var minifyin    = require('gulp-minify-inline')
// var htmlmin     = require('gulp-htmlmin')
var acss        = require('gulp-atomizer')
// var babelify    = require('babelify')
var browserify  = require('browserify')
var watchify    = require('watchify')

// Basic test task
gulp.task('hello', function() {
  console.log('hello, world!')
})

// compile and optimize sass, generate atomic.css,
// and merge them all together.  (atomic comes second)
var csspipe = lazypipe()
  .pipe(sass)
  .pipe(mincss)

var acsspipe = lazypipe()
  .pipe(acss)
gulp.task('css', function() {
  return series(
    gulp.src('src/css/styles.scss').pipe(csspipe()),
    gulp.src('src/html/index.html').pipe(acsspipe())
  )
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

// Image tasks ---------------------------------------------

var IMGDIR = 'dist/img'
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

// End image tasks -------------------------------------------------------------

// Delete the fonts task because we're not using custom fonts anymore
// gulp.task('fonts', function() {
//   return gulp.src('src/fonts/**/*')
//     .pipe(flatten())
//     .pipe(gulp.dest('dist/fonts'))
// })

// gulp.task('html', function() {
//   return gulp.src('src/html/**/*')
//     .pipe(flatten())
//     .pipe(gulpif('*.html', htmlmin({
//       removeComments: true,
//       removeCommentsFromCDATA: true,
//       removeCDATASectionsFromCDATA: true,
//       collapseWhitespace: true,
//       conservativeCollapse: true,
//       collapseBooleanAttributes: true,
//       removeAttributeQuotes: false,
//       removeRedundantAttributes: true,
//       preventAttributesEscaping: false,
//       useShortDoctype: true,
//       removeEmptyAttributes: false,
//       removeScriptTypeAttributes: false,
//       removeStyleLinkTypeAttributes: true,
//       removeOptionalTags: false,
//       removeIgnored: true,
//       removeEmptyElements: false,
//       keepClosingSlash: true,
//       caseSensitive: false,
//       minifyJS: true,
//       minifyCSS: true,
//       minifyURLs: false
//     })))
//     .pipe(gulp.dest('dist'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// })

// just copy the html folder to dist and call it a day
// we'll wory about the optimizations later
gulp.task('html', function() {
  return gulp.src('src/html/**/*')
    .pipe(gulp.dest('dist'))
})

// js task ---------------------------------------------------------------------

var bConf = {
  entries: 'src/components/root.jsx',
  debug: true
}

gulp.task('js', function() {
  return browserify(bConf) // init browserify with our settings
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('js-watch', function () {

  var b = browserify({
    ...bConf,
    cache: {},
    packageCache: {},
    plugin: [watchify]
  })

  var bundle = function () {
    b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'))
  }

  b.on('update', bundle)
  b.on('log', gutil.log)

  return bundle()

})

// end js stuff ----------------------------------------------------------------

gulp.task('clean', function() {
  del('dist')
})


// spin up a dev server (depend on default-watch, not default)
gulp.task('browserSync', ['default'], function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
})

// gulp.task('critical', ['default'], function() {
//   critical.generate({
//     inline: true,
//     base: 'dist/',
//     src: 'index.html',
//     dest: 'dist/index.html',
//     minify: true,
//     width: 1300,
//     height: 1200
//   });
// })

// gulp.task('deploy', ['critical', 'default'], function() {
//   return gulp.src('./dist/**/*')
//     .pipe(ghPages());
// })

let uTasks = ['css', 'images', 'html']

gulp.task('default', [...uTasks, 'js'])
gulp.task('default-watch', [...uTasks, 'js-watch'])

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/html/**/*', ['html', 'css'])
  gulp.watch('src/css/**/*', ['css'])
  gulp.watch('src/img/progressive/**/*', ['images:progressive'])
  gulp.watch('src/img/baseline/**/*', ['images:baseline'])
  gulp.watch('src/img/other/**/*', ['images:other'])
  // gulp.watch('src/fonts/**/*', ['fonts'])
})
