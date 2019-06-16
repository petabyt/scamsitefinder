var names = [
	"vizio",
	"samsung",
	"microsoft",
	"cisco",
	"paycom",
	"apple",
	"weebly",
	"facebook",
	"netgear",
	"windows",
	"sony",
	"asus",
	"acer",
	"gmail",
	"outlook",
	"instagram",
	"twitter"
];

var sites = [
	
];
var interval;

window.onload = function() {

}

function start() {
	interval = setInterval(function() {
		var rand = Math.floor(Math.random() * names.length);
		sites.push("<a href='https://" + misspell(names[rand]) + ".com'>https://" + misspell(names[rand]) + ".com</a>");

		update();
	}, 1);
}


function update() {
	document.getElementById('siteList').innerHTML += sites[sites.length - 1] + "<br>";
	document.getElementById('stats').innerHTML = "Generated " + sites.length + " websites";

	if (sites.length > 50) {
		document.getElementById('siteList').children[0].outerHTML = "";
		document.getElementById('siteList').children[1].outerHTML = "";
	}
}

function stop() {
	clearInterval(interval);
}