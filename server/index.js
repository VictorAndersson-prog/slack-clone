import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Victor");
});

app.listen(3000);
