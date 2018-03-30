var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Bootstrap - Sass to CSS
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/template/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/template/css"))
        .pipe(browserSync.stream());
});

// Boostrap JS
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("src/template/js"))
        .pipe(browserSync.stream());
});

// Static Server and watcher
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: "./src",
          index: "/template/html/index.html"
        }
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/template/scss/*.scss'], ['sass']);
    gulp.watch("src/template/html/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
