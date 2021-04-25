/// <referance path="angular.min.js" />

var app = angular
		  .module("myModule", [])
		  .controller("myController", function ($scope) {
		  var candidates = [
		  { name: "Amardeep", certification: "Male", company: "Cotocus", month: "Jan"},
		   { name: "Bittu", certification: "Male", company: "scmGalaxy", month: "Feb"},
		   { name: "Narayan", certification: "Male", company: "Cotocus", month: "Jan"},
		   { name: "Mantosh", certification: "Male", company: "scmGalaxy", month: "March"},
		   { name: "Chandan", certification: "Male", company: "Cotocus", month: "Jan"}
		  ];
		  $scope.candidates = candidates;
		 });