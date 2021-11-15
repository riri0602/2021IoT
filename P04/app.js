"use strict"
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./things"); // ./routes/things로 하면 에러가 나서 수정함
//const welcome = require("./welcome");

app.use(express.json());
app.use("/things", things);
//app.use("/welcome", welcome);

app.get("/", (req, res) => {
    res.send("hello root");
});

app
    .route("/welcome")
    .get((req, res)=>{
        res.send("welcome! 고객 센터에 오신 것을 환영합니다!"); //한글이 깨짐. 영어는 문제 없음!
    });

app
    .route("/things/cars")
    .get((req,res)=>{})
    .post((req, res)=>{});

app
    .route("/things/cars/:carid")
    .get((req, res)=>{})
    .put((req, res)=>{});

app.listen(port ,err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});