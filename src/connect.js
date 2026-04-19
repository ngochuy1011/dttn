// import Web3 from 'web3';
let web3;

//Dùng để kết nối để test với mạng cục bộ ganache
// web3 = new Web3('http://127.0.0.1:7545');

//Dùng để kết nối mạng TestNet
// web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  // window.web3 = new Web3(window.ethereum);
  web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // Yêu cầu quyền truy cập tài khoản MetaMask
} else {
  console.log('MetaMask is not installed');
}


//Địa chỉ cả nhá
// const privateKey = "1ef79182ec4e5c98ca197ec2c01911dc76c78f291def51033051baa858b7a73f";

// Địa chỉ hợp đồng đã triển khai
let contractAddress="";
// ABI của hợp đồng
let contractABI=[];


//địa chỉ hợp đồng trên ganache
// contractAddress = "0x955636dA47A5eE420327C0cF1edd5cb5A2665CcD";

// Địa chỉ hợp đồng trên BNC testnet
contractAddress = "0xBC21673D0BEda74f5A522cC3a8d843E7F7803D25";


contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "certHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "idNumber",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "studentID",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "degree",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "institution",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "dateIssued",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "numberSign",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "referenceNumber",
        "type": "string"
      }
    ],
    "name": "CertificateIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "certHash",
        "type": "bytes32"
      }
    ],
    "name": "CertificateRevoked",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_certHash",
        "type": "bytes32"
      },
      {
        "internalType": "string",
        "name": "_idNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_studentID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_degree",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_institution",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dateIssued",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_numberSign",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_referenceNumber",
        "type": "string"
      }
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_certHash",
        "type": "bytes32"
      }
    ],
    "name": "revokeCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_certHash",
        "type": "bytes32"
      }
    ],
    "name": "verifyCertificate",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

