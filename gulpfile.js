const { watch, series } = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function transpile() {
    return src('src/*.html').pipe(dest('public'));
}

function cssTranspile(cb) {
    src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/css'));

    cb();
}

function jsTranspile() {
    return src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(dest('public/js'));
}

// a figyelés a gulp parancssal inditható a terminálban
exports.default = function() {
    watch('src/*.html', transpile);
    watch('src/sass/*.scss', cssTranspile);
    watch('src/js/*.js', jsTranspile);
}