import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import WeatherCard from '@/components/WeatherCard';

const MAPS_QUERY = encodeURIComponent(
  'Shop 5, Main Airport Road, Near Royal Resort, Faqeer Colony, Gwadar 91200, Pakistan',
);
const MAPS_LINK = 'https://maps.app.goo.gl/N3nUnak2dzAmdd3R6';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['Shop 5, Main Airport Road', 'Near Royal Resort, Faqeer Colony', 'Gwadar - 91200, Pakistan'],
    href: MAPS_LINK,
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['0319-7958314'],
    href: 'tel:03197958314',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['sadiqengineeringservices@gmail.com'],
    href: 'mailto:sadiqengineeringservices@gmail.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Monday – Sunday', '08:00 AM – 09:00 PM'],
  },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            Let's Build Something Strong
          </h2>
          <p className="mt-5 text-lg text-charcoal-500">
            Ready to start your fabrication project? Reach out for a consultation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, i) => (
            <ContactCard key={info.label} info={info} index={i} />
          ))}
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-charcoal-100 shadow-lg shadow-primary-900/10">
          <div className="group relative block aspect-[16/10] w-full sm:aspect-[21/9]">
            <iframe
              src={`https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`}
              title="Sadiq Engineering Services location in Gwadar"
              className="h-full w-full border-0 grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary-950/85 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-primary-900"
              aria-label="Open in Google Maps"
            >
              <Navigation className="h-3.5 w-3.5 text-accent-400" />
              Gwadar, Pakistan
            </a>
          </div>
        </div>

        {/* Weather + CTA */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <WeatherCard />
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white">Get a free consultation today</h3>
            <p className="mt-2 text-white/70">
              Speak directly with our engineering team about your steel fabrication needs.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <a
                href="tel:03197958314"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 text-sm font-semibold text-primary-950 shadow-lg shadow-accent-500/30 hover:bg-accent-300 hover:-translate-y-0.5 transition-all duration-300"
              >
                Call 0319-7958314
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent-400/50 px-7 py-3.5 text-sm font-semibold text-accent-200 hover:bg-accent-400 hover:text-primary-950 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Navigation className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  info,
  index,
}: {
  info: (typeof contactInfo)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const content = (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`group h-full rounded-2xl border border-charcoal-100 bg-charcoal-50 p-7 transition-all duration-500 hover:border-accent-300 hover:bg-white hover:shadow-xl hover:shadow-accent-500/10 reveal ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-primary-950">
        <info.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary-900">
        {info.label}
      </h3>
      <div className="mt-2 space-y-0.5">
        {info.lines.map((line) => (
          <p key={line} className="text-sm text-charcoal-500 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  if (info.href) {
    return (
      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block h-full">
        {content}
      </a>
    );
  }
  return content;
}
