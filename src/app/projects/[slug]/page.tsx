import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { ArrowLeft, ArrowRight } from "lucide-react"
import * as motion from "framer-motion/client"
import { InstagramCard } from "@/components/InstagramCard"
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

  const hasCustomGrid = project.images.some(img => typeof img === 'object');

  // Determine Next and Previous Projects
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  const isCreative = project.category === "Creative"

  return (
    <main className="bg-[#FDFCF8] min-h-screen">
      
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
             /* Commercial Project Hero - With Shared Layout Animation */
             <motion.div 
                layoutId={`card-container-${project.slug}`}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full relative"
             >
                 <motion.div 
                    layoutId={`image-${project.slug}`}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full relative"
                 >
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                 </motion.div>
                 <div className="absolute inset-0 bg-black/20" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1 
                            layoutId={`title-${project.slug}`}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl lg:text-9xl font-serif mb-4 leading-none"
                        >
                            {project.title}
                        </motion.h1>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm font-sans tracking-widest uppercase opacity-90">
                            <span>{project.year}</span>
                            <span>{project.category}</span>
                            <span>{project.tag}</span>
                        </div>
                    </div>
                 </div>
             </motion.div>
         )}
      </section>

      {/* Content & Gallery */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="col-span-1">
                  <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-8">About the project</h3>
                  
                  {/* Instagram Card in Sidebar */}
                  {project.instagram && (
                    <div className="hidden md:block">
                      <InstagramCard profile={project.instagram} />
                    </div>
                  )}
              </div>
              <div className="col-span-1 md:col-span-2">
                  <p className="text-xl md:text-2xl font-serif leading-relaxed text-zinc-800 mb-12 mt-12">
                      {project.description}
                  </p>
                  
                  {/* Mobile Instagram Card */}
                  {project.instagram && (
                    <div className="md:hidden">
                      <InstagramCard profile={project.instagram} />
                    </div>
                  )}
              </div>
          </div>

          {/* Gallery */}
          {hasCustomGrid ? (
             /* Bento Grid Layout for Mixed Sizes - Vertical Focus */
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {project.images.map((imgData, idx) => {
                   const src = typeof imgData === 'string' ? imgData : imgData.src;
                   const className = typeof imgData === 'object' ? imgData.className : '';
                   
                   return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={clsx("relative rounded-lg overflow-hidden group", className, 
                          // Default to span 1 col
                          !className.includes('col-span') && "col-span-1",
                          // Allow row-span items to stretch naturally to cover their grid area
                          className.includes('row-span') && "h-full min-h-[400px]",
                          // Allow regular items to have auto height, but apply h-full to the second item in the Smoking Astana grid to match edges
                          !className.includes('row-span') && (idx === 1 && project.slug === 'smoking-astana' ? "h-full" : "aspect-auto h-auto")
                        )}
                      >
                          <Image
                              src={src}
                              alt={`${project.title} - ${idx + 1}`}
                              width={800}
                              height={1200}
                              className={clsx(
                                "w-full group-hover:scale-105 transition-transform duration-700",
                                // If it's the specific case where we force h-full, we need object-cover to fill it
                                (className.includes('row-span') || (idx === 1 && project.slug === 'smoking-astana')) ? "h-full object-cover" : "h-auto",
                                className.includes('object-top') && "object-top"
                              )}
                          />
                      </motion.div>
                   )
                })}
             </div>
          ) : (
             /* Standard Masonry Layout */
             <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {project.images.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative w-full break-inside-avoid rounded-lg overflow-hidden"
                    >
                        <Image
                            src={img as string}
                            alt={`${project.title} - ${idx + 1}`}
                            width={800}
                            height={1200}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                ))}
             </div>
          )}

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
