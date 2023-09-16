import WhatsappLogo from '@/assets/—Pngtree—whatsapp icon whatsapp logo_3584844.png'
import Image from 'next/image'
import Link from 'next/link'

export default function WhatsappButton() {
    const phoneNumber = "5518988074219"

    return (
        <Link href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
            <div className="relative z-0 bg-white text-green-600 text-center text-3xl font-bold p-3 w-[400px] rounded-full border-4 border-green-600 shadow-lg">
                <Image
                    src={WhatsappLogo}
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-3xl absolute z-40 top-0 left-0"
                />
                Contate-nos
            </div>
        </Link>
    )
}