import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="bg-[#FDFCF8] min-h-screen flex flex-col justify-center px-6 md:px-24 py-24">
      
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl md:text-9xl font-serif mb-12 md:mb-24 text-zinc-900 leading-[0.9]">
          Let's work <br /> together.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Email Section */}
          <div className="flex flex-col gap-4">
             <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400">Email</span>
             <a 
               href="mailto:azat.samatuly.kz@gmail.com" 
               className="text-xl md:text-3xl font-serif text-zinc-900 hover:opacity-60 transition-opacity break-words"
             >
               azat.samatuly.kz@gmail.com
             </a>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col gap-8">
             <div className="flex flex-col gap-4">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400">Socials</span>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://t.me/azattqz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-xl md:text-3xl font-serif text-zinc-900 hover:opacity-60 transition-opacity"
                  >
                    <span>Telegram</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    <span className="text-base text-zinc-400 font-sans ml-2 opacity-0 group-hover:opacity-100 transition-opacity">@azattqz</span>
                  </a>

                  <a 
                    href="https://instagram.com/aazekke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-xl md:text-3xl font-serif text-zinc-900 hover:opacity-60 transition-opacity"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    <span className="text-base text-zinc-400 font-sans ml-2 opacity-0 group-hover:opacity-100 transition-opacity">@aazekke</span>
                  </a>
                </div>
             </div>
          </div>

        </div>

        <div className="mt-24 pt-12 border-t border-zinc-200">
           <p className="text-zinc-500 font-sans text-sm md:text-base max-w-lg leading-relaxed">
             Based in Tokyo. Available for editorial, commercial, and runway bookings worldwide.
           </p>
        </div>
      </div>

    </main>
  )
}
