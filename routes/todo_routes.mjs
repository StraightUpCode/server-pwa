import express from 'express'
import { TodoModel } from '../models/index.mjs'
import UserModel from '../models/user.mjs';
import Todo from '../models/todo.mjs';

const TodoRouter = express.Router()

const API_ROUTE = todoId => `/:rawUserId/todos${todoId ? `/${todoId}` : ''}`

//Route Handler get 
// /api/
TodoRouter.get(``, async (req, res) => {
    //console.log("api");
    // const result =  await TodoModel.all()
    // console.log(result)
    res.send('Todo Api')
    // const result = await Promise.resolve('hola')
});


TodoRouter.get(API_ROUTE``, async (req, res) => {
    const { rawUserId } = req.params
    const { status } = req.query
    console.log("Get 1");
    const result = await UserModel.findByPk(parseInt(rawUserId))
   // console.log(result);
   let query = {}
   if(status) {
    query.where = {
        status: status
    }
   }
    const todos = await result.getTodos(query)
    res.send(todos)
});

TodoRouter.post(API_ROUTE``, async (req, res) => {
    console.log("Router Post");
    const { rawUserId } = req.params
    const newTodo = req.body
    console.log(newTodo)
    if (!newTodo.userId) {
        newTodo.userId = parseInt(rawUserId);
    }
    console.log(newTodo)
    const result = await TodoModel.create(newTodo);
    res.send(result)
});

TodoRouter.post(API_ROUTE`:rawTodoId`, async (req, res) => {
    const { rawUserId, rawTodoId } = req.params
    const updatedTodo = req.body
    const userId = parseInt(rawUserId)
    const todoId = parseInt(rawTodoId)

    const todo = await TodoModel.findByPk(rawTodoId)
    console.log(todo)
    console.log(updatedTodo)
    const newTodo = todo.update(updatedTodo)
    res.send(await newTodo)
});

TodoRouter.delete(API_ROUTE`:rawTodoId`, async (req, res) => {
    const { rawUserId, rawTodoId } = req.params
    const todoId = parseInt(rawTodoId)
    const result = await Todo.destroy({where : {
        id: todoId
    }})
    console.log(result)
    if(result > 0) { 
        res.send({message: `Se borraron ${result} elementos`})
    }

})

export default TodoRouter;
