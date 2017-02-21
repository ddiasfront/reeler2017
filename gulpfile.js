'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	del = require('del'),
	cleanCSS = require('gulp-clean-css');


gulp.task("minifyScripts", function() {
return gulp.src("js/main.js")
      .pipe(uglify())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task("compileSass", function() {
return gulp.src(['scss/application.scss'])
    	.pipe(maps.init())
    	.pipe(sass())
    	.pipe(maps.write('./'))
    	.pipe(gulp.dest('css'))
});

gulp.task('minifyCSS',['compileSass'], function() {
	return gulp.src('css/application.css')
        .pipe(cleanCSS())
      	.pipe(rename('application.min.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('htmlPipe', function() {
   return gulp.src(['*.html'], { base:'./'})
   .pipe(gulp.dest('dist'));
});

gulp.task('watchFiles', function() {
	gulp.watch('scss/**/*.scss', ['compileSass', 'minifyCSS']);
	gulp.watch('js/*.js', ['minifyScripts']);
	gulp.watch('*.html', ['htmlPipe']);
})

gulp.task('clean', function(){
	del(['dist', 'css/application.css', 'js/main.min.js']);
});

gulp.task('build', ['minifyScripts', 'compileSass', 'minifyCSS'], function () {
return gulp.src(['css/application.*.css', 'index.html', 'img/**'], { base:'./'})
	  .pipe(gulp.dest('dist'));
}); 

gulp.task('serve', ['watchFiles']);

gulp.task("default",["clean"], function() {
	gulp.start('build');
});


