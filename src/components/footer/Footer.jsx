import styles from "./footer.module.css"


function Footer(){
    return(
        <div className= {styles.container}>
            <div className= {styles.logo}>C-M-M</div>
            <div className= {styles.text}>
                Creative Minds Montessori 	&#169;All rights reserved
            </div>
            {/* &#169; is the code for the copyright symbol in html */}

           
        </div>
    )
}
export default Footer