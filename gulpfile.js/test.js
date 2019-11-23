const { src, series } = require('gulp');
const fs = require('fs');
const mocha = require('gulp-mocha');

function test() {
  return src('test/test.js', {read: false})
		// `gulp-mocha` needs filepaths so you can't have any plugins before it
		.pipe(mocha({
      inlineDiffs: true,
      reporter: 'mochawesome'
    }))
}

function hackcss(cb) {
  // hack result css
  const cssPath = 'mochawesome-report/assets/app.css';
  let css = fs.readFileSync(cssPath, 'utf8');
  css = css.replace('pre{', 'pre{white-space: pre-wrap;');
  fs.writeFileSync(cssPath, css, 'utf8');

  cb();
}

exports.all = series(test, hackcss);
