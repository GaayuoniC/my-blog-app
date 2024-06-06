import Link from "next/link"
import styles from "./postcard.module.css"
import Image from "next/image"



export default function PostCard ({post}){

    return(
        <div className= {styles.container} >
            <div className= {styles.top}>
                <div className={styles.imgContainer} >
                    <Image src= "/brands.jpg" className= {styles.img} alt="doll" fill />
                </div>
                <span className= {styles.date}>03.07.2024</span>
            </div>
            <div className= {styles.bottom}>
                <h1 className= {styles.title}> {post.title} </h1>
                <p className= {styles.description}> {post.body}
                </p>
                {/* Use back ticks and dynamically visit each blog post */}
                <Link className= {styles.link} href= {`/blog/${post.id}`} >Read more </Link>

            </div>

          
        </div>
    )
}