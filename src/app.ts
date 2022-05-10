import express from 'express'
import bodyParser from 'body-parser'
import router from './router/index'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(router)

export default app
