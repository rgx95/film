app.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  
  $http.get('http://localhost/film/js/db/team.json')
  .success(function(data) {
    
    $scope.team = data

    $scope.show = false

    $scope.showModal = function(obj) {
      $scope.modal = obj
      $scope.show = true
      console.log($scope.show)
    }

    $scope.hideModal = function() {
      $scope.show = false
    }

  })
  .error(function(error) {
    console.error(error)
  })
}])