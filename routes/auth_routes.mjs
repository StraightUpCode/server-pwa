import express from 'express'
import { UserModel } from '../models/index.mjs'
const AuthRouter =  express.Router();

AuthRouter.post("/login", async (req, res) => {
  const userCredentials = req.body
  console.log("Login");
//    const user = await 
//   console.log(user);
});

AuthRouter.post("/register", async (req, res) => {
  console.log("register");
  const newUser = req.body;
  console.log(newUser);
  const result = await UserModel.create(newUser);
  res.send(result)
});

AuthRouter.get("/logout", async (ctx) => {
  console.log("Log out");
});

export default AuthRouter;
