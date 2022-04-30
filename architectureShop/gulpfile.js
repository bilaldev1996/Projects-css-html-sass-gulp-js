const {src,dest,watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

/* Javascript */
const gulp = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const concat = require('gulp-concat')

//Imagenes
const avif = require('gulp-avif')
const webp = require('gulp-webp')
const imagemin = require('gulp-imagemin')


function css() {
    return src('src/sass/app.scss')
           .pipe(sourcemaps.init())
           .pipe(sass())
           .pipe(postcss([autoprefixer(), cssnano()]))
           .pipe(sourcemaps.write('.'))
           .pipe(dest('build/css'))
}
function dev() {
    watch('src/sass/**/*.scss',css)
    watch('src/img/**/*',imagenes)
    gulp.watch('./src/js/*.js',gulp.series('babel'))
}
function imagenes() {
    return src('src/img/**/*')
            .pipe(imagemin({optimizationLevel:3}))
            .pipe(dest('build/img'))
}

function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe(avif(opciones))
            .pipe(dest('build/img'))
}
function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
            .pipe(webp(opciones))
            .pipe(dest('build/img'))
}

/* Javascript */
gulp.task('babel',()=>{
    return gulp
        .src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(concat('scripts-min.js'))
        .pipe(gulp.dest('build/js'))
})

/* gulp.task('default',()=>{
    gulp.watch('./src/js/*.js',gulp.series('babel'))
}) */

exports.imagenes = imagenes;
exports.dev = dev;
exports.css = css;
exports.versionAvif = versionAvif;
exports.versionWebp = versionWebp;
/* exports.default = series(imagenes,versionAvif,versionWebp,css,dev)*/
exports.default = series(css,dev)