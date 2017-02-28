var app = angular.module("myApp", []);

(function(app){
  "use strict";
  app.controller("HelloController",function HelloController($scope,$http) {
	$scope.greeting = { text: 'Hello' };
	$scope.names=["impressions","reach","spend_account","revenue","visits","transactions","bounces","lead","cpt","frequency","datetime"];
	$http.get('https://gist.githubusercontent.com/arindambarman1/8a670ec7876456076b6676266c3ff07d/raw/178d1d3445bf9a73b47a4721670df282e1cff084/Assignment%2520-%2520data')
.then(function(response){
	$scope.rawData = response.data;
	 //console.log(response.data);

	$scope.propertyName='datetime';
	$scope.reverse=false;
	$scope.sortBy = function(propertyName){
		$scope.reverse = ($scope.propertyName === propertyName) ?!$scope.reverse : false;
		$scope.propertyName = propertyName;
		console.log('sorting '+propertyName);
	};
});
});
})(app);