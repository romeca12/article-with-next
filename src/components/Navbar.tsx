"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
    const pathname = usePathname();
    return (
        <div className="shadow p-4 flex justify-center items-center dark:shadow-emerald-300">
            <Link href="/" className={`mr-4 ${pathname === "/" ? "text-green-400" : ""}`}>Home</Link>
            <Link href="/blogs" className={`mr-4 ${pathname === "/blogs" ? "text-green-400" : ""}`}>Blogs</Link>
            <Link href="/create-blog" className={pathname === "/create-blog" ? "text-green-400" : ""}>Create Blog</Link>
        </div>
    )
}

export default Navbar