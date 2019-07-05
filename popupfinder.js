var company = ["apple",
"dell",
"google",
"windows",
"microsoft"
];

var thing = ["trojan",
"virus",
"404"];

var action = ["error",
"alert",
"popup"
];

var domains = ["com",
"net",
"tk",
"cf",
"ml"
];

function findPopup() {
	var randomCompany = company[Math.floor(Math.random() * company.length)];
	var randomThing = thing[Math.floor(Math.random() * thing.length)];
	var randomAction = action[Math.floor(Math.random() * action.length)];
	var randomDomain = domains[Math.floor(Math.random() * domains.length)];
	return "http://" + randomCompany + randomThing + randomAction + "." + randomDomain;
}