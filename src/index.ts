import 'reflect-metadata'
import { TypeORMError } from 'typeorm'
import { createConnection } from 'typeorm'
import * as bodyParser from 'body-parser'

// Connect typeORM Database
console.log('Database Connection....')
createConnection()
  .then(() => {
    console.log('Database Connection....SUCCESS')
  })
  .catch(error => console.log('Database Connection....Fail', error))

var express = require('express')
// Create express server
const app = express()
var router_1 = require('./router/User')
var router_2 = require('./router/Save')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router_1)
app.user(router_2)

// //setting port
// app.set("port", process.env.PORT || 3000);

app.listen(3000, () => {
  console.log('listen to 3000')
})
export default app
