// Incluir plugins gulp y gulp-minify-css

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('./src/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});
// Permite ejecutar tareas por defecto

gulp.task('default', ['minify-css']);