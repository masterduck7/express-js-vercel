require("dotenv").config();
const express = require("express");
const connection = require("./db");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/date", (req, res) => {
	res.send(new Date().toString());
});

app.get("/db", async (req, res) => {
	try {
		const query = "SELECT * FROM test";

		connection.query(query, (err, results) => {
			if (err) throw err;
			res.json(results);
		});
	} catch (err) {
		console.error(err);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(8000, () => {
	console.log("Running on port 8000.");
});

module.exports = app;
