"use client"
import styles from "./contact.module.css"
import Image from "next/image"

const ContactPage=()=>{
    console.log('It works  here')
    return(
        <div className= {styles.container}>
            <div className= {styles.imgContainer}>
                
                <Image src="/about.jpg" className= {styles.image} width="300" height="470" alt="cocoa pod" />
            </div>  

            <div className= {styles.formContainer}>
                <form className= {styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" cols= "30" rows= "10" placeholder="Message"></textarea>
                    <button onClick={()=>console.log('Clicked')}>Send</button>



                </form>
            </div>


        </div>
    )
}
export default ContactPage