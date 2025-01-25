const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1735820384012,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1735820387178,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1735820599879,
            "transactions": [
                {
                    "amount": 6.25,
                    "sender": "00",
                    "recipient": "d95584c0c90311efbeaae7987e27b6f9",
                    "transactionId": "db3f0540c90311efbeaae7987e27b6f9"
                },
                {
                    "amount": 100,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "4188a0e0c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 400,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "437afb00c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 233,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "45185750c90411efbeaae7987e27b6f9"
                }
            ],
            "nonce": 11171,
            "hash": "0000aabc3e3cea255cd23dcd5b3d7217223ef1e7dafb75ebd9d5da55971ce777",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1735820737564,
            "transactions": [
                {
                    "amount": 6.25,
                    "sender": "00",
                    "recipient": "d95584c0c90311efbeaae7987e27b6f9",
                    "transactionId": "5a00f8c0c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 111,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "a4bce630c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 222,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "a5bbb890c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 333,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "a6d67760c90411efbeaae7987e27b6f9"
                },
                {
                    "amount": 444,
                    "sender": "NNFANSDFHYHTN90A09SNFAS",
                    "recipient": "IUW099N0A90WENNU234UFAW",
                    "transactionId": "a7d08ed0c90411efbeaae7987e27b6f9"
                }
            ],
            "nonce": 122668,
            "hash": "0000451f490c3588f262573d20a628b36e83d56e4225abdf8792bcf6e526c582",
            "previousBlockHash": "0000aabc3e3cea255cd23dcd5b3d7217223ef1e7dafb75ebd9d5da55971ce777"
        },
        {
            "index": 5,
            "timestamp": 1735820828779,
            "transactions": [
                {
                    "amount": 6.25,
                    "sender": "00",
                    "recipient": "d95584c0c90311efbeaae7987e27b6f9",
                    "transactionId": "ac11baf0c90411efbeaae7987e27b6f9"
                }
            ],
            "nonce": 17143,
            "hash": "0000bb969cf8776b5571b557b706e7547e37b5c03263009787160ba5c230374f",
            "previousBlockHash": "0000451f490c3588f262573d20a628b36e83d56e4225abdf8792bcf6e526c582"
        },
        {
            "index": 6,
            "timestamp": 1735820829987,
            "transactions": [
                {
                    "amount": 6.25,
                    "sender": "00",
                    "recipient": "d95584c0c90311efbeaae7987e27b6f9",
                    "transactionId": "e2702ff0c90411efbeaae7987e27b6f9"
                }
            ],
            "nonce": 82403,
            "hash": "0000ab6e9149993b990f3e74d176718998a51204edbe8690069ea4a7aa091bbc",
            "previousBlockHash": "0000bb969cf8776b5571b557b706e7547e37b5c03263009787160ba5c230374f"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 6.25,
            "sender": "00",
            "recipient": "d95584c0c90311efbeaae7987e27b6f9",
            "transactionId": "e328d190c90411efbeaae7987e27b6f9"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));