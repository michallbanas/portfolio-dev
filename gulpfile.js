const { src, dest, watch, series } = require('gulp')
const sass = require("gulp-dart-sass")
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require("gulp-cssnano")
const browsersync = require('browser-sync').create()

var autoprefixerOptions = {};

// Sass Task
function scssTask(){
  return src("./SCSS/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(dest("./dist/"));
};


// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch([("./SCSS/style.scss")], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask
);
