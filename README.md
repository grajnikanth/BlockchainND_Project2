# Private Blockchain

In this project I created my own private Blockchain. This project deals with the challenges faced when building a Blockchain storage system. This project was implemented using Node.js and LevelDB to persist data.  This project is part of the Udacity Blockchain Nanodegree program. 

The code was implemented using Classes in Javascript. The main two classes are 
* Block Class
* Blockchain Class

## Block Class
The Block class defines the attributes an Object of this Block class will store. The attributes are as follows:
* Block Height
* Block Hash
* Block Body - Stores the data of the Block
* Block Time 
* Previous Block Hash

## Blockchain Class
The Blockchain class implements all functionalities associated with creating a Blockchain. The following are the functions implemented inside this class:

* addBlock(newBlock) - Adds a new block into the chain, to do that we assign the corresponding height, hash, previousBlockHash and timeStamp to the new block.
* getBlockHeight() - Counts all the Blocks in the chain and gives as a result the last height in the chain
* getBlock(blockHeight) - Gets a block and returns it as JSON string object
* validateBlock(blockHeight) - Validates block data integrity
* validateChain() - Validates blockchain is still valid at any moment. This is done by validating each block in the chain and validating the links between blocks using the block hashes.

## Configured LevelDB to persist dataset
LevelDB is used to persist blockchain dataset using the level Node.js library. We use the block height as the key for objects in LevelDB. This is because each block in the chain will have a unique (and predictable) height value. The genesis block is persisted as the first block with height=0. Genesis Block should be added automatically when the chain is created. Additionally, when adding a new block to the chain, the code checks if a Genesis Block already exists. If not, one is created before adding a block.

## Testing of the Code
The implemented code was tested using the Mocha testing framework. The tests verify that new Blocks can be added and all the functions of the Blockchain class are working properly. 

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node simpleChain.js__ in the root directory.

## Testing the project

The file __simpleChain.js__ in the root directory has all the code to be able to test the project, please review the comments in the file and uncomment the code to be able to test each feature implemented:

* Uncomment the function:
```
(function theLoop (i) {
	setTimeout(function () {
		let blockTest = new Block.Block("Test Block - " + (i + 1));
		myBlockChain.addNewBlock(blockTest).then((result) => {
			console.log(result);
			i++;
			if (i < 10) theLoop(i);
		});
	}, 10000);
  })(0);
```
This function will create 10 test blocks in the chain.
* Uncomment the function
```
myBlockChain.getBlockChain().then((data) => {
	console.log( data );
})
.catch((error) => {
	console.log(error);
})
```
This function print in the console the list of blocks in the blockchain
* Uncomment the function
```
myBlockChain.getBlock(0).then((block) => {
	console.log(JSON.stringify(block));
}).catch((err) => { console.log(err);});

```
This function get from the Blockchain the block requested.
* Uncomment the function
```
myBlockChain.validateBlock(0).then((valid) => {
	console.log(valid);
})
.catch((error) => {
	console.log(error);
})
```
This function validate and show in the console if the block is valid or not, if you want to modify a block to test this function uncomment this code:
```
myBlockChain.getBlock(5).then((block) => {
	let blockAux = block;
	blockAux.body = "Tampered Block";
	myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
		if(blockModified){
			myBlockChain.validateBlock(blockAux.height).then((valid) => {
				console.log(`Block #${blockAux.height}, is valid? = ${valid}`);
			})
			.catch((error) => {
				console.log(error);
			})
		} else {
			console.log("The Block wasn't modified");
		}
	}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});

myBlockChain.getBlock(6).then((block) => {
	let blockAux = block;
	blockAux.previousBlockHash = "jndininuud94j9i3j49dij9ijij39idj9oi";
	myBlockChain._modifyBlock(blockAux.height, blockAux).then((blockModified) => {
		if(blockModified){
			console.log("The Block was modified");
		} else {
			console.log("The Block wasn't modified");
		}
	}).catch((err) => { console.log(err);});
}).catch((err) => { console.log(err);});
```
* Uncomment this function:
```
myBlockChain.validateChain().then((errorLog) => {
	if(errorLog.length > 0){
		console.log("The chain is not valid:");
		errorLog.forEach(error => {
			console.log(error);
		});
	} else {
		console.log("No errors found, The chain is Valid!");
	}
})
.catch((error) => {
	console.log(error);
})
```

This function validates the whole chain and return a list of errors found during the validation.

## What do I learned with this Project

* I was able to identify the basic data model for a Blockchain application.
* I was able to use LevelDB to persist the Blockchain data.
* I was able to write algorithms for basic operations in the Blockchain.
