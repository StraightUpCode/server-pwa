import passport from 'passport'
import LocalStrategy from 'passport-local'
import { UserModel } from '../models/index.mjs'


console.log(UserModel)
passport.use(
    new LocalStrategy(async (username, password, done) => {
        console.log('Username',username)
        console.log('Password',password)
        const user = await UserModel.findOne({
            where: {
                username : username,
            }
        })
        console.log('User result', user)
        if(!  user ){

            return done(null,false, 'Wrong Credentials' )
        }
        if(!user.password == password){
            return done(null, false, 'Wrong Credentials')
        }
        return done(null, user)
    })
)

export default passport