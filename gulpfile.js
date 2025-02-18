// const GulpClient = require('gulp');

// --- ПОДКЛЮЧЕНИЕ МОДУЛЕЙ ---
const {src, dest, watch, parallel, series} = require('gulp')
const gulp = require('gulp')
const fileSystem = require('fs')

const concat = require('gulp-concat') // Плагин для объединения файлов в один
const gulpClean = require('gulp-clean') // Удаляет папку со сборкой
const scss = require('gulp-sass')(require('sass')) // Обрабатывает scss файлы
const sassGlob = require('gulp-sass-glob') // Импорт в .scss любого уровня сложности
const convertFonts = require('gulp-fonter') // Конвертирует шрифты
// npm i fonteditor-core

const autoPrefixer = require('gulp-autoprefixer') // Добавляет вендорные префиксы
const browserSync = require('browser-sync').create() // Запускает сервер
const browserSyncReload = browserSync.reload(); // Перезагружает страницу
const checkChanges = require('gulp-changed') // Проверяет изменения в обрабатываемых файлах
const fileInclude = require('gulp-file-include') // Включает файлы один в другой
// const { log } = require('gulp-clean/utils')
const ignoreErrors = require('gulp-plumber') // Отключает проверку на ошибки
const minifyImage = require('gulp-imagemin') // Минифицирует изображения

// gulp group css media queries
// gulp webp html
// gulp webp css
// gulp fonter

// Для production
const uglify = require('gulp-uglify-es').default // Плагин для минификации JS
// Минифицированная версия файла JS
        // .pipe(concat('main.min.js'))



function compilationHTML() {
    return src('./source/pages/**/*.html')
        // Отключает проверку на ошибки
        .pipe(ignoreErrors())
        // Включает файлы с include
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // Помещаем итог в папку
        .pipe(dest('build/pages/'))
        // Обновляем страницу
        .pipe(browserSync.stream())
}

function compilationIndexHTML() {
    return src('./source/index.html', { sourcemaps: true })
        // Отключает проверку на ошибки
        .pipe(ignoreErrors())
        // Включает файлы с include
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // Помещаем итог в папку
        .pipe(dest('build/', { sourcemaps: true }))
        // Обновляем страницу
        .pipe(browserSync.stream())
}
// Объединяем всё в один css файл
function compilationStyles() {
    return src('source/main.scss', { sourcemaps: true })
        .pipe(ignoreErrors())
        .pipe(sassGlob())
        .pipe(scss().on('error', scss.logError))
        // .pipe(autoPrefixer())
        .pipe(dest( 'build/css', { sourcemaps: true } ))
        .pipe(browserSync.stream())
}
// Объединяем несколько скриптов в один
function compilationJS() {
    return src ('source/common.blocks/**/*.js', { sourcemaps: true })
        // 'node_modules/swiper/swiper-bundle.js', для установки модулей
        .pipe(ignoreErrors())
        .pipe(concat('main.js'))
        .pipe(dest('build/js', { sourcemaps: true }))
        .pipe(browserSync.stream(), browserSync.reload())
        
}

function cleanFolder(done) {
    // return src('build')
    //     .pipe(ignoreErrors())
    //     .pipe(gulpClean({ allowEmpty: true }), {
    //         read: false,
    //         force: true
    //     })
    if (fileSystem.existsSync('./build')) {
        return gulp
            .src('./build/')
            .pipe(gulpClean({ read: false, force: true }))
            }
    done()
}

function compressedImages() {
    return src([
        './source/common.blocks/**/*.jpg',
        './source/common.blocks/**/*.jpeg',
        './source/common.blocks/**/*.ico',
        './source/common.blocks/**/*.png',
        './source/common.blocks/**/*.gif',
        './source/common.blocks/**/*.webp',
        './source/common.blocks/**/*.svg',
        './source/common.blocks/**/*.bmp',
        './source/common.blocks/**/*.heif',
        './source/common.blocks/**/*.avif',
        './source/common.blocks/**/*.tiff',
        ])
        .pipe(checkChanges('./build/images/'))
        .pipe(minifyImage())
        .pipe(dest('./build/images/'))
        .pipe(browserSync.stream())
}

// function compressedImages() {
//     return src([
//         './source/**/*.jpg',
//         './source/**/*.jpeg',
//         './source/**/*.ico',
//         './source/**/*.png',
//         './source/**/*.gif',
//         './source/**/*.webp',
//         './source/**/*.svg',
//         './source/**/*.bmp',
//         './source/**/*.heif',
//         './source/**/*.avif',
//         './source/**/*.tiff',
//         ])
//         .pipe(checkChanges('./build/images/'))
//         .pipe(minifyImage())
//         .pipe(dest('./build/images/'))
//         .pipe(browserSync.stream())
// }

function compilationFonts() {
    return src (['source/project.blocks/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}'])
        // .pipe(ignoreErrors())
        .pipe(checkChanges('./build/fonts'))
        .pipe(convertFonts( { 
            formats: ["ttf", "woff"] 
        } ))
        .pipe(dest('./build/fonts'))
        .pipe(browserSync.stream())
}

// Запускает локальный сервер
function startingServer() { 
    browserSync.init({
        // watch: true,
        server: "./build",
        notify: false,
        // Don't try to inject, just do a page refresh
        // injectChanges: false,
    });
}


// Смотрит за изменениями в файлах
function watchingChanges() {
    watch(['source/**/*.html'], { delay: '500' }, compilationHTML)
    watch(['source/index.html'], { delay: '500' }, compilationIndexHTML)
    watch(['source/**/*.scss'], { delay: '500' }, compilationStyles)
    watch(['source/**/*.js'], { delay: '500' }, compilationJS)
    watch(['source/project.blocks/fonts/*.*'], { delay: '200' }, compilationFonts)
    watch(['source/project.blocks/fonts/*.*'], browserSyncReload)
    watch([
        './source/common.blocks/**/*.jpg',
        './source/common.blocks/**/*.jpeg',
        './source/common.blocks/**/*.ico',
        './source/common.blocks/**/*.png',
        './source/common.blocks/**/*.gif',
        './source/common.blocks/**/*.webp',
        './source/common.blocks/**/*.svg',
        './source/common.blocks/**/*.bmp',
        './source/common.blocks/**/*.heif',
        './source/common.blocks/**/*.avif',
        './source/common.blocks/**/*.tiff',
        ], { delay: '200' }, compressedImages)
};

// Доступность для вызова из командной строки
exports.compilationHTML = compilationHTML;
exports.compilationIndexHTML = compilationIndexHTML;
exports.compilationStyles = compilationStyles;
exports.compilationJS = compilationJS;
exports.startingServer = startingServer;
exports.watchingChanges = watchingChanges;
exports.cleanFolder = cleanFolder;
exports.compilationFonts = compilationFonts;


exports.default = series(
    cleanFolder,
    parallel(
        compilationIndexHTML, compilationHTML, compilationStyles, compilationJS, compilationFonts, compressedImages
    ),
    parallel(startingServer, watchingChanges)
);