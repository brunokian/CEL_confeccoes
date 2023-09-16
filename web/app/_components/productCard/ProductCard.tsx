"use client"

import Image from "next/image"
import { useState } from "react";
import { fraudas_images } from "@/assets/fraudas_images"
import { motion, AnimatePresence } from 'framer-motion';


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
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center rounded-t-3xl bg-black bg-opacity-60 z-50"
                  style={{ height: '100px' }}
                >
                  <div className="text-xl font-semibold text-white text-center">
                    <h2>{item.name}</h2>
                    <h2>R$ {item.price.toFixed(2)}</h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
}
