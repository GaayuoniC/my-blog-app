import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'//Importing style in nextjs
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minds Blog',
  description: 'My personal blog site',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
        
      <body className={inter.className}>
      <div className='main-container' >
         

            <Navbar/>    
                         
           {children}
           <Footer/>
         
       
           </div>
        
        </body>
        
    </html>
  )
}