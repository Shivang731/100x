// Assignment 1

const express = require("express");
 
const app = express();

// add a middleware that logs the method,timestamp and the url

function middleware(req,res,next){
       console.log("Method is " + req.method);
       console.log("The url is " + req.url);
       console.log(new Date());

       next();
}
app.use(middleware);


app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a+b
    })
});


app.get("/multiply", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b
    })
});

app.get("/divide", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a/b
    })
})

app.listen(3000);