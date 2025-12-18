export function Footer() {
  return (
    <footer className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest opacity-60">
      <div className="flex gap-6 md:gap-8 font-sans font-medium">
        <a href="https://instagram.com/aazekke" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-zinc-900 transition-all">Instagram</a>
        <a href="https://t.me/azattqz" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-zinc-900 transition-all">Telegram</a>
        <a href="mailto:azat.samatuly.kz@gmail.com" className="hover:opacity-100 hover:text-zinc-900 transition-all">Email</a>
      </div>
      <div className="font-sans">
        &copy; {new Date().getFullYear()} Azat. All Rights Reserved.
      </div>
    </footer>
  )
}
