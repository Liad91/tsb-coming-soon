var comingSoonApp = angular.module('comingSoon', ['ngRoute'])
.config(function($routeProvider, $locationProvider, $controllerProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/lib/views/title.view.html',
      controller: 'titleController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});