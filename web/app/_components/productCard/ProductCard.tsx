import Image from "next/image"
import { fraudas_images } from "@/assets/fraudas_images"

export default function ProductCard({item}: any) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-t-3xl text-center text-lg max-w-[300px] w-full">
                <h1>{item.name}</h1>
            </div>
            <Image
                src={item.image}
                alt=""
                width={300}
                height={300}
                className="rounded-b-3xl shadow-xl"
            />
        </div>
    )
}