import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = ()=>{
    return(
        <div className= {styles.container}>
            <div className= {styles.imgContainer}>
                {/* Make sure to give the sizes prop else image distorts itself */}
                <Image className= {styles.image} src="https://images.pexels.com/photos/24770134/pexels-photo-24770134/free-photo-of-a-cat-is-sleeping-on-a-stool-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="Cat" 
                             width= "300" height= "450"/>
            </div>
            <div className= {styles.textContainer}>
                <h1 className= {styles.title}>Title</h1>
                <div className= {styles.detail}>
                {/* <Image className= {styles.avatar} src="https://images.pexels.com/photos/24770134/pexels-photo-24770134/free-photo-of-a-cat-is-sleeping-on-a-stool-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill alt="Cat" /> */}

                </div>
                <div className= {styles.detailText}>
                    <span className= {styles.detailTitle}>Author</span>
                    <span className= {styles.detailValue}>Christian Gaayuoni</span>
                </div>
                <div className= {styles.detailText}>
                    <span className= {styles.detailTitle}>Published</span>
                    <span className= {styles.detailValue}>04.06.2024</span>
                </div>
                <div className= {styles.content}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex accusamus, corrupti vitae odit sint, atque at, quaerat maiores numquam reiciendis libero ratione in est! Non, accusantium. Repudiandae repellendus saepe ipsam.</div>
            </div>

        </div>
    )
}
export default SinglePostPage