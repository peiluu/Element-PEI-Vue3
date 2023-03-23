/* eslint-disable no-unused-vars */
const gulp = require('gulp');
// const sass = require('gulp-sass'); // sass => scc
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css'); // 压缩css

gulp.task('sass', async () => {
	return gulp
		.src('components/css/**/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest('componentsdist/distcss'));
});
	