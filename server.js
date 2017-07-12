var express = require("express"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	mongoose = require("mongoose"),
	app = express();

app.set("view engine", "hbs");

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/signup", function(req, res) {
	res.render("signup");
});

app.get("/home", function(req, res) {
	res.render("home");
});

mongoose.connect("mongodb://localhost/user");

app.listen(8080, function() {
	console.log("App is running!");
});