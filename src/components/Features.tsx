import { Lightbulb, Tag, Wrench, BadgeCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Designs',
    text: 'Every project begins with a custom engineering approach — we design for the load, the site, and the decades ahead.',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    text: 'Premium fabrication without the premium markup. Transparent quotes, no surprises, value engineered in.',
  },
];

const proofPoints = [
  { icon: Wrench, label: 'Certified Welders' },
  { icon: BadgeCheck, label: 'Quality Assured' },
  { icon: Lightbulb, label: 'Custom Engineered' },
  { icon: Tag, label: 'Fair Pricing' },
];

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-primary-950 py-24 sm:py-32">
      {/* texture */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-500/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`max-w-2xl reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-400">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Engineered to outperform, priced to compete
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* proof marquee */}
        <div className="mt-16 overflow-hidden border-y border-white/10 py-6">
          <div className="flex w-max animate-marquee gap-12">
            {[...proofPoints, ...proofPoints, ...proofPoints].map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-white/60">
                <p.icon className="h-5 w-5 text-accent-400" />
                <span className="text-sm font-semibold uppercase tracking-wider">{p.label}</span>
                <span className="ml-12 text-accent-500/40">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: { icon: typeof Lightbulb; title: string; text: string };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-accent-400/40 reveal ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/10 text-accent-300 ring-1 ring-accent-400/20 transition-all duration-500 group-hover:bg-accent-400 group-hover:text-primary-950">
        <feature.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-white/70 leading-relaxed">{feature.text}</p>
    </div>
  );
}
