var  	gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	// concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass');


// Minification of Javascript file
// Uglifies 
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(plumber())
	.pipe(uglify()) /*uglify*/
	.pipe(gulp.dest('build/js'));
	
});
// Image task
// Image compression
gulp.task('image', function(){
	return gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

// Watch task
/*Looks for a changes */
gulp.task('watch', function(){ /*this is a build in watch method*/
	gulp.watch('js/*.js',  ['scripts']); /*watch the path and do scripts task*/ 
      gulp.watch('sass/**/*.scss', ['sass']);
	// gulp.watch( ['sass/*.scss', 'sass/forms/*.scss', 'sass/general/*.scss', 'sass/helper/*.scss', 'sass/media/*.scss', 'sass/mixins/*.scss', 'sass/module/*.scss', 'sass/structure/*.scss', 'sass/variables/*.scss'], ['sass']);
  /*array of full directory with *.scss*/
	
});
// Gulp-ruby-sass
gulp.task('sass', function () {
    return sass('sass') /*it is only sass inside the funtion sass*/
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(plumber())
    .pipe(prefix('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass-forms', function() {
    return sass('sass/forms/', { container: 'gulp-ruby-sass-forms' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/forms/'));
});

gulp.task('sass-general', function() {
    return sass('sass/general/', { container: 'gulp-ruby-sass-general' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/general/'));
});

gulp.task('sass-helper', function() {
    return sass('sass/helper/', { container: 'gulp-ruby-sass-helper' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/helper/'));
});

gulp.task('sass-media', function() {
    return sass('sass/media/', { container: 'gulp-ruby-sass-media' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/media/'));
});

gulp.task('sass-mixins', function() {
    return sass('sass/mixins/', { container: 'gulp-ruby-sass-mixins' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/mixins/'));
});

gulp.task('sass-module', function() {
    return sass('sass/module/', { container: 'gulp-ruby-sass-module' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/module/'));
});

gulp.task('sass-structure', function() {
    return sass('sass/structure/', { container: 'gulp-ruby-sass-structure' }) /*container used for stagging sass*/
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/structure/'));
});


gulp.task('sass-variables', function() {
    return sass('sass/variables/', { container: 'gulp-ruby-sass-variables' }) 
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('sass/variables/'));
});



gulp.task('sass', ['sass-forms', 'sass-general', 'sass-helper', 'sass-media', 'sass-mixins', 'sass-module', 'sass-structure', 'sass-variables']); /*watch sass files with different directory*/

gulp.task('default', ['scripts', 'image', 'watch', 'sass']); /*only sass is called*/