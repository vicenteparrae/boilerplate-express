//require('dotenv').config();
let express = require('express');
let app = express();
var bodyParser = require('body-parser');

// Excercises - Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Excercises - Chain Middleware to Create a Time Server & Get Route Parameter Input from the Client
//Building the middleware
//const middleware = (req, res, next) => {
//    req.time = new Date().toString();
//    bodyParser.urlencoded({ extended: false })
//    next();
//};

//caling the middleware when ever the app get /now
//app.get("/:word/echo", middleware, (req, res) => {
//    const { word } = req.params;
//    console.log(req.method + " " + req.path + " - " + req.ip + word)
//   res.json({ echo: word });
//});

//Excercises - Get Query Parameter Input from the Client
//app.get("/name", middleware, (req, res) => {
//    var firstName = req.query.first;
//    var lastName = req.query.last;
//    console.log(req.method + " " + req.path + " - " + req.ip + " - " + JSON.stringify(req.query))
//    res.json({ name: firstName + " " + lastName });
//});

//Excercises - Implement a Root-Level Request Logger Middleware
//app.use((req, res, next) => {
//    console.log(req.method + " " + req.path + " - " + req.ip)
//    next();
//})

//Excercises - Meet the Node console
//console.log("Hello World");

//Excercises - Start a Working Express Server & Serve an HTML File &
//app.get("/", function (req, res) => {res.sendFile(__dirname + "/views/index.html")});

//Excercises - Serve Static Assets
// Normal usage
//app.use(express.static(__dirname + "/public"));
// Assets at the /public route
//app.use("/public", express.static(__dirname + "/public"));

//Excercises - Serve JSON on a Specific Route & Use the .env File
//let response = "Hello json";
//app.get('/json', (req, res) => {
//
//    var mySecret = process.env['MESSAGE_STYLE'];
//
//    if (mySecret === "uppercase") {
//        res.json({ "message": response.toUpperCase() });
//    } else {
//        res.json({ "message": response });
//    }
//
//});





































module.exports = app;
