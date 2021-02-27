const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require("cors"),
    server = express(),
    fs = require("fs");
port = 2600;

server.use(cors())

server.use(bodyParser.urlencoded({ extended: true }));

fs.writeFile("data.json", '{"messages": [{ "text": "NodeJS", "rendered": "false" }, { "text": "is", "rendered": "false" }, { "text": "hell", "rendered": "false" }]}', (err) => {
    console.log(err)
})

server.get("/", (req, res) => {
    res.send("Express server")
})

server.get("/data.json", (req, res) => {
    res.sendFile(__dirname + "/data.json")
})

server.post('/dataPost', function(req, res) {
    fs.writeFile("data.json", JSON.stringify(req.body.data), (err) => {
        console.log(err)
    })
    console.log("JSON created")
    res.send("OK")
})

server.listen(port, () => {
    console.log("Server started")
})