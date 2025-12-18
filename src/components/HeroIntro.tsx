"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const locations = [
  { city: "Tokyo", country: "JP", flag: "🇯🇵", color: "bg-red-100 text-red-700 border-red-200" },
  { city: "Astana", country: "KZ", flag: "🇰🇿", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { city: "San Francisco", country: "US", flag: "🇺🇸", color: "bg-blue-100 text-blue-700 border-blue-200" },
]

export function HeroIntro() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length)
    }, 2000) // Faster spin like a slot machine
    return () => clearInterval(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-24 bg-[#FDFCF8] relative overflow-hidden">
      
      {/* Wolf Look Face Photo - Right Side Background */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 50, scale: 1 }}
        animate={{ opacity: 1, x: "49%", y: -40, scale: 1.1 }} // Shift right to cut half the face
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[80vw] md:w-[60vw] h-full z-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
            <Image 
            src="/hero.png" 
            alt="Azat Portrait" 
            fill 
            className="object-cover object-center grayscale contrast-125"
            priority
            />
            {/* Gradient Mask to fade into background color */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-transparent to-transparent w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8]/20 via-transparent to-[#FDFCF8] h-full" />
        </div>
      </motion.div>

      <div className="max-w-7xl z-10 relative">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Typography Block */}
          <div className="text-5xl md:text-7xl lg:text-9xl font-serif text-zinc-900 leading-[1.1] tracking-tight mix-blend-multiply">
            <div className="overflow-hidden">
              <motion.div variants={item}>Hello, I'm <span className="italic text-zinc-400 font-light">Azat</span>.</motion.div>
            </div>

            <div className="overflow-hidden mt-2">
               <motion.div variants={item}>
                 A Model based in
               </motion.div>
            </div>
               
             {/* SLOT MACHINE / CASINO FRAME (On New Line) */}
            <motion.div 
              variants={item}
              className="mt-4 inline-flex"
            >
               <motion.div 
                 layout
                 transition={{ duration: 0.5, type: "spring", bounce: 0 }}
                 className="relative overflow-hidden bg-white rounded-full border border-zinc-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] px-6 py-2"
               >
                  <div className="relative flex items-center justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={index}
                        initial={{ y: "100%", filter: "blur(8px)", opacity: 0 }}
                        animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                        exit={{ y: "-100%", filter: "blur(8px)", opacity: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 140, 
                          damping: 18,
                          mass: 1
                        }}
                        className="flex items-center gap-4 whitespace-nowrap"
                      >
                        {/* City Name */}
                        <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-zinc-900 leading-none pb-1">
                          {locations[index].city}
                        </span>

                        {/* Casino Chip / Flag Badge */}
                        <div className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border ${locations[index].color} shadow-sm self-center mt-1`}>
                          <span className="text-xl md:text-3xl filter drop-shadow-sm leading-none">{locations[index].flag}</span>
                          <span className="text-xs md:text-base font-bold font-sans tracking-widest leading-none">{locations[index].country}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Shine/Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-full" />
               </motion.div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p variants={item} className="mt-16 text-lg md:text-xl text-zinc-500 font-sans font-light max-w-lg leading-relaxed ml-1 mix-blend-multiply">
            Specializing in editorial, runway, and commercial modeling. 
            Available for direct booking worldwide.
          </motion.p>

          {/* Scroll CTA */}
          <motion.div variants={item} className="mt-12 ml-1">
            <button 
              onClick={() => {
                document.getElementById('project-stack')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-3 text-xs md:text-sm font-bold font-sans tracking-[0.2em] uppercase text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <span className="w-8 h-[1px] bg-zinc-900 group-hover:w-12 transition-all duration-300" />
              <span>Scroll Projects</span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
