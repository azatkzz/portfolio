import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-end items-center z-50 mix-blend-difference text-white">
      <div className="flex gap-6 md:gap-8 text-xs md:text-sm uppercase tracking-widest font-medium">
        <Link href="/" className="hover:opacity-70 transition-opacity">Work</Link>
        <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
        <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
      </div>
    </nav>
  )
}
