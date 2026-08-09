import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    text: 'Every weld, cut, and joint is held to uncompromising structural standards.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    text: 'Projects engineered and delivered on schedule, without cutting corners.',
  },
  {
    icon: MapPin,
    title: 'Serving Balochistan',
    text: 'Proudly fabricating for clients across the region from our Gwadar workshop.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-charcoal-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`grid gap-16 lg:grid-cols-2 lg:items-center ${visible ? 'is-visible' : ''} reveal`}>
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary-900/20">
              <img
                src="https://images.pexels.com/photos/5845897/pexels-photo-5845897.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                alt="Blacksmith shaping heated metal at a forge"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-4 sm:right-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white shadow-2xl shadow-primary-900/20 ring-1 ring-primary-900/5">
              <StatItem target={10} suffix="+" label="Services Offered" start={visible} />
              <StatItem target={100} suffix="%" label="Custom Engineered" start={visible} />
              <StatItem target={8} suffix="–09" label="Daily Working Hours" start={visible} pad2 />
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600">
              About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight leading-tight">
              About Sadiq Engineering Services
            </h2>
            <p className="mt-6 text-lg text-charcoal-600 leading-relaxed">
              Specializing in custom-designed, robust steel fabrication across Balochistan,
              focusing on premium quality and timely delivery. From solar mounts to ornamental
              gates, we engineer metalwork that stands the test of time.
            </p>

            <div className="mt-10 space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-charcoal-500">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  target,
  suffix,
  label,
  start,
  pad2,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
  pad2?: boolean;
}) {
  const count = useCountUp(target, 1600, start);
  const display = pad2 ? String(count).padStart(2, '0') : String(count);

  return (
    <div className="bg-white px-5 py-5 text-center">
      <div className="text-2xl font-bold text-primary-700 tabular-nums">
        {display}
        <span className="text-primary-400">{suffix}</span>
      </div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-charcoal-500">
        {label}
      </div>
    </div>
  );
}
