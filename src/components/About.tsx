import { useEffect, useRef } from 'react';
import { MapPin, Star } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative">
            <div className="relative rounded-sm overflow-hidden shadow-card-hover">
              <img
                src="/images/gchibowli_3_home_.png"
                alt="The Balcony Suites - Anika Reddy Heights Gachibowli"
                className="w-full h-[480px] object-cover object-center"
              />
              {/* Rating Badge */}
              <div className="absolute bottom-6 left-6 bg-glass-dark rounded-sm px-5 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <div className="border-l border-white/20 pl-3">
                  <p className="text-white text-sm font-semibold">4.5 Rating</p>
                  <p className="text-white/60 text-xs">100+ Google Reviews</p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -top-6 -right-6 hidden lg:block bg-navy-900 text-white px-6 py-5 rounded-sm shadow-xl">
              <p className="text-gold-400 font-serif text-2xl font-bold">3rd</p>
              <p className="text-white/70 text-xs uppercase tracking-widest mt-0.5">Floor</p>
              <p className="text-white/70 text-xs uppercase tracking-widest">Anika Reddy Heights</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="reveal section-subtitle">About The Hotel</p>
            <h2 className="reveal section-title mb-5">
              Your Home Away
              <span className="block text-gradient-gold">From Home</span>
            </h2>
            <div className="reveal gold-divider mx-0 mb-8" />

            <div className="reveal space-y-5 text-navy-700 font-sans text-base leading-relaxed">
              <p>
                <strong className="text-navy-900">The Balcony Suites</strong> is a modern hotel in Gachibowli
                designed for business travelers, families, and tourists seeking comfort, convenience, and value.
              </p>
              <p>
                Located in a peaceful area while remaining close to major IT hubs, the Financial District, and
                HITEC City, the hotel offers spacious rooms, professional service, and a genuinely relaxing stay experience.
              </p>
              <p>
                Every room features thoughtful amenities — from air conditioning and smart TVs to complimentary
                breakfast and high-speed WiFi — ensuring your stay feels premium without the premium price tag.
              </p>
            </div>

            {/* Address */}
            <div className="reveal mt-8 flex items-start gap-3 p-4 bg-navy-50 rounded-sm border-l-4 border-gold-500">
              <MapPin size={20} className="text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-navy-900 font-semibold text-sm mb-0.5">Our Location</p>
                <p className="text-navy-600 text-sm">
                  3rd Floor, Anika Reddy Heights, Survey No. 90/2, GPRA Road,
                  Greenland Colony, Madhava Reddy Colony, Gachibowli,
                  Serilingampalle (M), Hyderabad, Telangana 500032
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="reveal mt-8 grid grid-cols-3 gap-6">
              {[
                { num: '100+', label: 'Happy Guests' },
                { num: '4.5★', label: 'Google Rating' },
                { num: '24/7', label: 'Front Desk' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-gradient-gold">{stat.num}</p>
                  <p className="text-navy-500 text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
