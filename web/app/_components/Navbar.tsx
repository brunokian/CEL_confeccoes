import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Navbar () {
    return (
        <div className="flex items-center h-[80px] bg-stone-400 pl-2">
            <div className="h-[60px] w-[60px]">
                <Image 
                    src={logo}
                    alt=""
                    width={60}
                    height={60}
                />
            </div>
            <div className="flex gap-4 text-xl font-bold text-white m-6">
                <Link href="#" className="hover:text-red-200">Fraudas</Link>
                <Link href="#" className="hover:text-red-200">Amigurumi</Link>
                <Link href="#" className="hover:text-red-200">Santas</Link>
            </div>
        </div>
    )
}