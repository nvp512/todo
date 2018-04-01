/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getTodos: function(req, res) {
    console.log("-------->>>>");

    TodoService.getTodos(function(todos) {
      res.json(todos)
    })
  },
  addTodo: function(req, res) {
       var todoVal = (req.body.value) ? req.body.value : undefined
       TodoService.addTodo(todoVal, function(success) {
           res.json(success);
       });
   },
   removeTodo: async function(req, res) {
      console.log(req.body.value);
      var todoVal = (req.body.value) ? req.body.value : undefined
      const success = await TodoService.removeTodo(todoVal);
      res.json(success);
   }
}
