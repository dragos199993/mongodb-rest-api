const { SHA256 } = require("crypto-js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log({ hash });
  });
});

bcrypt.compare(
  password,
  "$2a$10$ICKS2f4mO8yGddGbqO.5POl4hsoNIwXJ3yyTCGhM8nfMiWQ5lfIHG",
  (err, res) => {
    console.log({ res });
  }
);

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

//JSON WEb TOKEN
// var data = {
//     id: 10
// }
// var token = jwt.sign(data, '123abc');
// // console.log(token);
// var decode = jwt.verify(token, '123abc');
// console.log(decode);
