import Image from "next/image"
import styles from "./about.module.css"

const AboutPage=()=>{
    return(
        <div>
           {/* Use nextjs image tag instead of a normal image tag */}
           <div className={ styles.container}>
           <div className={ styles.textContainer}>
            <h2 className= {styles.subtitle}>About Creative Minds</h2>
            <h1 className= {styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
            <p className= {styles.description}> We create digital ideas that are bigger, bolder, braver and better.
                We believe in good ideas, flexibility and precission. We are the world's 
                Our Special Team best consulting and finance solution provider. Wide range of 
                web and software development services
            </p>
            <div className= {styles.boxes} > 
            <div className= {styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p> </div>

            <div className= {styles.box}><h1>10 K+</h1>
                <p>Years of experience</p> </div>
            <div className= {styles.box}><h1>10 K+</h1>
                <p>Years of experience</p> </div>

           </div>
           </div>
           <div className={ styles.imgContainer}>
            <Image src="/about.jpg" alt="Picture of place" fill className={styles.about}/>

           </div>



           </div>
        </div>
    )
}

export default AboutPage