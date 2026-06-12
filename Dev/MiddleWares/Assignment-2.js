const express = require("express");

const app = express();

//Middleware->total no of request send on it & other exposes it

let countrequest =0;

function




app.use(requesttokens);

app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json ({
        ans : a+b
    })
});






app.listen(3000);
