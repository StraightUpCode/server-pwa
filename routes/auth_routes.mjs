import express from 'express'
import passport from 'passport'
import { UserModel } from '../models/index.mjs'
const AuthRouter =  express.Router();

AuthRouter.post("/login",
passport.authenticate('local'),
(req, res) => {
  res.redirect('/')
}
);

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
