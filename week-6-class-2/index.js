const express =require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "harkirat123";


const app = express();
app.use(express.json());
const users = [];

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);     // jwt.verify expects in format (token,JWT_SECRET)

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }else {
        res.json ({
            message : "You are not logged in"
        })
    }

    


}

function logger(req,res,next){
        console.log(req.method + "is request type");   //just checks if its a get or post request
        next();
    }

app.post("/signup",logger,function(req,res){
    const username = req.body.username;
    const password  = req.body.password;

    users.push({
        username:username,
        password:password
    }) 
    res.json ({
        message: "You are signed in"
    })
})

app.post("/signin",logger,function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }  if(!foundUser){
        res.json({
            message : "Invalid Credentials"
        })
        return
    }else {
        const token = jwt.sign({
            username
        },JWT_SECRET);

        res.json({
            token:token
        })
    }
})



app.get("/me",logger,auth,function(req,res){
    const token = req.headers.token;
     
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        let foundUser = null;

        for(let i=0;i<users.length;i++){
            if(users[i].username === req.username ){
                foundUser = users[i];
            }
        } res.json ({
            username :foundUser.username ,
            password :foundUser.password
        })
    }
})

app.listen(3000);