
//This is how to set up the schema for the database and then model them

import  mongoose  from"mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20

    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
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

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
      

    },
    description:{
        type:String,
        required:true,
       
    },
    img:{
        type:String,
    },
    userId:{
        type:String,
        required:true

    },
    slug:{
        type:String,
        required:true,
        unique:true

    },
    
},
{timestamps:true})


//use the schemas to create the models:
export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

