let { src, dest, watch, series } = require('gulp')
let sass = require("gulp-dart-sass")
let autoprefixer = require('gulp-autoprefixer')
let cssnano = require("gulp-cssnano")
let browsersync = require('browser-sync').create()

let autoprefixerOptions = {};

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
