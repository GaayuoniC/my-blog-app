import Image from "next/image"
import styles from "./about.module.css"

const AboutPage=()=>{
    return(
        <div>
           {/* Use nextjs image tag instead of a normal image tag */}
           <div className={ styles.imgContainer}>    
           <Image src="https://images.pexels.com/photos/16801381/pexels-photo-16801381/free-photo-of-cafe-tables-and-chairs-near-building-columns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cocoa pod" fill/>
           </div>
        </div>
    )
}

export default AboutPage