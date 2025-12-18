import { ArrowUpRight, Instagram } from "lucide-react"
import Image from "next/image"

interface InstagramProfile {
  username: string
  avatar: string
  bio: string
  followers: string
  following: string
  posts: string
  url?: string
}

export function InstagramCard({ profile }: { profile: InstagramProfile }) {
  return (
    <a 
      href={profile.url || `https://instagram.com/${profile.username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-xl"
    >
        {/* Dark Mode Gradient Background */}
        <div className="relative p-6 bg-gradient-to-b from-zinc-800 to-zinc-900">
            
            {/* Header: Avatar + Info */}
            <div className="flex items-center gap-5">
                {/* Avatar with Instagram Gradient Ring */}
                <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                        <div className="w-full h-full rounded-full border-2 border-black overflow-hidden relative">
                            <Image 
                                src={profile.avatar} 
                                alt={profile.username} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg truncate">{profile.username}</h3>
                        <span className="bg-blue-500 rounded-full p-[2px] w-4 h-4 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white stroke-[3]">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <p className="text-zinc-400 text-xs font-medium truncate">
                        {profile.followers} followers • {profile.posts} posts
                    </p>
                </div>

                <Instagram className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Bio Preview */}
            <div className="mt-5 pt-5 border-t border-zinc-700/50">
                <p className="text-zinc-300 text-sm whitespace-pre-line leading-relaxed line-clamp-3">
                    {profile.bio}
                </p>
            </div>

            {/* CTA */}
            <div className="mt-5 flex items-center text-xs font-bold tracking-widest text-zinc-500 uppercase group-hover:text-white transition-colors">
                <span>View Profile</span>
                <ArrowUpRight className="w-3 h-3 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </div>
    </a>
  )
}
