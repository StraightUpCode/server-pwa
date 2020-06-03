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
            console.log('No existe el user')
            return done(null,false, 'Wrong Credentials' )
        }
        if(!user.password == password){
            console.log('Pass mala')
            return done(null, false, 'Wrong Credentials')
        }
        console.log('Todo chido')
        return done(null, user)
    })
)


passport.serializeUser((user, done) => {
    done(user.id)
})

passport.deserializeUser(async (userId,done) => {
    const user = await UserModel.findByPk(userId)
    done(null,user)
})

export default passport