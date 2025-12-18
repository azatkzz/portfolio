"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

function Card({ project, index, range, targetScale, progress }: any) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col w-[90vw] md:w-[1000px] h-[70vh] rounded-3xl origin-top bg-white border border-zinc-200 overflow-hidden shadow-2xl cursor-pointer group"
      >
        <Link href={`/projects/${project.slug}`} className="w-full h-full block">
            <motion.div 
              layoutId={`card-container-${project.slug}`}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative"
            >
                <div className="flex justify-between items-start p-8 md:p-12 z-20 mix-blend-difference text-white absolute w-full top-0">
                <div>
                    <motion.h2 layoutId={`title-${project.slug}`} className="text-3xl md:text-5xl font-serif">{project.title}</motion.h2>
                    <p className="text-sm mt-2 opacity-80">{project.tag}</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-sans font-bold">{project.year}</p>
                    <p className="text-sm font-sans tracking-widest uppercase opacity-80">{project.category}</p>
                </div>
                </div>

                <div className="relative w-full h-full overflow-hidden">
                <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                    <motion.div 
                        layoutId={`image-${project.slug}`} 
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full relative"
                    >
                        <Image
                        fill
                        src={project.coverImage}
                        alt={project.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 pointer-events-none" />
                </motion.div>
                </div>

                {/* Hover Hint Button */}
                <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm text-zinc-900 px-6 py-3 rounded-full font-sans font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-white">
                        View Case <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

            </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export function ProjectStack() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="project-stack" ref={container} className="mt-[20vh] mb-[50vh]">
      <div className="px-6 md:px-24 mb-24 flex items-end justify-between">
         <div>
            <span className="text-xs font-sans font-bold tracking-widest text-zinc-300 mb-2 block">01</span>
            <h3 className="text-4xl md:text-6xl font-serif text-zinc-900">
               Selected <span className="italic text-zinc-400">Works</span>
            </h3>
         </div>
      </div>
      
      {projects
        .filter(project => project.category !== "Creative") // Filter out Creative projects
        .map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05)
        return (
          <Card 
            key={i} 
            index={i} 
            project={project} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale}
            progress={scrollYProgress} 
          />
        )
      })}
    </section>
  )
}
