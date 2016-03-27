var gulp = require('gulp'),
	rename = require('gulp-rename'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');

gulp.task('build-cli', () => {
	return browserify({entries: './public/js/src/app.jsx', extensions: ['.js', '.jsx'], debug: true})
		.transform('babelify', {presets: ['es2015', 'stage-3', 'react']})
		.transform('brfs')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./public/js/dist/'));
});

gulp.task('watch', () => {
	gulp.watch([
		'./public/js/src/**/*.js',
		'./public/js/src/**/*.jsx'
	], ['build-cli']);
});

gulp.task('default', ['watch']);
