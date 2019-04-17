let gulp = require('gulp');

let inject = require('gulp-inject');

gulp.task('inject', function () {

    let jsPath = ['./app/app.js', './app/appConfig.js', './app/components/**/*.js', './app/filters/**/*.js', './app/services/**/*.js'];
    let cssPath = ['./app/app.css'];
    return gulp
        .src('./app/index.html')
        .pipe(inject(gulp.src(jsPath), {relative:true}))
        .pipe(inject(gulp.src(cssPath), {relative:true}))
        .pipe(gulp.dest('./app/'));
});
