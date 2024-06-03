import Link from "next/link"
import styles from "./postcard.module.css"
import Image from "next/image"



export default function PostCard (){

    return(
        <div className= {styles.container} >
            <div className= {styles.top}>
                <div className={styles.imgContainer} >
                    <Image src= "/brands.jpg" className= {styles.img} alt="doll" fill />
                </div>
                <span className= {styles.date}>03.07.2024</span>
            </div>
            <div className= {styles.bottom}>
                <h1 className= {styles.title}>Title</h1>
                <p className= {styles.description}>Description</p>
                <Link href= "/blog/post">Read more </Link>

            </div>

          
        </div>
    )
}