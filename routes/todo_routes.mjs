import express from 'express'
import { TodoModel } from '../models/index.mjs'
import UserModel from '../models/user.mjs';

const TodoRouter = express.Router()

TodoRouter.get("/", async (req, res) => {
    console.log("api");
    // const result =  await TodoModel.all()
    // console.log(result)
    res.send('Todo Api')
    // const result = await Promise.resolve('hola')




});

TodoRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    console.log("Get 1");
    const result = await UserModel.findByPk(parseInt(id))
    console.log(result);
    res.send(result) 
});

TodoRouter.post("/:id", async (req, res) => {
    console.log("Router Post");
    const {id } = req.params
    const newTodo = req.body
    console.log(newTodo)
    if (!newTodo.userId) {
        newTodo.userId = parseInt(id);
    }
    console.log(newTodo)
    const result = await TodoModel.create(newTodo);
    res.send(result)
});

TodoRouter.post("/:rawUserId/:rawTodoId", async (req,res) => {
    const { rawUserId , rawTodoId} = req.params
    const updatedTodo = req.body
    const userId = parseInt(rawUserId)
    const todoId = parseInt(rawTodoId)

    const todo = await TodoModel.findByPk(rawTodoId)
    console.log(todo)
    console.log(updatedTodo)
    const newTodo = todo.update(updatedTodo)

   

    res.send(await newTodo)
});

export default TodoRouter;
