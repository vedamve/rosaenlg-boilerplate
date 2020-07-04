const { exec } = require('child_process');
const fs = require('fs');
const texts = require('./texts');
const nonreg = require('./nonreg');
const test = require('./test');
const package = require('./package');
const unpack = require('./unpack');

function init(cb) {
  const folders = [
    'dist',
  ];
  folders.forEach(dir => {
      if(!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
          console.log('📁  folder created:', dir);    
      }   
  });
  cb();
}

function clean(cb) {
  exec('rm -rf dist');
  cb();
}


exports.init = init;
exports.clean = clean;

exports.nonreg = nonreg.all;
exports.texts = texts.all;
exports.test = test.all;
exports.package = package.all;
exports.unpack = unpack.all;
