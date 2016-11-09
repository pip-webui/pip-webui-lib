var 
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    replace = require('gulp-replace'),
    merge = require('gulp-merge'),
    del = require('del'),
    pkg = require('./package.json');

//---------------- Core libraries -----------------------

gulp.task('build-material', function() {
    return gulp.src([
            './bower_components/angular-material/angular-material.js',
            './bower_components/angular-material/angular-material.min.js',
            './bower_components/angular-material/angular-material.css',
            './bower_components/angular-material/angular-material.min.css'
        ])
        .pipe(replace('1200px', '1400px'))
        .pipe(replace('1199px', '1399px'))
        .pipe(replace('960px', '1200px'))
        .pipe(replace('959px', '1199px'))
        .pipe(replace('600px', '769px'))
        .pipe(replace('599px', '768px'))
        .pipe(gulp.dest('build'));
});

gulp.task('build-core-js', ['build-material'], function() {
    return gulp.src([
            // Foundation libraries
            './bower_components/es5-shim/es5-shim.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/lodash/lodash.js',
            './bower_components/async/dist/async.js',
            './bower_components/marked/lib/marked.js',
            './bower_components/moment/min/moment-with-locales.js',

            // Angular libraries
            './bower_components/angular/angular.js',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-local-storage/dist/angular-local-storage.js',
            './bower_components/angular-cookies/angular-cookies.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-messages/angular-messages.js',
            './bower_components/hammerjs/hammer.js',
            './bower_components/angular-ui-utils/ui-utils.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            './build/angular-material.js',

            // Tile layout dependencies
            './bower_components/masonry/dist/masonry.pkgd.js',
            './bower_components/angular-masonry/angular-masonry.js'
        ])
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(concat(pkg.name + '.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-core-js-min', ['build-core-js'], function() {        
    return gulp.src('./dist/' + pkg.name + '.js')
        .pipe(minifyJs())
        .pipe(rename(pkg.name + '.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-core-css', ['build-material'], function() {
    return gulp.src([
            './build/angular-material.css'
        ])
        .pipe(concat(pkg.name + '.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-core-css-min', ['build-core-css'], function() {
    return gulp.src('./dist/' + pkg.name + '.css')
        .pipe(minifyCss())
        .pipe(rename(pkg.name + '.min.css'))
        .pipe(gulp.dest('./dist'));
});


//---------------- Optional libraries -----------------------

gulp.task('build-optional-js', function() {
    return gulp.src([
            // Animations
            './bower_components/jquery.transit/jquery.transit.js',
            './bower_components/velocity/velocity.js',

            // Dashboard dependencies
            //'./bower_components/packery/dist/packery.pkgd.js',
            //'./bower_components/draggabilly/dist/draggabilly.pkgd.js',
            //'./bower_components/angular-packery/dist/packery.js',

            // Chart dependencies
            //'./bower_components/Chart.js/dist/Chart.js',
            //'./bower_components/angular-chart.js/dist/angular-chart.js',

            // Graphics, charting
            './bower_components/d3/d3.js',
            './bower_components/nvd3/build/nv.d3.js',

            // Images and document upload
            './bower_components/ng-file-upload/angular-file-upload-all.js',
            './bower_components/webcamjs/webcam.js',

            // Syntax highlighter
            './bower_components/prism/prism.js',
            './bower_components/prism/components/prism-javascript.js',
            './bower_components/prism/components/prism-json.js',
            './bower_components/prism/components/prism-html.js',
            './bower_components/prism/components/prism-css.js',
            './bower_components/prism/components/prism-yaml.js'
        ])
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(concat(pkg.name + '-optional.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-optional-js-min', ['build-optional-js'], function() {        
    return gulp.src('./dist/' + pkg.name + '-optional.js')
        .pipe(minifyJs())
        .pipe(rename(pkg.name + '-optional.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-optional-css', function() {
    return gulp.src([
            //'./bower_components/angular-chart.js/dist/angular-chart.css',
            './bower_components/nvd3/build/nv.d3.css',

            // Syntax highlighter
            './bower_components/prism/themes/prism.css'
        ])
        .pipe(concat(pkg.name + '-optional.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-optional-css-min', ['build-optional-css'], function() {
    return gulp.src('./dist/' + pkg.name + '-optional.css')
        .pipe(minifyCss())
        .pipe(rename(pkg.name + '-optional.min.css'))
        .pipe(gulp.dest('./dist'));
});


//--------------------- Test libraries -------------------------

gulp.task('build-test-js', function() {
    return gulp.src([
            './bower_components/chance/chance.js',
            './bower_components/angular-mocks/angular-mocks.js',            
        ])
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(concat(pkg.name + '-test.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-test-js-min', ['build-test-js'], function() {        
    return gulp.src('./dist/' + pkg.name + '-test.js')
        .pipe(minifyJs())
        .pipe(rename(pkg.name + '-test.min.js'))
        .pipe(gulp.dest('./dist'));
});

//---------------- Other tasks ------------------------

gulp.task('copy-res', function() {
    return gulp.src('./bower_components/webcamjs/webcam.swf')
        .pipe(gulp.dest('./dist')); 
});

gulp.task('clean', function() {
    del(['./build', './dist']); 
});

gulp.task('build', [
    /*'build-core-js',*/ 'build-core-js-min', /*'build-core-css',*/ 'build-core-css-min', 
    /*'build-optional-js',*/ 'build-optional-js-min', /*'build-optional-css',*/ 'build-optional-css-min', 
    'build-test-js', 'build-test-js-min', 'copy-res'
]);
gulp.task('default', ['build']);