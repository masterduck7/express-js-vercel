const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/date", (req, res) => {
	res.send(new Date().toString());
});

app.listen(8000, () => {
	console.log("Running on port 8000.");
});

module.exports = app;
