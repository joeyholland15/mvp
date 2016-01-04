angular.module('WhatToWear', [])
  // .factory('Weather', function($http) {
  //   var getWeather = function($http, zipcode) {
  // 	  return $http({
  // 	    method: "GET",
  // 	  	url:'http:api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b'
  // 	  }); 
  // 	};
  // 	return {
  // 	  getWeather: getWeather
  // 	}; 
  // })

  .controller('weatherController', function($scope) {
    $scope.destinations = []; 

    $scope.zip = 'testing';

    $scope.addDest = function(destination) {
      $scope.destinations.push(destination); 
      $scope.zip = ''; 
    }
  })