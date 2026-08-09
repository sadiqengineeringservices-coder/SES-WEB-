import { services } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`mx-auto max-w-2xl text-center reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
            What We Build
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            Our Engineering Services
          </h2>
          <p className="mt-5 text-lg text-charcoal-500">
            A full spectrum of steel fabrication and precision metalwork, delivered under one roof.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`group relative overflow-hidden rounded-2xl border border-charcoal-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-2xl hover:shadow-accent-500/10 reveal ${
        visible ? 'is-visible' : ''
      }`}
    >
      {/* hover wash */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-primary-500 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-50 to-primary-50 text-accent-600 ring-1 ring-accent-100 transition-all duration-500 group-hover:from-accent-400 group-hover:to-primary-500 group-hover:text-white group-hover:ring-accent-300">
        <service.icon className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-primary-950">{service.title}</h3>
      <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">{service.description}</p>

      <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-accent-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        In-house capability
      </span>
    </div>
  );
}
