import 'reflect-metadata';
import { TypeORMError } from "typeorm";
import {createConnection} from "typeorm";
import * as bodyParser from 'body-parser';

// Connect typeORM mysql
createConnection()
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch((error) => console.log(error));

var express =require('express');
// Create express server
const app = express();
var router_1 = require('./routes/UserCreate');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router_1);

// //setting port
// app.set("port", process.env.PORT || 3000);

app.listen(3000, () => {
  console.log('listen t0 3000')
})
export default app;