
"use client"
import { useState } from "react"
import styles from "./linkscss/links.module.css"
import NavLink from "./navLink/navLink"

const Links = ()=>{

    //Using use state to manage the responsiveness of the menu bar
    const [open,setOpen]= useState(false)



    //Create an array of links here:
    const links =[
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]
//Temporary data structure here!!
    const session = true
    const isAdmin = false

//Map the array for the links below in the return part
    return(
       <div className= {styles.container}> 
        
        
        <div className={styles.links} >
        
        {

            links.map((link=>(<NavLink item= {link} key={link.title} />) ))
        }
        {/* Set the conditions for displaying admin or user here::: */}
        {
            session ? (
                <> 
                 {
                    isAdmin && (
                        <NavLink item={{title:"Admin", path:"/admin"}}/> 
                    )
                    } 
                    <button className= {styles.logout}>Logout</button>
                </>
                ): (

                <NavLink item={{title:"Login", path:"/login"}}/>
            )
        }
    </div> 

    {/* Implementing the use state on the button with an onclick event */}
    
    <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>Menu</button>


    {
        open && <div className={styles.mobileLinks}>
            {links.map((link)=>(<NavLink item= {link} key={link.title}  />) )}
        </div>
    }
    
    </div>)
}
export default Links