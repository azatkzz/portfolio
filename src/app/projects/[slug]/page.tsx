import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { ArrowLeft, ArrowRight } from "lucide-react"
import * as motion from "framer-motion/client"
import { clsx } from "clsx"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  // Determine Next and Previous Projects
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  const isCreative = project.category === "Projects" || project.category === "Awards" || project.category === "Education"
  const hasMetrics = 'metrics' in project && project.metrics && project.metrics.length > 0

  return (
    <main className="bg-white min-h-screen">
      
      {/* Back Button */}
      <div className={`fixed top-8 left-6 md:left-12 z-50 mix-blend-difference ${isCreative ? 'text-white' : 'text-white'}`}>
        <Link href="/" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity group">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
           Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className={clsx("relative w-full overflow-hidden", isCreative ? "h-[80vh] md:h-screen" : "h-screen")}>
         {isCreative ? (
            /* Creative Project Hero - Gradient Background Only */
            <div className="w-full h-full relative bg-gradient-to-b from-zinc-800 to-zinc-950 flex flex-col justify-end p-6 md:p-12">
                
                {/* Text Content */}
                <div className="relative z-20 max-w-4xl text-white">
                    <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-none">{project.title}</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-sans tracking-widest uppercase opacity-60">
                        <span>{project.year}</span>
                        <span>{project.category}</span>
                        <span>{project.tag}</span>
                    </div>
                </div>
            </div>
         ) : (
             /* Commercial Project Hero - With Zoom Animation */
             <motion.div 
                initial={{ scale: 0.5, borderRadius: "24px" }}
                animate={{ scale: 1, borderRadius: "0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative overflow-hidden"
             >
                 <motion.div 
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                 >
                    <motion.div
                        initial={{ filter: 'blur(30px)' }}
                        animate={{ filter: 'blur(8px)' }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute inset-0 bg-black/30" 
                 />
                 
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-20"
                 >
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif mb-4 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                            {project.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm font-sans tracking-widest uppercase opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            <span>{project.year}</span>
                            <span>{project.category}</span>
                            <span>{project.tag}</span>
                        </div>
                    </div>
                 </motion.div>
             </motion.div>
         )}
      </section>

      {/* Content & Gallery */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="col-span-1">
                  <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-8">
                    {project.category === "Experience" ? "Role Details" : "About"}
                  </h3>
                  
                  {/* Key Metrics for Experience Projects */}
                  {hasMetrics && (
                    <div className="hidden md:block space-y-6">
                      {project.metrics?.map((metric, idx) => (
                        <div key={idx} className="border-l-2 border-zinc-200 pl-4">
                          <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                            {metric.label}
                          </span>
                          <span className="text-2xl font-serif text-zinc-900">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
              </div>
              <div className="col-span-1 md:col-span-2">
                  <div className="text-lg md:text-xl font-serif leading-relaxed text-zinc-800 mb-12 mt-12 space-y-4">
                      {project.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className={paragraph.startsWith('•') ? 'pl-0' : ''}>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                  
                  {/* Mobile Metrics */}
                  {hasMetrics && (
                    <div className="md:hidden grid grid-cols-2 gap-6 mb-12">
                      {project.metrics?.map((metric, idx) => (
                        <div key={idx} className="border-l-2 border-zinc-200 pl-4">
                          <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                            {metric.label}
                          </span>
                          <span className="text-2xl font-serif text-zinc-900">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
              </div>
          </div>

      </section>

      {/* Navigation Footer */}
      <div className="border-t border-zinc-200 py-24 flex justify-center">
         <div className="flex gap-12 md:gap-24">
            
            {/* Prev Project */}
            <Link 
              href={`/projects/${prevProject.slug}`} 
              className="group flex items-center gap-4 text-sm font-sans tracking-widest uppercase hover:opacity-50 transition-opacity"
            >
               <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
               <span>Previous</span>
            </Link>

            {/* Next Project */}
            <Link 
              href={`/projects/${nextProject.slug}`} 
              className="group flex items-center gap-4 text-sm font-sans tracking-widest uppercase hover:opacity-50 transition-opacity"
            >
               <span>Next Project</span>
               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>

         </div>
      </div>

    </main>
  )
}
