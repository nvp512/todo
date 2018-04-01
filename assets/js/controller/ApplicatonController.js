app.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', '$http', function($scope, $rootScope, TodoService, $http) {
  $scope.formData = {};
  $scope.todos = [];

  //Promise.then().catch()
  TodoService.getTodos()
  .then(function(response) {
    $scope.todos = response.data;
  });

  $scope.addTodo = function() {
    TodoService.addTodo($scope.formData)
    .then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeTodo = function(todo) {
    // console.log();
    TodoService.removeTodo(todo)
    .then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }
}]);
