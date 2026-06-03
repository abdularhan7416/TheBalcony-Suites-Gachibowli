import { useEffect, useRef } from 'react';
import {
  UtensilsCrossed, Wifi, Car, Wind, ConciergeBell, Sparkles,
  Building, Users, Briefcase, Clock, Coffee, Tv, Shield, CheckCircle,
} from 'lucide-react';

const amenities = [
  { icon: UtensilsCrossed, label: 'Complimentary Breakfast', color: 'text-amber-500' },
  { icon: Wifi, label: 'Free High-Speed WiFi', color: 'text-blue-500' },
  { icon: Car, label: 'Free Parking', color: 'text-green-600' },
  { icon: Wind, label: 'Air Conditioning', color: 'text-cyan-500' },
  { icon: ConciergeBell, label: 'Room Service', color: 'text-orange-500' },
  { icon: Sparkles, label: 'Daily Housekeeping', color: 'text-pink-500' },
  { icon: Building, label: 'Elevator Access', color: 'text-slate-500' },
  { icon: Users, label: 'Family Friendly', color: 'text-rose-500' },
  { icon: Briefcase, label: 'Business Facilities', color: 'text-navy-500' },
  { icon: Clock, label: '24/7 Front Desk', color: 'text-gold-600' },
  { icon: Coffee, label: 'Tea & Coffee Maker', color: 'text-amber-700' },
  { icon: Tv, label: 'Smart TV', color: 'text-blue-600' },
  { icon: CheckCircle, label: 'Clean Hygienic Rooms', color: 'text-emerald-500' },
  { icon: Shield, label: 'Secure Premises', color: 'text-navy-600' },
];

export default function Amenities() {
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
    <section id="amenities" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle">Hotel Amenities</p>
          <h2 className="reveal section-title">
            Premium Facilities
            <span className="block text-gradient-gold">Included in Every Stay</span>
          </h2>
          <div className="reveal gold-divider mt-5 mb-6" />
          <p className="reveal text-navy-600 font-sans max-w-xl mx-auto text-base">
            We believe comfort is not a luxury — it's a standard. Every amenity you need is already included.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="reveal flex flex-col items-center text-center p-5 rounded-sm border border-navy-100 hover:border-gold-300 hover:shadow-gold transition-all duration-300 group cursor-default"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-11 h-11 rounded-full bg-navy-50 group-hover:bg-gold-50 flex items-center justify-center mb-3 transition-colors duration-300">
                  <Icon size={20} className={item.color} />
                </div>
                <p className="text-navy-700 text-xs font-medium leading-tight">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="reveal mt-14 bg-navy-gradient rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-white text-2xl md:text-3xl font-bold mb-2">
              All Amenities Included
            </h3>
            <p className="text-white/65 font-sans text-sm">
              No hidden charges. Breakfast, WiFi, and parking are complimentary for every guest.
            </p>
          </div>
          <a
            href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0 text-sm px-8 py-3.5"
          >
            Book a Room
          </a>
        </div>
      </div>
    </section>
  );
}
