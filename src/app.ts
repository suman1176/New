import express from 'express';
//import {Product} from './Product';
import * as userController from './Controller/userController' ;
import { userSchema } from './user';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.put('/usr',userController.addUser);

app.listen(port,err =>{
    if(err){
        return console.error(err); 
    }
    return console.log('server is running on '+ port)
    
})

