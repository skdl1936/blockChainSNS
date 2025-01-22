const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const {v1 :uuidv1} = require('uuid');

function Blockchain() {
    this.chain = []; // 채굴한 모든 블록들
    this.pendingTransactions = []; // 블록에 아직 저장되지 않은 모든 트랜잭션들을 저장
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    this.createNewBlock(100,'0','0');
}

Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length +1, // 블록 넘버
        timestamp: Date.now(), // 블록 생성된 시점
        transactions: this.pendingTransactions, // 저장되지 않은 모든 트랜잭션
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.getLastBlock = function (){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender,recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionId: uuidv1().split('-').join('')
    }
    return newTransaction;
    // this.pendingTransactions.push(newTransaction);
    // return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData,nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData,nonce);
    }
    return nonce;
}

// 노드내의 블록들을 조사하여 해당 체인이 적합한지 검사 (true면 문제없음)
Blockchain.prototype.chainIsValid = function (blockchain){
    let validChain = true;
    for(let i = 1; i< blockchain.length;i++){
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i-1];
        const blockHash = this.hashBlock(
            prevBlock['hash'],
            { transactions:currentBlock['transactions'], index:currentBlock['index'] },
            currentBlock['nonce']
        );
        
        // 생성한 블록의 해시값이 적절한지 체크
        if(blockHash.substring(0,4) !== '0000')
            validChain = false;
        
        // 이전 블록의 해쉬와 현재블록이 가지고 있는 이전 블록의 해쉬값과 일치하는지 검사
        if(currentBlock['previousBlockHash'] !== prevBlock['hash'])
            validChain = false;

        // console.log('previousBlockHash => ', prevBlock['hash']);
        // console.log('currentBlockHash => ', currentBlock['hash']);
    }
    
    // 제네시스 블록 검증
    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;
    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions)
        validChain = false;

    return validChain;
}

Blockchain.prototype.addTransactionToPendingTransactions = function (transactionObj){
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}


module.exports = Blockchain;
