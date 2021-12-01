/** @format */

const express = require('express');
const connect = require("./Configs/db");
const path = require("path");
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname);
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "Style")));
app.use("/static", express.static(path.join(__dirname, "Script")));

const homeController = require("./Controllers/home.controller");
app.use("/", homeController);

app.listen(port, async () => {
	await connect();
	console.log("listening to port 4321");
});
