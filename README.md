# gulp-scss-dom

### [scss-dom](https://github.com/aykutkardas/scss-dom) Documentation

## Install
```sh
npm install gulp-scss-dom
```

## Usage
gulpfile.js
```js
const gulp = require('gulp');
const scssDom = require('gulp-scss-dom');

gulp.task('html', function () {
 return gulp.src('./lib/**/*.html')
  .pipe(scssDom())
  .pipe(gulp.dest('./dist'));
});
```

## input
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="header other-class">
    <div class="&-menu">
      <div class="&__item">1</div>
      <div class="&__item">2</div>
      <div class="&__item">3</div>
      <div class="&__item">4</div>
    </div>
  </div>
</body>
</html>
```

## output
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="header other-class">
    <div class="header-menu">
      <div class="header-menu__item">1</div>
      <div class="header-menu__item">2</div>
      <div class="header-menu__item">3</div>
      <div class="header-menu__item">4</div>
    </div>
  </div>
</body>
</html>
```