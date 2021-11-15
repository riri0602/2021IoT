"use strict"
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./things"); // ./routes/things�� �ϸ� ������ ���� ������
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
        res.send("welcome! �� ���Ϳ� ���� ���� ȯ���մϴ�!"); //�ѱ��� ����. ����� ���� ����!
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