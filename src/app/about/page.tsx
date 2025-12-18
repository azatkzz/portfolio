import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="bg-[#FDFCF8] min-h-screen pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Left Column - Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden bg-zinc-100">
           <Image
             src="/IMG_4069.JPG"
             alt="Azat Portrait"
             fill
             className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
           />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
            
            <h1 className="text-6xl md:text-8xl font-serif mb-12 text-zinc-900 leading-[0.9]">
               About <br /> <span className="italic text-zinc-400">Azat.</span>
            </h1>

            <div className="space-y-8 text-lg font-sans font-light text-zinc-600 leading-relaxed max-w-xl">
               <p>
                 I am a model from Kazakhstan with international experience across the United States and Japan, currently based in Tokyo. My work spans commercial, lifestyle, and promotional campaigns, collaborating with both global and regional brands.
               </p>
               
               <p>
                 I have partnered with major companies including <a href="https://www.instagram.com/allur.kz/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all">Allur Auto</a>, <a href="https://www.instagram.com/hyundaikz/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all">Hyundai Kazakhstan</a>, <a href="https://www.instagram.com/p/CvXVLAng-TR/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all">Yandex</a> (Kazakhstan division), and <a href="https://www.instagram.com/argymaq/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all">Argymaq</a>.
               </p>

               <p>
                 In addition to commercial work, I participated in <a href="https://www.instagram.com/sanfranciscofashionweek/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 font-medium underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all">San Francisco Fashion Week 2024</a>, gaining runway experience in an international fashion environment.
               </p>

               <p>
                 With a global background and adaptability across markets, I bring a versatile, professional presence to each project.
               </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 mt-16 pt-16 border-t border-zinc-200">
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Height</span>
                  <span className="text-xl font-serif text-zinc-900">188 cm</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Chest</span>
                  <span className="text-xl font-serif text-zinc-900">95 cm</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Waist</span>
                  <span className="text-xl font-serif text-zinc-900">73 cm</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Hips</span>
                  <span className="text-xl font-serif text-zinc-900">93 cm</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Shoes</span>
                  <span className="text-xl font-serif text-zinc-900">44 EU</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Eyes</span>
                  <span className="text-xl font-serif text-zinc-900">Brown</span>
               </div>
            </div>

        </div>
      </div>
    </main>
  )
}
