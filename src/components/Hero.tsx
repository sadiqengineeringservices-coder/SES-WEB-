import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5846282/pexels-photo-5846282.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Welder at work in a workshop with sparks flying"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/60" />
      </div>

      {/* Spark accents */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-1/4 right-1/4 h-1.5 w-1.5 rounded-full bg-accent-400 animate-spark" />
        <span className="absolute top-1/3 right-1/3 h-1 w-1 rounded-full bg-accent-300 animate-spark [animation-delay:0.6s]" />
        <span className="absolute bottom-1/3 right-1/4 h-2 w-2 rounded-full bg-accent-500 animate-spark [animation-delay:1.2s]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 backdrop-blur-sm animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-200">
              Steel Fabrication & Engineering
            </span>
          </div>

          <h1
            className="mt-6 font-bold text-white tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fade-up [animation-delay:0.1s]"
          >
            Sadiq Engineering
            <span className="block bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p
            className="mt-6 text-2xl sm:text-3xl font-medium text-white/90 animate-fade-up [animation-delay:0.2s]"
          >
            Strength In Every Weld
          </p>

          <p
            className="mt-5 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed animate-fade-up [animation-delay:0.3s]"
          >
            Custom-designed, robust steel fabrication across Balochistan — engineered for
            premium quality and delivered on time, every time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:0.4s]">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary-900/50 hover:bg-primary-500 hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Our Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent-400 px-7 py-3.5 text-sm font-semibold text-accent-200 hover:bg-accent-400 hover:text-primary-950 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1">
          <span className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
