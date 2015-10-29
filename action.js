
var wordsWritten = document.getElementsByTagName("var");

var wordBank ={};
var fireBank = new Firebase('https://lernubaleno.firebaseio.com/');

//Key-Value enclosed Object
for (var i = 0; i < wordsWritten.length; i++){
	wordsWritten[i].addEventListener("click", function(){
		if (document.getElementsByClassName("vortarobobelo").length != 0){
			var wordbubble = document.getElementsByClassName("vortarobobelo")[0].children[0]
			var words = wordbubble.children

			for (var i = 0; i < words.length; i++ ){
				var word = words[i].children[0].innerText; // the word
				var translation = words[i].children[1].innerText; // the translation
				wordBank[word] = translation;
				fireBank.update(wordBank);
			}
		}			
	})
};

//Object enclosed array

// var wordsWritten = document.getElementsByTagName("var");

// var wordBank =[];
// var fireBank = new Firebase('https://lernubaleno.firebaseio.com/');
// for (var i = 0; i < wordsWritten.length; i++){
// 	wordsWritten[i].addEventListener("click", function(){
// 		if (document.getElementsByClassName("vortarobobelo").length != 0){
// 			var wordbubble = document.getElementsByClassName("vortarobobelo")[0].children[0]
// 			var words = wordbubble.children

// 			for (var i = 0; i < words.length; i++ ){
// 				var currentWord = words[i].children[0].innerText; // the word
// 				var currentTranslation = words[i].children[1].innerText; // the translation
// 				var wordTranslation = {
// 					word: currentWord,
// 					translation:currentTranslation
// 					};
// 				wordBank.push(wordTranslation);
// 				fireBank.update(wordBank);
// 			}
// 		}			
// 	})
// };
