import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kamar', href: '#kamar' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex flex-col z-50">
          <span className={`text-lg font-bold tracking-widest leading-none ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            OSAKA RESIDENCE
          </span>
          <span className={`text-xs font-medium tracking-[0.2em] mt-1 ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
            BJ999
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-stone-600' : 'text-stone-100'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/6285749545557"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 text-sm font-medium transition-all ${
              isScrolled
                ? 'bg-stone-900 text-white hover:bg-stone-800'
                : 'bg-white text-stone-900 hover:bg-stone-100'
            }`}
          >
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white h-screen flex flex-col items-center justify-center gap-8 pt-20"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-stone-800 hover:text-stone-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6285749545557"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800"
            >
              Hubungi Kami
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
