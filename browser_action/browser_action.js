var wordsWritten = document.getElementsByTagName("var");

var words = [];

for (var i = 0; i < wordsWritten.length; i++){
	wordsWritten[i].addEventListener("click", function(){
		var element = document.getElementById('v0');
		var text = element.innerText;
		var bold = document.getElementsByTagName("strong")[1].innerText;
		var str = text.replace(bold,"");
		var word;
		var translation;
		eval ("word" + "=" + "bold");
		eval ("translation" + "=" + "str");
		words.push(eval ({word,translation}));

		console.log(words);
	})
};