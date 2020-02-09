const path = require('path');
const pkg = require('./package.json')
const fs = require('fs');
const async = require('async');
const directoryPath = path.join(__dirname, '../photos');
console.log('Generate photos...');
fs.readdir(directoryPath, function(err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  let photos = []
  async.eachSeries(files, (file, cb) => {
		console.log(file);
    if (file.indexOf('DS_Store') > -1) {
      cb();
      return;
    }
    photos.push({src: '/photos/' + file, height:3, width:4});
		cb();
  }, (err) => {
  	if (err) {
  	  return console.log('Unable to scan directory: ' + err);
  	}
		let output = 'export const photos = ' + JSON.stringify(photos)	
		fs.writeFileSync(__dirname + '/src/photos.js', output);
		console.log('Done');
  })
});
