import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {AuthRouter, TodoRouter} from './routes/index.mjs'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from './auth/passport.mjs'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', TodoRouter)
app.use('/', AuthRouter)


app.listen(process.env.PORT||3000,()=> {

    console.log(`Listening on port ${process.env.PORT||3000}`)
})