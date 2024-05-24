
import Links from "./navbar/links/Links";

export default function Navbar(){
    return(
        <div>
            <div>Logo</div>
            <div>
                {/* <Link href="/">Homepage</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link> */}
                <Links/>

            </div>
        </div>
    )
}