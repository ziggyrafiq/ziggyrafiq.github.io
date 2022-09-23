const { src, dest, parallel, series, watch} = require('gulp');

const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const changed = require('gulp-changed');
const order = require("gulp-order");

function clear() {
    return src(
        'Src/Styles/CSS/*',
       {
            read: false
        }   
   
    )
        .pipe(clean());
}

function js() {
 const source = 'Src/Scripts/**/*.js';

    return src(source)
        .pipe(order([
            "_Blog-Posts.js",
            "_Demo-Projects.js",
            "_Tabs.js"
        ]))
        .pipe(changed(source))
        .pipe(concat('ZR-Scripts.js'))
        .pipe(clean('./Dist/Scripts/'))
        .pipe(dest('./Dist/Scripts/'))
}

function css() {
    const source = 'Src/Styles/SASS/**/*.scss';

    return src(source)
        .pipe(changed(source))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
           extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('Src/Styles/CSS/'))
    .pipe(dest('./Dist/Styles/CSS/'));
}

const images = () => { return src('Src/Images/**/*').pipe(dest('./Dist/Images/')) };

const fonts = () => { return src('Src/Styles/Fonts/**/*').pipe(dest('./Dist/Styles/Fonts/')) };
const icons = () => { return src('Src/Styles/Icons/**/*').pipe(dest('./Dist/Styles/Icons/')) };

const data = () => { return src('Src/Data/**/*').pipe(dest('./Dist/Data/')) };

const html5 = () => { return src('Src/index.html').pipe(dest('dist/')) };

function watchFiles() {
    watch('Src/Styles/SASS/**/*.scss', css);
    watch('Src/Scripts/**/*.js', js);
    watch('Src/Images/**/*', images);
    watch('Src/Data/**/*', data);
    watch('Src/index.html', html5);
    watch('Src/Styles/Fonts/**/*', fonts);
    watch('Src/Styles/Icons/**/*', icons);
}

exports.watch = parallel(watchFiles);

exports.build = series(clear, parallel(js, css, images, data, html5,fonts,icons));