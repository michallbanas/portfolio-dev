const express = require("express");
const app = express();
const path = require("path");
const browsermon = require("browsermon");
const server = app.listen(3000);

app.use(express.static(__dirname, + '/'))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

browsermon({ server });

console.log('Server is running on URL http://localhost:3000')