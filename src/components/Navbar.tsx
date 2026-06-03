import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-navy-950 shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex flex-col leading-none text-left"
            >
              <span className="font-serif text-gold-400 text-lg lg:text-xl font-bold tracking-wide">
                The Balcony Suites
              </span>
              <span className="text-white/70 text-xs font-sans tracking-[0.2em] uppercase">
                Gachibowli, Hyderabad
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/85 hover:text-gold-400 text-sm font-sans font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919063568889"
                className="flex items-center gap-2 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors"
              >
                <Phone size={15} />
                <span>+91 90635 68889</span>
              </a>
              <a
                href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-5 py-2.5"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden bg-navy-950 border-t border-white/10 transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-white/85 hover:text-gold-400 text-sm py-2.5 border-b border-white/5 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919063568889"
                className="flex items-center justify-center gap-2 border border-white/30 text-white py-2.5 rounded-sm text-sm font-medium"
              >
                <Phone size={15} /> Call Us
              </a>
              <a
                href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center text-sm"
              >
                Book Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
