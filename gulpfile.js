var gulp = require('gulp');

const { src, dest, watch }=require("gulp");
const compileSass = require("gulp-sass");


compileSass.compiler = require("node-sass");

const bundleSass = () => {
    return src("./SCSS/**/*.scss")
    .pipe(compileSass().on("eror", compileSass.logError))
    .pipe(dest("./dist/"));

};

const devWatch = () => {
    watch("./SCSS/**/*.scss", bundleSass);
};

exports.bundleSass = bundleSass; 
exports.devWatch = devWatch;