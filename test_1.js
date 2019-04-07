const Block = require('./Block.js');
const SHA256 = require('crypto-js/sha256');

let block1 = new Block.Block("First block in the chain - Genesis block");

console.log('Block 1 =' +block1);
console.log('block1.hash =' +block1.hash);
console.log('block1.height =' +block1.height);
console.log('block1.body =' +block1.body);
console.log('block1.time =' +block1.time);
console.log('block1.previousBlockHash =' +block1.previousBlockHash);
console.log('block1.hash type ='+typeof(block1.hash));

let block1String = JSON.stringify(block1);
console.log('block1 after JSON.stringify = ' +block1String);
console.log('block1String type is ='+typeof(block1String));
// The below application of toString() is redundant and is not required
console.log('block1 after JSON.stringify.toString() = ' +block1String.toString());

// Testing hash functions
let blockHash1 = SHA256(JSON.stringify(block1));
let blockHash2 = SHA256(JSON.stringify(block1)).toString();

console.log('SHA256 hash type of ='+typeof(blockHash1));
console.log('SHA256 hash w/o toString ='+blockHash1);
console.log('SHA256 hash with toString ='+blockHash2);

// output of the above console.log is as follows:
/* block1 after JSON.stringify = {"hash":"","height":0,"body":"First
block in the chain - Genesis block","time":0,"previousBlockHash":""}
*/

/* let block2 = new Block.Block("Second block in the chain");

console.log('Block 2 =' +block2);
console.log('block2.hash =' +block2.hash);
console.log('block2.height =' +block2.height);
console.log('block2.body =' +block2.body);
console.log('block2.time =' +block2.time);
console.log('block2.previousBlockHash =' +block2.previousBlockHash);
console.log('block2.body type ='+typeof(block2.body));

*/
