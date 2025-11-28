import Link from "next/link"

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Scanline overlay effect */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

      {/* Register button - top right */}
      <div className="absolute top-6 right-6 z-30">
        <button className="font-terminal border-2 border-terminal-green bg-transparent px-6 py-2 text-sm uppercase tracking-wider text-terminal-green transition-all duration-200 hover:bg-terminal-green hover:text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]">
          Register
        </button>
      </div>

      {/* Bottom navigation menu */}
      <nav className="absolute bottom-6 left-6 z-30 flex items-center gap-6">
        <span className="font-terminal text-terminal-green animate-pulse">{">"}</span>
        <Link
          href="/about"
          className="font-terminal text-sm uppercase tracking-wider text-terminal-green hover:text-terminal-green-bright transition-colors"
        >
          About
        </Link>
        <Link
          href="/roadmap"
          className="font-terminal text-sm uppercase tracking-wider text-terminal-green hover:text-terminal-green-bright transition-colors"
        >
          Roadmap
        </Link>
        <Link
          href="/socials"
          className="font-terminal text-sm uppercase tracking-wider text-terminal-green hover:text-terminal-green-bright transition-colors"
        >
          Socials
        </Link>
        <Link
          href="/partnerships"
          className="font-terminal text-sm uppercase tracking-wider text-terminal-green hover:text-terminal-green-bright transition-colors"
        >
          Partnerships
        </Link>
        <Link
          href="/contact"
          className="font-terminal text-sm uppercase tracking-wider text-terminal-green hover:text-terminal-green-bright transition-colors"
        >
          Contact
        </Link>
        <span className="font-terminal h-4 w-2 bg-terminal-green animate-blink" />
      </nav>

      {/* Centered video container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative border-2 border-terminal-green p-1 shadow-[0_0_30px_rgba(0,255,65,0.3)]">
          <video autoPlay loop muted playsInline className="h-auto w-[600px] max-w-[80vw]">
            <source
              src="https://res.cloudinary.com/db7zzjmcj/video/upload/v1764257513/black_green_jacket_Reliza_qebl5u.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Access button - below video */}
        <button className="font-terminal border-2 border-terminal-green bg-terminal-green/10 px-10 py-3 text-lg uppercase tracking-widest text-terminal-green transition-all duration-200 hover:bg-terminal-green hover:text-black hover:shadow-[0_0_30px_rgba(0,255,65,0.6)]">
          Access
        </button>
      </div>
    </main>
  )
}
