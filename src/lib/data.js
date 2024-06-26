//Import the models
import connectToDb from "./connectToDb";
// import  Post  from "@/models";
// import User from "@/models"
import {User, Post} from "./models"

//TEMPORARY DATA.
// const users=[
//     {id:1, name:"john"},
//     {id:2, name:"doe"},
// ]

// const posts=[
//     {id:1, title:"Post 1", body:".....", userId:1},
//     {id:2, title:"Post 2", body:".....", userId:2},
//     {id:3, title:"Post 3", body:".....", userId:3},
//     {id:4, title:"Post 4", body:".....", userId:4},


// ]

//Get all posts
export const getPosts = async  ()=>{
    //return posts;
    try{
        await connectToDb();
        const posts = await Post.find()
        //.populate("userId");

        return posts;

    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch  all posts!");
    }
}

//Get a single post by slug
export const getPost = async (slug)=>{
    //return posts.find((post)=> post.id === parseInt(id))
    try{
        await connectToDb();
        const post = await Post.findOne({slug});

        return post;

    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch single post!")
    }
}

//Get user by id
export const getUser = async(id)=>{
   // return users.find((user)=>user.id === parseInt(id))
   try{
    await connectToDb();
    const user = await User.findById(id);

    return user;

}catch(error){
    console.log(error)
    throw new Error("Failed to fetch user!")
}


}
//Get all users:
export const getUsers = async()=>{
    // return users.find((user)=>user.id === parseInt(id))
    try{
     await connectToDb();
     const users = await User.find();
 
     return users;
 
 }catch(error){
     console.log(error)
     throw new Error("Failed to fetch all users!")
 }
 
 
 }

// //Get all the posts 
// export const getPosts = async()=>{
//     try{
//         connectToDb()
//         const posts = await Post.find()
//         return posts

//     }catch(error){
//         console.log(error);
//         throw new Error(error, "Failed to fetch posts")

//     }
// }

// //Get a single post
// export const getPost = async(slug)=>{
//     try{
//         connectToDb()
//         const post = await Post.find({slug:slug})
//         return post

//     }catch(error){
//         console.log(error);
//         throw new Error(error, "Failed to fetch posts")

//     }

// }

// //Get user by id
// export const getUser = async(id)=>{
//     try{
//         connectToDb()
//         const user = await User.findById(id)
//         return user

//     }catch(error){
//         console.log(error);
//         throw new Error(error, "Failed to fetch posts")

//     }
// }

// //Getting all users for admin panel

// export const getUsers = async()=>{
//     try{
//         connectToDb()
//         const users = await User.find()
//         return users

//     }catch(error){
//         console.log(error);
//         throw new Error(error, "Failed to fetch posts")

//     }
// }