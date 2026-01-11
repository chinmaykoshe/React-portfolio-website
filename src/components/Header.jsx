import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 w-full z-50 flex justify-center">
      {/* pill container */}
      <div className="w-[92%] max-w-5xl bg-black/40 backdrop-blur-sm border border-white/10 rounded-full 
                      shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-4 sm:px-6">
        <nav className="flex justify-between items-center py-2 sm:py-2.5">
          {/* Logo / Name */}
          <a
            href="#about"
            className="text-base sm:text-lg font-semibold tracking-wide text-white"
          >
            <span className="text-[#00ffd9]">{'<CK />'}</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium tracking-wide">
            {[
              { href: '#about', label: 'About Me' },
              { href: '#Tech-Stack', label: 'Tech-Stack' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#contact', label: 'Contact' },
              { href: '#message', label: 'Message' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative group nav-link transition-colors"
                >
                  {item.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#00ffd9] mt-1"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center text-[#00ffd9] border border-[#00ffd9] px-4 py-1.5 
                       rounded-full hover:bg-[#00ffd9] hover:text-black transition-all duration-300 ease-out transform hover:scale-105 
                       shadow-[0_0_18px_rgba(0,255,217,0.6)] text-sm font-medium"
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00ffd9] text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>

      {/* Mobile Menu (full-width dropdown under pill) */}
      <div
        className={`${isMenuOpen ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-2 pointer-events-none'}
                    md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-[92%] max-w-sm
                    bg-[#05090d]/95 backdrop-blur-md rounded-2xl border border-white/10
                    py-3 px-4 space-y-1 transition-all duration-300`}
      >
        {[
          { href: '#about', label: 'About Me' },
          { href: '#Tech-Stack', label: 'Tech-Stack' },
          { href: '#portfolio', label: 'Portfolio' },
          { href: '#contact', label: 'Contact' },
          { href: '#message', label: 'Message' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 px-3 rounded-lg nav-link text-sm text-white/90 
                       hover:bg-[#00ffd9] hover:text-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className="block mt-2 text-center text-[#00ffd9] border border-[#00ffd9] px-4 py-2 rounded-full 
                     hover:bg-[#00ffd9] hover:text-black transition text-sm font-medium"
          onClick={() => setIsMenuOpen(false)}
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}

export default Header;
