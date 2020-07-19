import {Request,Response} from 'express';
import User, { userSchema } from './..//user';

//add a new user
export let addUser = (req:Request,res:Response)=>{
    let user = new User(req.body);
    user.save((err: any)=>{
        if(err){
            res.send(err);
        }else{
            res.send(user);
        }
        })}

 export let allUsers = (req:Request,res:Response)=>{
    let users = User.find((err: any,users: any)=>{
        if(err){
                res.send(err);
        }else{
                res.send(users);
        }
        })
        
        
 }        
