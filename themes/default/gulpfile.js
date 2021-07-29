const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass(cb) {
    src('assets/scss/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('assets/css'));

    cb();
}

exports.compileSass = compileSass;