let express = require('express');
let app = express();
console.log("Hello World");
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/view/index.html");
});

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));




































module.exports = app;
