const path = require('path');
const solc = require('solc')
const fs = require('fs');

const inboxPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');

const source = fs.readFileSync(inboxPath, 'utf8');
//console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':Lottery'];