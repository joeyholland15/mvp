angular.module('WhatToWear', [])
  .factory('Weather', function($http) {
    var getWeather = function(zipcode) {
  	  return $http({
  	    method: 'GET',
  	  	url:'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b'
  	  }).success(function (data) {
        console.log(data.name); 
      })
  	};
  	return {
  	  getWeather: getWeather
  	}; 
  })

  .controller('weatherController', function($scope, Weather) {
    $scope.destinations = []; 

    $scope.zip = '94611';

    $scope.name = Weather.name; 

    $scope.getInfo = function() {
      Weather.getWeather($scope.zip); 
    };
  })



