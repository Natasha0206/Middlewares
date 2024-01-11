const express = require("express");
const app = express();
let numberOfRequest = 0;

function calculateRequests(req, res, next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}
app.use(calculateRequests)

app.post("/health-checkup", function(req, res){
    res.json({
        msg: "Hi There"
    })
});

app.get("/health-checkup2", function(req, res){
});
app.listen(3000);