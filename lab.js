const {machineIdSync} = require('node-machine-id');
const crypto = require('crypto');

function hashMyStudentId(studentId) {
    let myHash = crypto.createHash('md5').update(studentId).digest("hex");
    let myStudentIdAsciiSum = 0;
    for (let hashCharIndex = 0; hashCharIndex < myHash.length; hashCharIndex++) {
        const hashChar = myHash[hashCharIndex];
        const asciiCode = hashCar.charCodeAt(0);
        myStudentIdAsciiSum += asciiCode;
    }
    return myStudentIdAsciiSum;
}

let myHashValue = hashMyStudentId('53070077');
console.log(`MyHashValue = ${machineIdSync()} @ ${myHashValue}`);
