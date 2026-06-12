// const express = require("express");

// const app = express();
// app.use(express.json());

// const users = [];

// // should return just a random long string 
// function generateToken(){
//    // return Math.random() 
//     let options = ["a",'b','c','d'];

//     let token = "";
//    for(let i =0;i<32;i++){
//        token = token + options[Math.floor(Math.random()* options.length)];
//    } return token;
// }

// app.post("/signup",function(req,res){
  
//   //input validation using zod
//   const username = req.body.username;
//   const password = req.body.password;

  
  
//   users.push({
//     username : username,
//     password : password
//   })
//     res.json ({
//         message : "You are signed up"
    
    
// })

// app.post("/signin",function(req,res){

//     const username = req.body.username;
//     const password = req.body.password;

//     const foundUser = users.find(function(u) {
//         if(u.username ==username && u.password ==password){
//             const token = generateToken();
//             foundUser.token = token;
//             res.send({
//                 token
//             })
//             console.log(users);
//         }else {
//             res.status(403).send({
//                 message : "Invalid username or password"
//             })
//         }
//     })

// })

// app.listen(3000);
