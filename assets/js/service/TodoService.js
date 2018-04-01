app.service('TodoService', function($http, $q) {
  return {

    //return Promise
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('todo/getTodos')
      .then(function(resp){
        defer.resolve(resp); //Return Promise
      }, function(err){
        defer.reject(err);
      });

      return defer.promise;
    },

    //return Promise
    'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).then(function(success){
        defer.resolve(success);
      }, function(err){
        defer.reject(err);
      });

      return defer.promise;
    },

    //return Promise
    'removeTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/removeTodo', todo).then(function(success){
        defer.resolve(success);
      }, function(err){
        defer.reject(err);
      });

      return defer.promise;
    }
}});
