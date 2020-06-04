import express from 'express'
import passport from '../auth/passport.mjs'
import { UserModel } from '../models/index.mjs'
const AuthRouter = express.Router();


AuthRouter.get('', async (ctx) => {
  console.log("Log out");
});

AuthRouter.post("/login",
  passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    session: true
  }),
);


AuthRouter.get("/login", async (req, res) => {
  res.send('Not Valid Request')
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
