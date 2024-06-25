import mongoose from "mongoose"

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
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    slug:{
        type:String,
        required:true,
        unique:true

    },
    
},
{timestamps:true})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post
