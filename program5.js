var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function outputPathMatch (error, fileListing) {
	for (i=0; i < fileListing.length; i++) {
		if (('.'+process.argv[3]) == path.extname(fileListing[i])) {
			console.log(fileListing[i]);
		}
	}
});
