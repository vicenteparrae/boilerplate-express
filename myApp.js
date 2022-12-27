require('dotenv').config();
let express = require('express');
let app = express();

//Old Exercises
//console.log("Hello World");
//app.get("/", function (req, res) => {res.sendFile(__dirname + "/views/index.html")});
// Normal usage
//app.use(express.static(__dirname + "/public"));
// Assets at the /public route
//app.use("/public", express.static(__dirname + "/public"));

if (process.env.MESSAGE_STYLE === "uppercase") {
    var myMessage = "Hello json".toUpperCase();
} else {
    var myMessage = "Hello json";
}

app.get("/json", (req, res) => { res.json({ message: myMessage }) });




































module.exports = app;
