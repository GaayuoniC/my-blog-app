"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavigationTest(){
    /*use the router hook to redirect*/
    /**CLIENT SIDE NAVIGATION */
    const router = useRouter()
    const pathname =usePathname()
    /*To get to the querry through the pathnames */
    const searchParams =useSearchParams()
    const q =searchParams.get("q")



    console.log(q)

    function handleClick(){
        console.log("clicked")
        router.push("/") /*redirect the user to where you want, you can use replace,push,refresh(),back,forward */

    }
    return(
        <div>
            Navigation test page
            <Link href= "/" prefetch={false}>Click here</Link>
            {/* the prefetch to false increased performance */}
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}