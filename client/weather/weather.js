angular.module('weather', [])
.controller('weatherController', function($scope, $location, Weather) {
    $scope.data = {};

    $scope.zip = '';

    $scope.getInfo = function() {
      console.log('worked');
      Weather.getWeather($scope.zip).then(function(data) {
        $scope.data.city = data.data.name; 
        $scope.data.precip = data.data.weather[0].description;
        $scope.zip = ''; 
        $scope.data.clothing = '';
        if($scope.data.precip === 'light rain') {
          $scope.data.clothing = 'Looks like you need a light jacket'
        }
        $location.path('/weather');
      }); 
    };
  })