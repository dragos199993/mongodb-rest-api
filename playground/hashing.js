const { SHA256 } = require("crypto-js");

const jwt = require("jsonwebtoken");

// MANUAL MODE
// let message = 'i am user n3';


// let sha256 = SHA256(message).toString();
// console.log(`${message}, ${sha256}`);


// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'my-secret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data) + 'my-secret').toString();

// if(token.hash === resultHash){
//     console.log('token not changed, pass');
// }else{
//     console.log('token modified, not good!');
// }

var data = {
    id: 10
}
var token = jwt.sign(data, '123abc');
// console.log(token);
var decode = jwt.verify(token, '123abc');
console.log(decode);