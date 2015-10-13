var fs = require('fs');

fs.readFile(process.argv[2], function outputLineCount (error, fileData) {
	console.log(fileData.toString().split('\n').length-1);
});
