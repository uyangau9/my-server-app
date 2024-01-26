const express = require("express");
const port = 1000;
const myServer = express();

myServer.get('/', (request, response)=>{
    response.send("hello manaihaan!");
});

myServer
myServer.listen(port, () => {
    console.log("my server running");
});