import styles from "./postUser.module.css"
import { getUser } from "@/lib/data"

//const getData = async (userId)=>{

    //FETCH DATA WITH API

    //Add options for not wanting to cache the data from the api
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store" })

//     //Check for error here:
//     if(!res.ok){
//         throw new Error("Something went wrong with the user id")
//     }

//     //Return the response:
//     return res.json()

// }



const PostUser = async ({userId})=>{

    
    //FETCH DATA WITH API  
     //const user = await getData(userId)

     //FETCH DATA WITHOUT API
     const user = await getUser(userId)


    return(
        <div className= {styles.container}>
            <span className= {styles.title}>Author</span>
            <span className= {styles.username}>{userId} </span>
        </div>
    )
}

export default PostUser