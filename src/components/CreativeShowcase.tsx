"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MousePointer2 } from "lucide-react"

const creativeProjects = [
  {
    title: "Black & White",
    subtitle: "Studio Series",
    image: "/project1/565ED403-69BA-474C-A6F7-6BC62A183CAA_1_201_a.jpeg",
    slug: "bw-studio"
  },
  {
    title: "Street Style",
    subtitle: "Urban Aesthetics",
    image: "/project2/9B44860C-1EB0-4C61-A539-4DBA6A435771.jpeg",
    slug: "street-style"
  },
  {
    title: "P Level",
    subtitle: "Concrete Jungle",
    image: "/project3/D238BCC9-DFDE-4A0B-BEA8-ADCD7B4CE6C5_1_105_c.jpeg",
    slug: "underground-parking"
  },
  {
    title: "Astana Autumn",
    subtitle: "Golden Hour",
    image: "/ project4/IMG_1584.JPG",
    slug: "astana-autumn"
  },
  {
    title: "Almaty Downtown",
    subtitle: "Urban Walk",
    image: "/project5/IMG_9962.JPG",
    slug: "almaty-downtown"
  },
]

export function CreativeShowcase() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  const scrollContainer = (direction: 'left' | 'right') => {
    const amount = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 500;
    if (direction === 'left') {
        window.scrollBy({ top: -amount, behavior: 'smooth' })
    } else {
        window.scrollBy({ top: amount, behavior: 'smooth' })
    }
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Visual Guide / Controls */}
        <div className="absolute bottom-12 left-6 md:left-12 z-30 flex items-center gap-4 text-white/40">
            <MousePointer2 className="w-4 h-4 animate-bounce" />
            <span className="text-xs font-sans tracking-widest uppercase">Scroll Down to Explore</span>
        </div>

        <div className="absolute bottom-12 right-6 md:right-12 z-30 flex gap-4">
             <button 
                onClick={() => scrollContainer('left')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
             >
                <ArrowLeft className="w-5 h-5" />
             </button>
             <button 
                onClick={() => scrollContainer('right')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 active:scale-95"
             >
                <ArrowRight className="w-5 h-5" />
             </button>
        </div>


        <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-12 md:px-12 items-center">
          
          {/* Title Card - Scrolls with the list */}
          <div className="shrink-0 w-[80vw] md:w-[30vw] flex flex-col justify-center pl-6 md:pl-12">
             <span className="text-xs font-sans font-bold tracking-widest text-zinc-500 mb-4 block">02</span>
             <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                Creative <br /> <span className="italic text-zinc-500">& TFP</span>
             </h2>
             <p className="text-sm font-sans text-zinc-400 max-w-[250px] leading-relaxed">
                Experimental shoots, personal projects, and artistic collaborations.
             </p>
          </div>

          {creativeProjects.map((project, i) => (
            <Link 
                key={i} 
                href={`/projects/${project.slug}`} 
                className="group relative h-[55vh] w-[75vw] md:h-[70vh] md:w-[45vh] shrink-0 overflow-hidden rounded-sm bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-white/10"
            >
               
               {/* Image with Scale Effect */}
               <div className="w-full h-full overflow-hidden">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
               </div>

               {/* Overlay Text */}
               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
                  <span className="text-4xl md:text-6xl font-serif text-transparent stroke-white font-bold stroke-1 group-hover:text-white transition-colors duration-500 leading-[0.9]">
                    {project.title}
                  </span>
                  <div className="overflow-hidden mt-3">
                    <span className="block text-xs font-sans tracking-widest uppercase text-zinc-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.subtitle}
                    </span>
                  </div>
               </div>

            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
