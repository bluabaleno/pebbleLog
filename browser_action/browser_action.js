// test of loading the DOM before the script execute
var app = angular.module("myApp",["firebase"]);

app.controller("myAppCtrl", ["$scope", "$firebaseObject",
          function($scope,$firebaseObject){
          var ref = new Firebase("https://lernubaleno.firebaseio.com/");
            console.log(ref);
          $scope.data = $firebaseObject(ref);
}]);

// var wordThere 

// // fireBank.on("value", function(snapshot){
// // 	console.log(snapshot.val());
// // 	wordThere = snapshot.val();
// // });

// myApp.factory("steps",["$firebaseObject"])
// myApp.controller('AppController', function ($scope) {
//     $scope.steps;
//     fireBank.on("value", function(snapshot){
// 		$scope.steps = snapshot.val();
// 		wordThere = snapshot.val();
// 	});
// });

// document.addEventListener("DOMContentLoaded", function(){
// 	document.getElementById("wordListHTML").innerHTML = "Hello there";
// 	console.log("I loaded!");
// });


//getting the word and translation
// for(var key in wordThere){
// 	var val = wordThere[key];
// 	console.log(key+ " " + val);
// }

//document.getElementById("wordListHTML").innerHTML 

//gets the words back alphabetically
// var wordHere = [];
// fireBank.orderByKey().on("child_added", function(snapshot){
// 	worhHere.push = snapshot.key() + ": " + snapshot.val();
// 	console.log(snapshot.key() + ": " + snapshot.val());
// 	document.getElementById("wordListHTML").innerHTML = snapshot.key() + " " + snapshot.val();
// });
