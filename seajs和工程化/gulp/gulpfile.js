var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename'),        // 重命名
    clean = require('gulp-clean'),          //清空文件夹
    minhtml = require('gulp-htmlmin');


// 合并、压缩、重命名css

var cssfiles = [
	'../css/base.css',
  '../css/index.css'

];


gulp.task('css', function() {
    // 注意这里通过数组的方式写入两个地址,仔细看第一个地址是css目录下的全部css文件,第二个地址是css目录下的areaMap.css文件,但是它前面加了!,这个和.gitignore的写法类似,就是排除掉这个文件.
  gulp.src(cssfiles)
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('../css'));
});


var jsFiles = [
	'../js/app/index.js',
	'../js/com/carousel.js',
  '../js/com/event.js',
  '../js/com/exposure.js',
  '../js/com/gotop.js',
  '../js/com/tab.js',
	'../js/lib/sea/sea.js',
  '../js/lib/jquery.min.js'
];

// 合并，压缩js文件
gulp.task('js', function() {
  gulp.src(jsFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('../js'));
});



