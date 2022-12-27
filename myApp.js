let express = require('express');
let app = express();
app = require('dotenv').config()
console.log("Hello World");

//Old Exercises
//app.get("/", function (req, res) => {res.sendFile(__dirname + "/views/index.html")});
// Normal usage
//app.use(express.static(__dirname + "/public"));
// Assets at the /public route
//app.use("/public", express.static(__dirname + "/public"));

if (process.env.MESSAGE_STYLE === "uppercase") {
    let myMessage = "Hello json".toUpperCase();
} else {
    let myMessage = "Hello json";
}
app.get("/json", (req, res) => { res.json({ message: myMessage }) });




































module.exports = app;
