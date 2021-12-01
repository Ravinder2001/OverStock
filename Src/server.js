/** @format */

const express = require('express');
const connect = require('./configs/db');
const path = require('path');

const app = express();
function change() {
	return hello;
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(__dirname);
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'Style')));
app.use('/static', express.static(path.join(__dirname, 'Script')));

const homeController = require('./controllers/home.controller');
app.use('/home', homeController);

app.listen(4398, async () => {
	await connect();
	console.log('listening to port 4321');
});
