import styles from "./home.module.css"
import Image from "next/image";



const Homepage = () => {
  return <div className= {styles.container}>
    <div className= {styles.textContainer}>
      <h1 className= {styles.title} >Creative Minds Montessori</h1>
      <p className= {styles.description}>Building the future of your child today! </p>

      <div className={styles.buttons}>
        <button className= {styles.button}>Learn more</button>
        <button className= {styles.button}>contact</button>  

      </div>

      <div className= {styles.brands}>
        <Image src= "/brands.jpg" alt="brands image" fill className= {styles.brandImage}/>

      </div>

    </div>
    <div className= {styles.imgContainer}>
    <Image src= "/hero.jpg" alt="hero image" fill className= {styles.heroImage}/>


    </div>

    
    
    
    </div>;
};

export default Homepage;