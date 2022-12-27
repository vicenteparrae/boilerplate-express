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

let response = "Hello json";

app.get('/json', (req, res) => {

    var mySecret = process.env['MESSAGE_STYLE'];

    if (mySecret === "uppercase") {
        res.json({ "message": response.toUpperCase() });
    } else {
        res.json({ "message": response });
    }

});



































module.exports = app;
