import { useEffect, useRef } from 'react';
import {
  BedDouble, UtensilsCrossed, Wifi, Car, MapPin, Users,
  Briefcase, Sparkles, HeartHandshake, BadgeCheck,
} from 'lucide-react';

const features = [
  { icon: BedDouble, title: 'Spacious Luxury Rooms', desc: 'Generously sized rooms with premium furnishings and comfortable beds.' },
  { icon: UtensilsCrossed, title: 'Complimentary Breakfast', desc: 'Start every morning right with our included breakfast service.' },
  { icon: Wifi, title: 'Free High-Speed WiFi', desc: 'Stay connected with reliable, fast internet throughout the hotel.' },
  { icon: Car, title: 'Free Parking', desc: 'Convenient, secure parking available at no extra charge.' },
  { icon: MapPin, title: 'Prime Location', desc: 'Steps from Gachibowli IT Hub, Financial District & HITEC City.' },
  { icon: Users, title: 'Family Friendly', desc: 'Warm, welcoming environment perfect for families of all sizes.' },
  { icon: Briefcase, title: 'Business Ready', desc: 'Work desks, fast WiFi, and proximity to tech corridors for professionals.' },
  { icon: Sparkles, title: 'Daily Housekeeping', desc: 'Immaculately maintained rooms with daily cleaning service.' },
  { icon: HeartHandshake, title: 'Professional Hospitality', desc: 'Warm, courteous staff dedicated to making your stay exceptional.' },
  { icon: BadgeCheck, title: 'Great Value', desc: 'Premium experience at honest prices, starting from just ₹1557/night.' },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,145,58,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle text-gold-400">Why Stay With Us</p>
          <h2 className="reveal font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Everything You Need for a
            <span className="block text-gradient-gold">Perfect Stay</span>
          </h2>
          <div className="reveal gold-divider mt-5 mb-6" />
          <p className="reveal text-white/60 font-sans max-w-xl mx-auto text-base">
            We go above and beyond to ensure every guest leaves feeling valued, rested, and ready for what's next.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="reveal bg-glass rounded-sm p-6 text-center group hover:bg-gold-500/10 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-500/15 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-300">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-white text-sm font-semibold mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-sans">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-14">
          <a
            href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-10 py-4"
          >
            Reserve Your Room Today
          </a>
        </div>
      </div>
    </section>
  );
}
