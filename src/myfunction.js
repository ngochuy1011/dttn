function CertHash(idNumber, studentID, name, degree, institution, dateIssued, numberSign, referenceNumber) {
    const encoded = web3.utils.hexToBytes(web3.utils.utf8ToHex(idNumber))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(studentID)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(name)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(degree)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(institution)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(dateIssued)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(numberSign)))
    .concat(web3.utils.hexToBytes(web3.utils.utf8ToHex(referenceNumber)));
    
    const hexString = web3.utils.bytesToHex(encoded);
    // Băm chuỗi hexadecimal bằng keccak256
    certHash = web3.utils.keccak256(hexString);
    return certHash
} 