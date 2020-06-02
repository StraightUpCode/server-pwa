import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {AuthRouter, TodoRouter} from './routes/index.mjs'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.use('/api/todo', TodoRouter)
app.use('/', AuthRouter)


app.listen(3000)