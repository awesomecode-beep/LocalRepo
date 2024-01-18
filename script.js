console.log("Hello World");
//3) global object instead of window object
//4) Node runs on a server - not in a browser
//commonjs modules
//console.log(global);

//info about the os
const os = require('os'); 
const path = require('path');
const math = require('./math');

console.log(math.add(2,3))
/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));*/