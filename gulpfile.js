let gulp = require('gulp');
let server = require('gulp-server-livereload');

gulp.task('default', () =>
    gulp.src('.').pipe(server({ livereload: true, port: 8000, fallback: 'index.html' }))
);
