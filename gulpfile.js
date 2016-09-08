const gulp = require('gulp');

gulp.task('browser-sync', () => {
    const browserSync = require('browser-sync').create();

    browserSync.init({
        open: false,
        server: './dist'
    });

    gulp.watch("dist/*").on('change', browserSync.reload);
});

var cache;
gulp.task('js', () => {
    const rollup = require( 'rollup' );
    const buble = require('rollup-plugin-buble');
    // const eslint = require('rollup-plugin-eslint');
    const uglify = require('rollup-plugin-uglify');
    const filesize = require('rollup-plugin-filesize');

    const config = {
        entry: 'src/index.js',
        cache,
        plugins: [
            buble(),
            uglify(),
            filesize()
        ]
    };

    return rollup.rollup(config).then(bundle => {
        cache = bundle;

        return bundle.write({
            // moduleName: 'asdf',
            format: 'iife',
            dest: 'dist/cookieclicker.min.js',
            sourceMap: true
        });
    });
});

gulp.task('js:watch', () => {
    gulp.watch('src/**/*', ['js']);
});

gulp.task('build', ['js']);
gulp.task('dev', ['build', 'browser-sync', 'js:watch']);
