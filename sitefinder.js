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
var compiled;
var a = 0;
var validated = [];

window.onload = function() {

}

function start() {
	interval = setInterval(function() {
		var rand = Math.floor(Math.random() * names.length);
		sites.push("http://" + misspell(names[rand]) + ".com")

		update();
	}, 1);
}


function update() {
	if (document.getElementById('options').value == "Just generate sites") {
		document.getElementById('siteList').innerHTML += "<a href='" + sites[sites.length - 1] + "'>" + sites[sites.length - 1] + "</a><br>";
		document.getElementById('stats').innerHTML = "Generated " + sites.length + " websites";

		if (sites.length > 50) {
			document.getElementById('siteList').children[0].outerHTML = "";
			document.getElementById('siteList').children[1].outerHTML = "";
		}		
	} else {
		document.getElementById('stats').innerHTML = "Generating 10,000 sites... <br>" + (sites.length / 100) + "%";
		if (sites.length == 10000) {
			stop();
			document.getElementById('stats').innerHTML += "<br>Validated " + a + " Site(s)...";
			next();
		}
	}
}

function stop() {
	clearInterval(interval);
}

function siteExists(boolean, data, html) {
	/*
	Moved Permanently - good
	Nothing - non-existant
	HTTP/1.1 200 OK - scam site
	*/

	if (boolean && data.endsWith("HTTP/1.0 200 OK")) {
		document.getElementById('siteList').innerHTML += "<a href='" + sites[a] + "'>" + sites[a] + "</a><br>";
		validated.push(sites[a]);
		console.log(atob(html)) // need to make an entire html scam detector
	}
	a++;
	next();
}

function next(){
	document.getElementById('stats').innerHTML = "Generating 1000 sites... <br>" + (sites.length / 10) + "%";
	document.getElementById('stats').innerHTML += "<br>Searched " + a + " Site(s). " + validated.length + " may be harmful.";
	var js = document.createElement("SCRIPT");
	js.src = "http://petabytestudios.html-5.me/validate.php?site=" + sites[a];
	js.type = "text/javascript";

	document.getElementById('script').appendChild(js);
}