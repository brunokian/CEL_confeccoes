import { fraudas_images } from "@/assets/fraudas_images"
import Image from "next/image"

export default function Home() {
  return (
     <div className="min-h-[1000px] h-full w-[1200px] m-auto bg-orange-50">
      <div className="flex justify-center pt-10">

        <div className="grid grid-cols-3 w-[800px] gap-6">

          {fraudas_images.map((item, index) => (
            <div key={index} className="">
                <div className="bg-white p-2 rounded-t-3xl text-center text-lg ">
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
          ))}
        </div>
      </div>
     </div>
  )
}
