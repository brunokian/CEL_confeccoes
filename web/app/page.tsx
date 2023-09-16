import { fraudas_images } from "@/assets/fraudas_images"
import Image from "next/image"
import ProductCard from "./_components/productCard/ProductCard"
import WhatsappButton from "./_components/WhatsappButton"
import WhatsappLogo from '@/assets/whatsapp-color-svgrepo-com.svg'

export default function Home() {
  return (
     <div className="min-h-[1000px] h-full max-w-[1200px] m-auto bg-gradient-to-r from-white to-orange-100 flex flex-col">
        <div className="flex justify-center p-10">
        
          <WhatsappButton />
        </div>
        <div className="flex justify-center pt-10">

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

     </div>
  )
}
