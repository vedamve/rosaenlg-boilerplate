const fs = require('fs');
const init = require('../src/init');
const rosaenlgPug = require('@rosaenlg/rosaenlg');

function nonreg(cb) {
  let phones = init.getDataPhones();
  fs.open('test/phonesNonreg.json', 'w', (err, fd) => {
    fs.appendFileSync(fd, '[');
    for(let i=0; i< phones.length; i++) {
      let allParams = {
        phone: phones[i],
        cache: true,
        language: 'en_US',
      };
      rendered = rosaenlgPug.renderFile('templates/phoneForJson.pug', allParams);
      fs.appendFileSync(fd, JSON.stringify({
        rendered: rendered,
        seed: allParams.util.randomSeed
      }) + ( i!=phones.length-1 ? ',':'' ));
    }
    fs.appendFileSync(fd, ']');
  });  
  cb();
}

exports.all = nonreg;
