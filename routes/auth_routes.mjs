import express from 'express'
import passport from '../auth/passport.mjs'
import { UserModel } from '../models/index.mjs'
const AuthRouter = express.Router();

AuthRouter.post("/login",
  passport.authenticate('local',{
    // sucessRedirect: '/',
    session: true
  }),
  async(req, res) => {
    console.log('Response after Passport')
    console.log(req.session)
    res.send({user : req.session.passport.user})
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
