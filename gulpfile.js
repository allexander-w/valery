const { src, dest, series, watch } = require("gulp")
const htmlmin = require("gulp-htmlmin")
const autoprefixer = require("gulp-autoprefixer")
const uglify = require("gulp-uglify-es").default
const babel = require("gulp-babel")
const del = require("del")
const cssMinify = require('gulp-css-minify');
const sync = require("browser-sync").create()

const css = async cb => {
  await src("app/style/**.css")
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 version']
    }))
    .pipe(cssMinify())
    .pipe(dest('dist/style'));

  cb()
}

const html = async cb => {
  await src("app/**.html")
    .pipe(dest("dist"))

  cb()
}

const js = async cb => {
  await src("app/js/**.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("dist/js"))

  cb()
}

const files = async cb => {
  await src("app/fonts/*.*")
    .pipe(dest("dist/fonts"))

  await src('app/img/**/*')
    .pipe(dest('dist/img'));
}

const clear = async (cb) => {
  await del('dist')

  cb()
}

const serve = (cb) => {
  sync.init({
    server: {
      baseDir: "./dist"
    },
    // tunnel: true
  })

  watch('app/**.html', series(html)).on("change", sync.reload)
  watch('app/style/**.css', series(css)).on('change', sync.reload)
  watch('app/js/**.js', series(js)).on('change', sync.reload)

  cb()
}

exports.build = series(clear, html, css, js, files)
exports.serve = series(clear, html, css, js, files, serve)