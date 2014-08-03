angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/vacancies", {templateUrl: "partials/drivers.html", controller: "vacanciesController"}).
	when("/vacancy/:id", {templateUrl: "partials/driver.html", controller: "vacancyController"}).
	otherwise({redirectTo: '/vacancies'});
}]);
