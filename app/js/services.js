angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        withCredentials: false,
        url: 'https://api.hh.ru/vacancies'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'GET', 
        withCredentials: false,
        url: 'https://api.hh.ru/vacancies/' + id
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
