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

    var getJacket = function() {
      return $http({ 
        method: 'GET',
        url: '/api/inventory'
      }).success(function (data) {
        return data; 
      })
    }
  	return {
      getJacket: getJacket,
  	  getWeather: getWeather
  	}; 
  })

  .controller('weatherController', function($scope, Weather) {
    $scope.data = {};

    $scope.zip = '';

    $scope.getInfo = function() {
      Weather.getWeather($scope.zip).then(function(data) {
        console.log(data); 
        $scope.data.city = data.data.name; 
        console.log($scope.data.chanceOfPrecip); 
        $scope.data.precip = data.data.weather[0].description;
        $scope.data.temp = data.data.main.temp;
        $scope.zip = ''; 
        $scope.data.clothing = '';
        if($scope.data.temp < 60 || $scope.data.precip === 'moderate rain') {
          $scope.data.clothing = 'Looks like you need your ' + $scope.jacket;
        } else if ($scope.data.precip === 'clear skies') {
          $scope.data.clothing = 'Looks like no rain - you can leave your jacket at home!'
        } else if ($scope.data.precip === 'heavy intensity rain') {
          $scope.data.clothing = 'Bring out the big guns and throw on your heavy rain jacket!'
        } else if ($scope.data.precip === 'broken clouds') {
          $scope.data.clothing = 'Looks like you need your ' + $scope.jacket;
        }
      }); 
    };

    $scope.getJacket = function() {
      Weather.getJacket().then(function(data) {
        $scope.jacket = data.data.light;
        $scope.zip = '';
      })
    }
  })

  .factory('Inventory', function($http) {
    var addOne = function (jacket) {
      return $http({
        method: 'POST',
        url: '/api/inventory',
        data: {jacket: jacket}
      }).success(function(data) {
        console.log('SUCCESS');
      });
    };
    return {
      addOne: addOne
    }
  })

  .controller('inventoryController', function($scope, Inventory) {
    $scope.jacket = '';
    $scope.addInventory = function() {
      console.log($scope.jacket);
      Inventory.addOne($scope.jacket)
        .then(function() {
          console.log('made request'); 
          $scope.jacket = '';
        })
    }
  })

  

 



