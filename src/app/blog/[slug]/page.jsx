import PostUser from "@/components/postUser/postUser"
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react"
import { getPosts } from "@/lib/data"

//FETCHING DATA WITH API
// const getData = async (slug)=>{
//     Add options for not wanting to cache the data from the api
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//     Check for error here:
//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     Return the response:
//     return res.json()

// }

const SinglePostPage = async ({params} )=>{
    //destructure the slug
    const{slug}=params;


    //FETCH DATA WITH AN API
    //const post  = await getData(slug);//Pass the slug here!!

    //FETCH DATA WITHOUT API
    const post = await getPosts(slug)



  
    return(
        <div className= {styles.container}>
            <div className= {styles.imgContainer}>
                {/* Make sure to give the sizes prop else image distorts itself */}
                <Image className= {styles.image} src="https://images.pexels.com/photos/24770134/pexels-photo-24770134/free-photo-of-a-cat-is-sleeping-on-a-stool-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="Cat" 
                             width= "300" height= "450"/>
            </div>

            <div className= {styles.textContainer}>
                <h1 className= {styles.title}> {post.title} </h1>

                <div className= {styles.detail}>

                <Image className= {styles.avatar} src="https://images.pexels.com/photos/24770134/pexels-photo-24770134/free-photo-of-a-cat-is-sleeping-on-a-stool-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width= "50" height= "50" alt="Cat" />
               
               {/* The suspence is the fall back default when data is still being fetched */}
               <Suspense fallback={ <div> Loading....</div> }  >    
               <PostUser userId={post.userId} />
               </Suspense>


                <div className= {styles.detailText}>
                    <span className= {styles.detailTitle}>Published</span>
                    <span className= {styles.detailValue}>04.06.2024</span>
                </div>

                </div>
                
               
                <div className= {styles.content}> {post.body}</div>
            </div>

        </div>
    )
}
export default SinglePostPage