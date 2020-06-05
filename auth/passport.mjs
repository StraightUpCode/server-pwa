import passport from 'passport'
import LocalStrategy from 'passport-local'
import { UserModel } from '../models/index.mjs'


console.log(UserModel)
passport.use(
    new LocalStrategy(async (username, password, done) => {
        console.log('Username',username)
        console.log('Password',password)
      try{
        const user = await UserModel.findOne({
            where: {
                username : username,
            }
        })

        console.log(user)
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
      }catch(e){
          console.log(e)
        return done(null,false, 'Wrong Credentials' )
      }
      
    })
)


passport.serializeUser((user, done) => {
    console.log('Serialize',user)
    done(null,user.id)
})

passport.deserializeUser(async (userId,done) => {
   try{
    const user = await UserModel.findByPk(userId)
    console.log('Deserialize', user)
    done(null,user)
   }catch(e){
       console.log(e)
   }
})

export default passport