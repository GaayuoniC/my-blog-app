import Link from "next/link";

export default function NotFound(){

    return(
        <div>
            <h2>
                Not Found
            </h2>
            <p>Sorry!.Page your are looking for is not available</p>
            <Link href="/">Return to homepage</Link>
        </div>
    )
}