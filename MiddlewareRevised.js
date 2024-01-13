const express = require("express");
const app = express();
let numberOfRequest = 0;

function calculateRequests(req, res, next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}
app.use(express.json())

app.post("/health-checkup", function(req, res){
    console.log(req.body);
    req.headers
    req.query
    res.json({
        msg: "Hi There"
    })
});

app.get("/health-checkup2", function(req, res){
});
app.listen(3000);