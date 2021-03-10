// const { colorizer } = require('./index');
const { colorizerv2 } = require('./index');

// let buff = new Buffer.from(colorizerv2("misc", "red"), 'utf8');

// console.log(buff.toString('hex'));
console.log(`${colorizerv2("log", "blue")}hi`);