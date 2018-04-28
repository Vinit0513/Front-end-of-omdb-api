//Module
var movieApp = angular.module('movieApp', ['ngRoute', 'ngResource']);


//Routes
movieApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "view/main.html",
			controller: "mainController"
		})
		.when('/movierating', {
			templateUrl: "view/movierating.html",
			controller: "movieratingController"
		})

}]);

//Service

movieApp.service('movieService', function(){

	this.movieName = "";
//	this.movieYear = "";


});



//Controllers
movieApp.controller('mainController', ['$scope', '$log', '$resource', 'movieService', function($scope, $log, $resource, movieService){

	$scope.movieName = movieService.movieName;


	$scope.$watch('movieName', function(){
		movieService.movieName = $scope.movieName;
	});

// $scope.movieYear = movieService.movieYear;
//
// 	$scope.$watch('movieYear', function(){
// 		movieService.movieYear = $scope.movieYear;
// 	});

}]);

movieApp.controller('movieratingController', ['$scope', '$log', '$resource', '$routeParams', 'movieService', function($scope, $log, $resource, $routeParams, movieService){

	 $scope.movieName = movieService.movieName
	 //$scope.movieYear = movieService.movieYear;
		$scope.movieAPI = $resource("http://www.omdbapi.com/?i=tt3896198&apikey=b5b86419",
		{
			get: {
				method: "JSONP",
				isArray: true,
				callback: "JSON_CALLBACK"
			}
		});
		$scope.movieResult = $scope.movieAPI.get({
			t: $scope.movieName,
	// y: $scope.movieYear
		});

		console.log($scope.movieResult);



}]);
