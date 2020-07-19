import mongoose = require("mongoose");
const uri : string = 'mongodb://heroku_0m7dhsj9:ktqjg1fn9qc5c1nadn877tovkq@ds023500.mlab.com:23500/heroku_0m7dhsj9';
mongoose.connect(uri,(err:any)=>{
    if(err){
        return console.error(err.message); 
    }
    return console.log('Successfully connected to mongo DB');

}) 
export const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true,
    emailAdd:{type:String,required:true}}
})
const User = mongoose.model('User',userSchema);
export default User;


