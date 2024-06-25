
//This is how to set up the schema for the database and then model them

import  mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:20

    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false

    },
    
},
{timestamps:true})
//Time stamp all the log activities!!



//use the schemas to create the models:
 const User = mongoose.models.User || mongoose.model("User", userSchema)

 export default User;


