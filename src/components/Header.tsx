import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import sesLogo from '@/assets/ses-logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary-950/90 backdrop-blur-xl shadow-lg shadow-primary-950/30 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={sesLogo}
            alt="Sadiq Engineering Services logo"
            className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-tight text-lg">Sadiq Engineering</span>
            <span className="text-accent-400 text-[11px] font-medium tracking-[0.2em] uppercase">Services</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-400 after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:03197958314"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-900/40 hover:bg-primary-500 hover:shadow-primary-500/40 transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            <span>0319-7958314</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-primary-950/95 backdrop-blur-xl border-t border-white/10 transition-[max-height] duration-500 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm font-medium text-white/80 hover:text-accent-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:03197958314"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Get Consultation: 0319-7958314
          </a>
        </nav>
      </div>
    </header>
  );
}
