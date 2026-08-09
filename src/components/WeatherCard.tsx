import { useEffect, useState } from 'react';
import { MapPin, Wind, Droplets, Thermometer, RefreshCw } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import sesLogo from '@/assets/ses-logo.png';

const LAT = 25.1216;
const LON = 62.3254;
const API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia%2FKarachi&forecast_days=1`;

type WeatherData = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
};

const WEATHER_MAP: Record<number, { label: string; icon: string }> = {
  0: { label: 'Clear Sky', icon: 'sun' },
  1: { label: 'Mainly Clear', icon: 'sun' },
  2: { label: 'Partly Cloudy', icon: 'cloud-sun' },
  3: { label: 'Overcast', icon: 'cloud' },
  45: { label: 'Fog', icon: 'fog' },
  48: { label: 'Rime Fog', icon: 'fog' },
  51: { label: 'Light Drizzle', icon: 'drizzle' },
  53: { label: 'Drizzle', icon: 'drizzle' },
  55: { label: 'Heavy Drizzle', icon: 'drizzle' },
  61: { label: 'Light Rain', icon: 'rain' },
  63: { label: 'Rain', icon: 'rain' },
  65: { label: 'Heavy Rain', icon: 'rain' },
  71: { label: 'Light Snow', icon: 'snow' },
  73: { label: 'Snow', icon: 'snow' },
  75: { label: 'Heavy Snow', icon: 'snow' },
  80: { label: 'Rain Showers', icon: 'rain' },
  81: { label: 'Rain Showers', icon: 'rain' },
  82: { label: 'Violent Showers', icon: 'rain' },
  95: { label: 'Thunderstorm', icon: 'storm' },
  96: { label: 'Thunderstorm', icon: 'storm' },
  99: { label: 'Severe Storm', icon: 'storm' },
};

function WeatherGlyph({ type, className }: { type: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      {type === 'sun' && (
        <>
          <circle cx="32" cy="32" r="12" fill="currentColor" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="32" y1="10" x2="32" y2="4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${deg} 32 32)`}
            />
          ))}
        </>
      )}
      {type === 'cloud-sun' && (
        <>
          <circle cx="24" cy="22" r="8" fill="currentColor" opacity="0.8" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1="24" y1="6" x2="24" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${deg} 24 22)`} opacity="0.8" />
          ))}
          <path d="M22 44a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H22z" fill="currentColor" />
        </>
      )}
      {type === 'cloud' && (
        <path d="M20 48a12 12 0 0 1 0-24 14 14 0 0 1 27 5 10 10 0 0 1-4 19H20z" fill="currentColor" />
      )}
      {type === 'fog' && (
        <>
          <path d="M20 36a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H20z" fill="currentColor" opacity="0.7" />
          <line x1="12" y1="44" x2="52" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="16" y1="50" x2="48" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <line x1="10" y1="56" x2="44" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
        </>
      )}
      {type === 'drizzle' && (
        <>
          <path d="M20 36a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H20z" fill="currentColor" opacity="0.7" />
          <line x1="24" y1="42" x2="22" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="44" y1="42" x2="42" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {type === 'rain' && (
        <>
          <path d="M20 34a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H20z" fill="currentColor" opacity="0.7" />
          <line x1="22" y1="40" x2="19" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="40" x2="29" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="40" x2="39" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {type === 'snow' && (
        <>
          <path d="M20 34a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H20z" fill="currentColor" opacity="0.7" />
          <circle cx="24" cy="48" r="2.5" fill="currentColor" />
          <circle cx="34" cy="52" r="2.5" fill="currentColor" />
          <circle cx="44" cy="48" r="2.5" fill="currentColor" />
        </>
      )}
      {type === 'storm' && (
        <>
          <path d="M20 32a10 10 0 0 1 0-20 12 12 0 0 1 23 4 8 8 0 0 1-3 16H20z" fill="currentColor" opacity="0.6" />
          <path d="M30 38l-8 14h6l-4 10 12-16h-6l4-8h-4z" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

export default function WeatherCard() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error('Weather fetch failed');
      const json: WeatherData = await res.json();
      setData(json);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const code = data?.current.weather_code ?? 0;
  const weather = WEATHER_MAP[code] ?? WEATHER_MAP[0];
  const temp = data ? Math.round(data.current.temperature_2m) : null;
  const feels = data ? Math.round(data.current.apparent_temperature) : null;
  const humidity = data?.current.relative_humidity_2m ?? null;
  const wind = data ? Math.round(data.current.wind_speed_10m) : null;
  const maxTemp = data ? Math.round(data.daily.temperature_2m_max[0]) : null;
  const minTemp = data ? Math.round(data.daily.temperature_2m_min[0]) : null;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 p-6 shadow-2xl shadow-primary-900/30 ring-1 ring-white/10 transition-all duration-700 hover:shadow-accent-500/20 reveal ${
        visible ? 'is-visible' : ''
      }`}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent-400/20 blur-3xl transition-opacity duration-700 group-hover:bg-accent-400/30" />

      {/* header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={sesLogo} alt="Sadiq Engineering Services" className="h-10 w-10 rounded-lg object-contain" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-300">Gwadar Weather</p>
            <p className="flex items-center gap-1 text-[11px] text-white/50">
              <MapPin className="h-3 w-3" />
              Balochistan, PK
            </p>
          </div>
        </div>
        <button
          onClick={fetchWeather}
          disabled={loading}
          aria-label="Refresh weather"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 ring-1 ring-white/10 transition-all duration-300 hover:bg-accent-400 hover:text-primary-950 hover:ring-accent-400 disabled:opacity-40"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* main display */}
      <div className="relative mt-6 flex items-center gap-4">
        <div
          key={weather.icon}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-accent-300 ring-1 ring-white/10 transition-all duration-500"
        >
          {loading ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-white/20" />
          ) : (
            <WeatherGlyph type={weather.icon} className="h-10 w-10 animate-fade-in" />
          )}
        </div>
        <div>
          <div className="flex items-start gap-0.5">
            <span className="text-5xl font-bold text-white tabular-nums transition-all duration-500">
              {temp ?? '--'}
            </span>
            <span className="mt-1 text-xl font-semibold text-white/60">°C</span>
          </div>
          <p className="text-sm font-medium text-white/70 transition-all duration-500">
            {loading ? 'Loading…' : error ? 'Unavailable' : weather.label}
          </p>
        </div>
      </div>

      {/* details grid */}
      <div className="relative mt-6 grid grid-cols-3 gap-2">
        <Detail icon={Thermometer} label="Feels" value={feels !== null ? `${feels}°` : '--'} />
        <Detail icon={Droplets} label="Humidity" value={humidity !== null ? `${humidity}%` : '--'} />
        <Detail icon={Wind} label="Wind" value={wind !== null ? `${wind} km/h` : '--'} />
      </div>

      {/* min / max bar */}
      <div className="relative mt-5">
        <div className="flex items-center justify-between text-[11px] text-white/50">
          <span>L {minTemp ?? '--'}°</span>
          <span>H {maxTemp ?? '--'}°</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-accent-500 via-accent-300 to-accent-400 transition-all duration-1000 ease-out" style={{ width: visible ? '100%' : '0%' }} />
        </div>
      </div>

      {error && (
        <p className="relative mt-4 text-center text-xs text-white/40">
          Could not load weather. Tap refresh to try again.
        </p>
      )}
    </div>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wind;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/5 px-3 py-2.5 text-center ring-1 ring-white/5 transition-colors duration-300 hover:bg-white/10">
      <Icon className="mx-auto h-3.5 w-3.5 text-accent-400" />
      <p className="mt-1 text-sm font-semibold text-white tabular-nums">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-white/40">{label}</p>
    </div>
  );
}
