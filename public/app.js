angular.module('WhatToWear', [])
  .factory('Weather', function($http) {
    var getWeather = function(zipcode) {
  	  return $http({
  	    method: 'GET',
  	  	url:'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b'
  	  }).success(function (data) {
        return data;  
      })
  	};
  	return {
  	  getWeather: getWeather
  	}; 
  })

  .controller('weatherController', function($scope, Weather) {
    $scope.data = {};

    $scope.zip = '';

    $scope.getInfo = function() {
      Weather.getWeather($scope.zip).then(function(data) {
        $scope.data.city = data.data.name; 
        $scope.data.precip = data.data.weather[0].description;
        $scope.zip = ''; 
        if($scope.data.precip === 'light rain') {
          $scope.data.clothing = 'Looks like you need a light jacket'
        }
      }); 
    };
  })



