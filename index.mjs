import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {AuthRouter, TodoRouter} from './routes/index.mjs'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from './auth/passport.mjs'
import session from 'express-session'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(session({secret : 'ES UN SECRETO QUE TU MIRADA Y LA MIA'}))


app.use('/', AuthRouter)
app.use(passport.initialize())
app.use(passport.session())
app.use('/api', TodoRouter)
app.get('/', (req, res) => {
    console.log('Loged in')
    res.send('Logged in')
})


app.listen(process.env.PORT||3000,()=> {

    console.log(`Listening on port ${process.env.PORT||3000}`)
})