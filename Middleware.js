const express = require("express");
const app = express();

function userMiddleware(req, res, next){
    if (username != "harkirat" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect Inputs",
        });
    }
    else{

        next();
    }
    
};

function KidneyMiddleware(req, res, next){
    const KidneyId = req.query.KidneyId
    if(kidneyId != 1 && kidneyId !=2){
        res.status(403).json({
            msg:"Incorrect Inputs",
        });
    } 
    else{
        next();
    }
};
app.get("/health-checkup", userMiddleware, KidneyMiddleware, function(req, res){
    res.send("Your heart is healthy");
});
