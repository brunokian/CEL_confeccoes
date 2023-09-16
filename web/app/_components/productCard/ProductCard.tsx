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
                {isHovered && (
                    <div
                        className="absolute inset-0 flex items-center justify-center rounded-t-3xl bg-black bg-opacity-60 z-50"
                        style={{ height: '100px' }}
                    >
                        {/* Componente de sobreposição com informações do produto */}

                        {/* Conteúdo das informações do produto */}
                        {/* Substitua isso pelo conteúdo real das informações do produto */}
                        <div className="text-xl font-semibold text-white text-center">

                            <h2>{item.name}</h2>
                            <h2>R$ {item.price.toFixed(2)}</h2>
                        </div>


                        {/* Botão para fechar o modal */}

                    </div>
                )}
            </div>


        </div>
    );
}
