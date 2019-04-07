const BlockChain = require('./BlockChain.js');
const Block = require('./Block.js');

let myBlockChain = new BlockChain.Blockchain();

// console.log('Genesis Block =' +myBlockChain.chain[0]);
//console.log('Genesis Block =' +JSON.stringify(myBlockChain.chain[0]));

/* myBlockChain.bd.getLevelDBData(0).then((value) => {
  console.log('using getLevelDBData \n' +value)});
*/

setTimeout(function () {
  myBlockChain.addBlock(new Block.Block("Second Block"));
}, 10000);

setTimeout(function () {
  myBlockChain.addBlock(new Block.Block("Third Block"));
}, 10000);

/*
myBlockChain.getBlockHeight().then((blockHeight) => {
  console.log('The Block count ='+blockHeight); });
*/
