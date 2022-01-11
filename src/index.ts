import 'reflect-metadata'
import { TypeORMError } from 'typeorm'
import { createConnection } from 'typeorm'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import router_1 from './router/User'
import router_2 from './router/Save'

// Connect typeORM Database
console.log('Database Connection....')
createConnection()
  .then(() => {
    console.log('Database Connection....SUCCESS')
  })
  .catch(error => console.log('Database Connection....Fail', error))

// Create express server
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router_1)
app.use(router_2)

// //setting port
// app.set("port", process.env.PORT || 3000);

app.listen(3000, () => {
  console.log('listen to 3000')
})

export default app
