const fs = require('fs');

let dataPhones = null;
function getDataPhones() {
  if (dataPhones==null) {
    dataPhones = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
    for (let i=0; i<dataPhones.length; i++) {
      dataPhones[i] = prepData(dataPhones[i]);
    }
  }
  return dataPhones;
}

function prepData(phone) {
  phone.colors = phone.colors.split(/\s*,\s*/);
  return phone;
}
module.exports = {
  prepData,
  getDataPhones
};

