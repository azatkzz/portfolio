"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// Sample TFP Photos (You can replace these with your actual creative shots)
const photos = [
  "/kaidarova/IMG_3242.jpeg",
  "/cntrl.culture/FB8CC802-9FFD-4CF1-9C36-781ACFEE8E1F_1_105_c.jpeg",
  "/torre/IMG_1161.JPG",
  "/smoking.astana/IMG_9314.JPG",
  "/Iskrit.co/48DC4C32-62C7-4084-8A0C-ECB927266B38_1_105_c.jpeg",
  "/kaidarova/k7.jpeg",
  "/smoking.astana/IMG_9315.JPG",
  "/torre/IMG_1202.JPG"
]

export function CreativeCarousel() {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const controls = animate(x, -width, {
      type: "tween",
      ease: "linear",
      duration: 30, // Adjust speed (seconds to scroll full width)
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latest) => {
        if (isHovered) controls.pause()
        else controls.play()
      }
    })
    return controls.stop
  }, [width, x, isHovered])

  return (
    <section className="py-24 overflow-hidden bg-black text-white relative">
      <div className="px-6 md:px-24 mb-12">
         <h3 className="text-sm font-sans tracking-[0.2em] uppercase text-zinc-500">Creative / TFP</h3>
         <h2 className="text-4xl md:text-6xl font-serif mt-2">Experimental Works</h2>
      </div>

      <div className="relative w-full">
        {/* Infinite Scroll Container */}
        <div ref={carouselRef} className="flex gap-8 cursor-grab active:cursor-grabbing w-max pl-6">
          <motion.div 
            style={{ x }}
            className="flex gap-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Double the list for seamless loop */}
            {[...photos, ...photos, ...photos].map((src, i) => (
              <motion.div 
                key={i} 
                className="relative w-[300px] h-[450px] shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Creative Shot ${i}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

