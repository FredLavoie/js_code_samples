'use strict';
const fs = require('fs');


// implementation of readFileSync
console.log('readFileSync started');
const data = fs.readFileSync('text_file.txt', 'utf-8');
console.log(data);
console.log('readFileSync ended');


// implementation of readFile 
console.log('readFile started');
fs.readFile('text_file.txt', 'utf-8', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log(data);
	console.log('readFile ended');
});
console.log('code after readFile');

/********************************************************/
// readFileSync is blocking, and therefore doesn't allow
// the rest of the code to run until it's done with its
// operation.

// readFile is non-blocking and allows the rest of the 
// code to continue running and only once done reading
// does it execute the callback function.