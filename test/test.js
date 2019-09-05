var assert = require('assert');
const fs = require('fs');
const rosaenlgPug = require('rosaenlg');
const init = require('../src/init');


describe('phones', function() {
  
  let referenceData = JSON.parse(fs.readFileSync('test/phonesNonreg.json', 'utf8'));
  let phones = init.getDataPhones();
  assert(referenceData.length = phones.length);

  for(let i=0; i< phones.length; i++) {
    let reference = referenceData[i];
    let rendered = rosaenlgPug.renderFile('templates/phoneForJson.pug', {
      phone: phones[i],
      cache: true,
      language: 'en_US',
      forceRandomSeed: reference.seed,
    });
    it(`phone #${i}`, function() {
      assert.equal(reference.rendered, rendered, 'different from reference');
    });
  }
});
