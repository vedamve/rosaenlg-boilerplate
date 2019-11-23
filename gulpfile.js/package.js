const gulpRosaeNLG = require('gulp-rosaenlg');
const fs = require('fs');

const tmpFile = 'tmp.js';


function doPackage(cb) {

  const packageObj = gulpRosaeNLG.packageTemplateJson({
    templateId: 'phones',
    entryTemplate: 'phoneForJson.pug',
    folderWithTemplates: 'templates',
    compileInfo: {
      language: 'fr_FR'
    },
    autotest: {
      activate: true,
      input: {
        language: 'fr_FR',
        phone: {
          "name": "OnePlus 5T",
          "colors": ["Black", "Red", "White"],
          "displaySize": 6,
          "screenRatio": 80.43,
          "battery": 3300,
          "bluetooth": 5
        }
      },
      expected: ['phone', 'battery']
    }
  });

  fs.writeFileSync('dist/phone_package.json', JSON.stringify(packageObj), 'utf8');
  cb();
}

exports.all = doPackage;
