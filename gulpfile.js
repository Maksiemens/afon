const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//browserSync 
gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: './prod'
		},
		port: 8080,
		open: true,
		notify: false
	});
});

//html
const htmlmin = require('gulp-htmlmin');
const htmlpImport = require('gulp-html-import');

gulp.task('template', () => {
	gulp.src('dev/*.html')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(htmlpImport('dev/components/'))
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest('prod'))
		.pipe(reload({stream:true}));
});

gulp.task('pages', () => {
	gulp.src('dev/html/*.html')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(htmlpImport('dev/components/'))
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(gulp.dest('prod'))
		.pipe(reload({stream:true}));
});



//pug
const pug = require('gulp-pug');
gulp.task('pug', () => {
	gulp.src('dev/pug/pages/*.pug')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
			.pipe(sourcemaps.init())
			.pipe(pug({	pretty: true }))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('prod'))
			.pipe(reload({stream:true}));	
});


//style
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style', () => {
	gulp.src('dev/style/style.scss')
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))		
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))			
			.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('prod/css'))
			.pipe(reload({stream:true}));
});

//image
const imagemin = require('gulp-imagemin');

gulp.task('image', () => {
    gulp.src('dev/img/**/*.*')
				.pipe(imagemin([
					imagemin.gifsicle({interlaced: true}),
					imagemin.jpegtran({progressive: true}),
					imagemin.optipng({optimizationLevel: 5}),
					imagemin.svgo({
							plugins: [
									{removeViewBox: false},
									{cleanupIDs: false}
							]
					})
			]))
				.pipe(gulp.dest('prod/img/'))
				.pipe(reload({stream:true}));
});


//libs
gulp.task('libs', () => {
	gulp.src(['dev/libs/**/*.css', 'dev/libs/**/*.png'])
			.pipe(gulp.dest('prod/libs/'))			
			.pipe(reload({stream:true}));
});

//favicon
gulp.task('favicon', () => {
	gulp.src('dev/favicon/**/*.*')
			.pipe(gulp.dest('prod/img/favicon/'))			
			.pipe(reload({stream:true}));
});


//fonts
gulp.task('fonts', () => {
    gulp.src('dev/fonts/**/*.*')
        .pipe(gulp.dest('prod/fonts'))
});

//html
gulp.task('html', () => {
	gulp.src('dev/html/**/*.*')
			.pipe(gulp.dest('prod/html'))
});

//js
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
	gulp.src(['dev/js/*.js'])
			.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))	
			.pipe(sourcemaps.init())	
			.pipe(babel({presets: ['env']}))
			.pipe(uglify())	
			.pipe(concat('script.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('prod/js'))
			.pipe(reload({stream:true}));
});

//watcher
gulp.task('watcher', () => {
	gulp.watch('dev/**/*.html', ['template']);

	gulp.watch('dev/**/*.html', ['pages']);

	gulp.watch('dev/**/*.pug', ['pug']);

	gulp.watch('dev/style/**/*.scss', ['style']);

	gulp.watch('dev/js/**/*.js', ['js']);

	gulp.watch('dev/img/**/*', ['image']);

	gulp.watch('dev/fonts/**/*', ['fonts']);
});

// default
gulp.task('default',
	['template',
	 'pages',
	 'pug',
	 'style',
	 'js',
	 'image',
	 'favicon',
	 'fonts',
	 'libs'
	]);

gulp.task('dev', ['default', 'watcher', 'browserSync']);