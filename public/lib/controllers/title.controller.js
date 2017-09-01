angular.module('comingSoon').controller('titleController', [
  '$scope', '$http', '$window', '$route', '$routeParams',
  function($scope, $http, $window, $route, $routeParams) {
    
    window.initializeClock('counter', new Date(Date.parse('1/1/2018')));

    $scope.isSubscribed = false;
    $scope.subscribeUser = function() {
      var user = $scope.user;
      $http.post('/api/users', user)
      .success(function() {
        $scope.isSubscribed = true;
      }).error(function(data) {
        $scope.errorMessage = data.error || data;
      });
    };
  }
]);