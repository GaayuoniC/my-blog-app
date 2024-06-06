import styles from "./postUser.module.css"





const PostUser = async ({userId})=>{
    

    const getData = async (userId)=>{
        //Add options for not wanting to cache the data from the api
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store" })
    
        //Check for error here:
        if(!res.ok){
            throw new Error("Something went wrong with the user id")
        }
    
        //Return the response:
        return res.json()
    
    }

     const user = await getData(userId)

    return(
        <div className= {styles.container}>
            <span className= {styles.title}>Author</span>
            <span className= {styles.username}>{user.name} </span>
        </div>
    )
}

export default PostUser