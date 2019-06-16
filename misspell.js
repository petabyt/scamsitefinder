function misspell(word) {

	var mistake =  Math.floor(Math.random() * 4)
	var wordSplit = word.split("");
	var randomCharacter = Math.floor(Math.random() * word.length + 1);

	var a = word.removeLetters("constants").split("");
	var randomVowel = a[Math.floor(Math.random() * a.length)];
	var b = word.removeLetters("vowels").split("");
	var randomConstant = b[Math.floor(Math.random() * b.length)];

	if (mistake == 0) {
		// make a letter type twice - googgle
		wordSplit.splice(randomCharacter + 1, 0, wordSplit[randomCharacter])
	} else if (mistake == 1) {
		// leave out a random letter - microsof
		wordSplit.splice(wordSplit.indexOf(wordSplit[randomCharacter]), 1);
	} else if (mistake == 2) {
		// take a random constant and replace it with a vowel
		wordSplit = word.replace(randomConstant, randomVowel).split("");
	} else if (mistake == 3) {
		// take a random constant and replace it with a vowel
		wordSplit = word.replace(randomVowel, randomConstant).split("");
	} else if (mistake == "4") {
		// replace letter with nearby key (qwerty)
		var randomNearybyKey = Math.floor(Math.random() * eval("nearbykeys." + wordSplit[randomCharacter]).length);
		wordSplit = word.replace(wordSplit[randomCharacter], eval("nearbykeys." + wordSplit[randomCharacter])[randomNearybyKey]).split("");
	}

	return wordSplit.join("");
}

String.prototype.removeLetters = function (type) {
	var word = this;
    if (type == "vowels") {
		word = word.replace(/[euioa]/ig, "")
	} else if (type == "constants") {
		word = word.replace(/[qwrtypsdfghjklzxcvbnm]/ig, "")
	}
	return word
};