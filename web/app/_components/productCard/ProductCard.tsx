"use client"

import Image from "next/image"
import { useState } from "react";
import { fraudas_images } from "@/assets/fraudas_images"


export default function ProductCard({ item }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={item.image}
          alt=""
          width={300}
          height={300}
          className="rounded-3xl shadow-xl"
        />
      </div>

      {isHovered && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50"
          style={{ width: '300px', height: '300px' }}
        >
          {/* Componente de sobreposição com informações do produto */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Conteúdo das informações do produto */}
            {/* Substitua isso pelo conteúdo real das informações do produto */}
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>

            {/* Botão para fechar o modal */}
           
          </div>
        </div>
      )}
    </div>
  );
}
