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

var domains = [
	"com",
	"net",
	"tk",
	"cf",
	"ml"
]

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
		if (document.getElementById('method').value == "Misspell common names") {
			var rand = Math.floor(Math.random() * names.length);
			var domain = domains[Math.floor(Math.random() * domains.length)];
			domain = "com";
			sites.push("http://" + misspell(names[rand]) + "." + domain)
		} else {
			sites.push(findPopup());
		}

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

	if (boolean && data.endsWith("200 OK")) {
		var noIp = atob(noIpSite)
		var html = atob(html);
		var phoneNumber = html.match(/^(\(?\d{3}\)?)([ .-])(\d{3})([ .-])(\d{4})$/g);
		if (!html.includes("google.com/adsense/domains/caf.js")) { // Mostly found in ad sites and no IP sites
			document.getElementById('siteList').innerHTML += "<a href='" + sites[a] + "'>" + sites[a] + "</a> | Numbers: " + phoneNumber + "<br>";
			validated.push(sites[a]);
		}
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