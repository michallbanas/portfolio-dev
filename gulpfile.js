var gulp = require('gulp');

const { src, dest, watch }=require("gulp");
const compileSass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

// ... variables
var autoprefixerOptions = {
   
  };

  var input = "./SCSS/**/*.scss";
  var output = "./dist/";
  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

compileSass.compiler = require("node-sass");

const bundleSass = () => {
    return src("./SCSS/**/*.scss")
    .pipe(compileSass().on("eror", compileSass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(dest("./dist/"));
};


const devWatch = () => {
    watch("./SCSS/**/*.scss", bundleSass);
};


exports.bundleSass = bundleSass; 
exports.devWatch = devWatch;
