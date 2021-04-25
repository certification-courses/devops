/// <referance path="angular.min.js" />

var app = angular
		  .module("myModule", [])
		  .controller("myController", function ($scope) {
		  var candidates = [
		  { name: "Amardeep", certification: "akshaya-av.html", company: "Cotocus", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Bittu", certification: "akshaya-av.html", company: "scmGalaxy", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Narayan", certification: "akshaya-av.html", company: "Cotocus", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Mantosh", certification: "akshaya-av.html", company: "scmGalaxy", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Amardeep", certification: "akshaya-av.html", company: "Cotocus", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Bittu", certification: "akshaya-av.html", company: "scmGalaxy", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Narayan", certification: "akshaya-av.html", company: "Cotocus", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Mantosh", certification: "akshaya-av.html", company: "scmGalaxy", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"},
		   { name: "Chandan", certification: "akshaya-av.html", company: "Cotocus", month: "Jan (2018)", trainer: "http://rajeshkumar.xyz/cv/index.html"}
		  ];
		  $scope.candidates = candidates;
		 });