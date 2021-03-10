// const { colorizer } = require('./index');
const { colorizerv2 } = require('./index');

let buff = new Buffer.from(colorizerv2("misc", "reset"), 'utf8');

console.log(buff.toString('hex'));