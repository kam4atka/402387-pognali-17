"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/*.ico"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("js", function() {
  return gulp.src("source/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html"), gulp.series("html", "refresh");
  gulp.watch("source/js/**/*.js", gulp.series("js"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "html", "js"));
gulp.task("start", gulp.series("build", "server"));
