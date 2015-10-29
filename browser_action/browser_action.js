//setting the angular app, myApp, and it's controller, myAppCtrl, up.
var app = angular.module("myApp",["firebase"]);
//retrieving data from firebase
app.controller("myAppCtrl", ["$scope", "$firebaseObject",
          function($scope,$firebaseObject){
          var ref = new Firebase("https://lernubaleno.firebaseio.com/");
          $scope.data = $firebaseObject(ref);
}]);

