"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
    const pathname = usePathname();
    return (
        <div className="shadow p-4 flex justify-center items-center dark:shadow-emerald-300">
            <Link href="/" className={`mr-4 ${pathname === "/" ? "text-green-400" : ""}`}>Home</Link>
            <Link href="/blogs" className={pathname === "/blogs" ? "text-green-400" : ""}>Blogs</Link>
        </div>
    )
}

export default Navbar