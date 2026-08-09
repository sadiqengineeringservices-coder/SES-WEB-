import { portfolio } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className="relative bg-charcoal-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`max-w-2xl reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            Featured Portfolio
          </h2>
          <p className="mt-5 text-lg text-charcoal-500">
            A selection of fabrication projects delivered across Balochistan — from solar
            structures to ornamental ironwork.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolio)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`group relative overflow-hidden rounded-2xl bg-primary-950 shadow-lg shadow-primary-900/10 reveal ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/20 to-transparent opacity-90" />

      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
          {item.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
      </div>

      {/* corner accent */}
      <div className="absolute top-4 right-4 h-8 w-8 rounded-full border border-accent-400/40 bg-primary-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
