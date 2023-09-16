import { fraudas_images } from "@/assets/fraudas_images"
import Image from "next/image"
import ProductCard from "./_components/productCard/ProductCard"

export default function Home() {
  return (
     <div className="min-h-[1000px] h-full max-w-[1200px] m-auto bg-gradient-to-r from-white to-orange-100 flex justify-center pt-10">
   

        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 p-4 w-[1000px]">

          {fraudas_images.map((item, index) => (
            <ProductCard item={{
              name: item.name,
              image: item.image,
              price: item.price,
            }} key={index}/>
          ))}
        </div>

     </div>
  )
}
