import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"



//Use async for data fetching
const BlogPage = async ()=>{

    const getData = async ()=>{
        //Add options for not wanting to cache the data from the api
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"  })

        //Check for error here:
        if(!res.ok){
            throw new Error("Something went wrong")
        }
    
        //Return the response:
        return res.json()
    
    }




    //Use the  function above to get the data fetched
    const posts = await getData();


    return(
        <div className= {styles.container}>
            {posts.map((post)=>(<div className= {styles.post} key={post.id} >  <PostCard post={post} /></div>))}         
        </div>
    )
}

export default BlogPage
