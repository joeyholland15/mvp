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

  .factory('Inventory', function($http) {
    //POST REQUEST EXAMPLE
    var addOne = function (link) {
      return $http({
        method: 'POST',
        //need to edit
        url: '/api/links',
        //need to edit
        data: link
      });
    };
  })

  .controller('weatherController', function($scope, Weather) {
    $scope.data = {chanceOfPrecip: 0};

    $scope.zip = '';

    $scope.getInfo = function() {
      Weather.getWeather($scope.zip).then(function(data) {
        console.log(data); 
        $scope.data.city = data.data.name; 
        $scope.data.chanceOfPrecip = data.data.rain['1h'];
        console.log($scope.data.chanceOfPrecip); 
        $scope.data.precip = data.data.weather[0].description;
        $scope.zip = ''; 
        $scope.data.clothing = '';
        if($scope.data.precip === 'light rain' || $scope.data.precip === 'moderate rain') {
          $scope.data.clothing = 'Looks like you need a rain jacket'
        } else if ($scope.data.precip === 'clear skies') {
          $scope.data.clothing = 'Looks like no rain - you can leave your jacket at home!'
        } else if ($scope.data.precip === 'heavy intensity rain') {
          $scope.data.clothing = 'Bring out the big guns and throw on your heavy rain jacket!'
        }
      }); 
    };
  })

  .controller('inventoryController', function($scope, Inventory ) {
    $scope.light = '';
    $scope.moderate = '';
    $scope.heavy = ''
  })



