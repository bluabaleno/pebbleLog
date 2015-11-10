var fireBank = new Firebase('https://everyoneclick.firebaseio.com/');

wordBank = {};

var wordsWritten = document.getElementsByTagName("var");

for (var i = 0; i < wordsWritten.length; i++){
	wordsWritten[i].addEventListener("click", getWords)
};

function getWords() {
	if (document.getElementsByClassName("vortarobobelo").length != 0){
		var words;
		words = document.getElementsByClassName("vortarobobelo")[0].children[0].children;

		for (var i =0; i < words.length; i++) {
			var localBank = {} //creating the local variable to store the word
			var newWord = words[i].children[0].innerText; // getting the word from the DOM
			var newTranslation = words[i].children[1].innerText; // getting the translation from the DOM

			localBank.word = newWord;
			localBank.translation = newTranslation;
			localBank.count = 0 //assuming this is the first time the user has clicked on the word

			console.log(localBank);
			wordBank[localBank.word] = localBank;
			fireBank.update(wordBank);
		}
	}
}

