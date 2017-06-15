const fs = require('fs'),
  json = require('../package.json');


const replaceStrings = ['version', 'description', 'homepage'];

fs.readFile('./src/manifest.json', 'utf-8', (err, data) => {

  if (err) throw err;

  if (data) {

    for ( var i = 0, ii = replaceStrings.length; i < ii; i++) {
      data = data.replace('${' + replaceStrings[i] +'}', json[ replaceStrings[i] ]);
    }

    fs.writeFile('./dist/manifest.json', data, (err) => {

      if (err) throw err;

    });

  }

});