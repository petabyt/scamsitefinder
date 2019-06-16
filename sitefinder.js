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
var stopSearching = false;

var timeouts = 0;
var successes = 0;

window.onload = function() {
	console.log("*Errors are normal.*")
}

function start() {
	createIframe();
}

function createIframe() {
	if (!stopSearching) {
		var rand = Math.floor(Math.random() * names.length);
		document.getElementById('main').innerHTML = "<iframe id='frame' onload='deleteIframe(\"success\")' src='" + ("https://" + misspell(names[rand]) + ".com") + "'></iframe>";

		// Load Timeout
		var si1 = setInterval(function() {
			deleteIframe("timeout");
		}, 5000)
	}
}

function deleteIframe(result) {
	if (!stopSearching) {

		// If iframe glitches out, do nothing about it
		if (!(!(document.getElementById('frame')))) {
			var site = document.getElementById('frame').src;
			if (result == "timeout") {
				timeouts++
			} else {
				sites.push("<a href='" + site + "'>" + site + "</a>")
				successes++
			}
			document.getElementById('main').innerHTML = "";
		}

		// So it doesn't crash
		var si2 = setInterval(function() {
			createIframe();
		}, 2000);

		update();
	}
}

function update() {
	document.getElementById('siteList').innerHTML = sites.join("<br>");
	document.getElementById('stats').innerHTML = "Tested " + (successes + timeouts) + " sites. " + successes + " loaded correctly. " + timeouts + " didn't load." + Math.round(successes/(successes + timeouts) * 100) + "% of sites tested were successfully."
	if (successes + timeouts > 100) {
		alert("Process automatically stopped to prevent crashing.");
		stop();
	}
}

function stop() {
	if (stopSearching == false) {
		stopSearching = true;
	} else {
		stopSearching = false;
	}
	clearInterval(si1);
	clearInterval(si2);
}