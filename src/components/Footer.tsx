import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import sesLogo from '@/assets/ses-logo.png';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 9h3l.5-3H14V4.5c0-.8.3-1.5 1.5-1.5H17V.2C16.6.1 15.4 0 14.3 0 11.8 0 10 1.5 10 4.3V6H7v3h3v9h4V9z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={sesLogo}
                alt="Sadiq Engineering Services logo"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold tracking-tight text-lg">Sadiq Engineering Services</span>
                <span className="text-accent-400 text-[11px] font-medium tracking-[0.2em] uppercase">
                  Strength In Every Weld
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-white/60 leading-relaxed">
              Custom-designed, robust steel fabrication across Balochistan. From solar mounts
              to ornamental gates, we engineer metalwork that stands the test of time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/sadiqengineeringservices"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:bg-accent-400 hover:text-primary-950 hover:ring-accent-400 hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com/sadiqengineeringservices"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:bg-accent-400 hover:text-primary-950 hover:ring-accent-400 hover:-translate-y-0.5"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-300">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact Us', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-accent-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-300">Reach Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-none text-accent-400 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/N3nUnak2dzAmdd3R6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent-300 transition-colors"
                >
                  Shop 5, Main Airport Road, Near Royal Resort, Faqeer Colony, Gwadar - 91200, Pakistan
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-accent-400" />
                <a href="tel:03197958314" className="hover:text-accent-300 transition-colors">0319-7958314</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-none text-accent-400" />
                <a href="mailto:sadiqengineeringservices@gmail.com" className="hover:text-accent-300 transition-colors break-all">
                  sadiqengineeringservices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sadiq Engineering Services. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-accent-300 transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
