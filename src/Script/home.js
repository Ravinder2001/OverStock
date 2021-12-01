/** @format */

var Ac = document.getElementById('Ac');
var li = document.getElementById('li');
Ac.addEventListener('mouseover', function display() {
	document.getElementById('loginBox').style.display = 'block';
});
document
	.getElementById('loginBox')
	.addEventListener('mouseover', function display() {
		document.getElementById('loginBox').style.display = 'block';
	});
document
	.getElementById('loginBox')
	.addEventListener('mouseout', function display() {
		document.getElementById('loginBox').style.display = 'none';
	});
Ac.addEventListener('mouseout', function displayNone() {
	document.getElementById('loginBox').style.display = 'none';
});
li.addEventListener('mouseover', function display() {
	document.getElementById('list').style.display = 'block';
});

li.addEventListener('mouseout', function displayNone() {
	document.getElementById('list').style.display = 'none';
});
document
	.getElementById('list')
	.addEventListener('mouseover', function display() {
		document.getElementById('loginBox').style.display = 'block';
	});
document
	.getElementById('list')
	.addEventListener('mouseout', function display() {
		document.getElementById('loginBox').style.display = 'none';
	});
var nv = document.getElementById('nav');
nv.addEventListener('mouseover', function display() {
	document.getElementById('navv').style.display = 'block';
});
nv.addEventListener('mouseout', function display() {
	document.getElementById('navv').style.display = 'none';
});
