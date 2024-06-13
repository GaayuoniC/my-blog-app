import styles from "./home.module.css"
import Image from "next/image";
import Link from "next/link";



const Homepage = () => {
  return <div className= {styles.container}>
    <div className= {styles.textContainer}>
      <h1 className= {styles.title} >Creative Minds Montessori</h1>
      <p className= {styles.description}>Embodied mind creative body </p>

      <div className={styles.buttons}>
        <button className= {styles.button}>Learn more</button>
        <button className= {styles.button}>
          <Link href="/contact" >contact </Link>
          
          </button>  

      </div>

      <div className= {styles.brands}>
        <Image src= "/brands.jpg" alt="brands image" fill className= {styles.brandImage}/>

      </div>

    </div>
    <div className= {styles.imgContainer}>
    <Image src= "/hero.jpg" alt="hero image"  className= {styles.heroImage} width="300" height= "470" />


    </div>

    
    
    
    </div>;
};

export default Homepage;