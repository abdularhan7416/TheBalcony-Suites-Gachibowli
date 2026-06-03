import { useEffect, useRef } from 'react';
import { Wifi, Tv, Wind, Coffee, BedDouble, Sparkles, ArrowRight } from 'lucide-react';

const roomAmenities = [
  { icon: BedDouble, label: 'Comfortable Beds' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Coffee, label: 'Tea & Coffee' },
  { icon: Sparkles, label: 'Daily Housekeeping' },
];

const rooms = [
  {
    image: '/images/gachibowli_hotel1.png',
    name: 'Deluxe Room',
    type: 'Standard Suite',
    desc: 'A beautifully appointed room with a plush double bed, sleek wood furnishings, smart TV, AC, and a modern en-suite bathroom.',
    price: '₹1557',
    size: 'Ideal for Couples & Solo',
  },
  {
    image: '/images/gachibowli_hotel_2.png',
    name: 'Family Suite',
    type: 'Triple Suite',
    desc: 'Spacious room with a king bed plus twin bed, full working area, Smart TV, AC, and ample wardrobe space — perfect for families.',
    price: '₹2200',
    size: 'Ideal for Families & Groups',
  },
  {
    image: '/images/gchibowli_4.png',
    name: 'Terrace Room',
    type: 'Premium Suite',
    desc: 'Experience the magic of our signature rooftop terrace with breathtaking city views and elegant pergola lighting.',
    price: 'On Request',
    size: 'Ideal for Special Occasions',
  },
];

export default function Rooms() {
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
    <section id="rooms" ref={ref} className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle">Our Rooms</p>
          <h2 className="reveal section-title">
            Thoughtfully Designed
            <span className="block text-gradient-gold">Spaces to Relax</span>
          </h2>
          <div className="reveal gold-divider mt-5" />
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className="reveal card-premium overflow-hidden group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={`${room.name} - The Balcony Suites Gachibowli`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-gold-gradient text-navy-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {room.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-glass-dark text-white text-sm font-bold px-3 py-1 rounded-sm">
                  {room.price}
                  {room.price !== 'On Request' && <span className="text-xs font-normal text-white/70">/night</span>}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-navy-900 text-xl font-bold mb-1">{room.name}</h3>
                <p className="text-gold-600 text-xs font-medium uppercase tracking-widest mb-3">{room.size}</p>
                <p className="text-navy-600 text-sm leading-relaxed mb-5">{room.desc}</p>

                {/* Amenities Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {roomAmenities.map((am) => {
                    const Icon = am.icon;
                    return (
                      <span key={am.label} className="flex items-center gap-1 bg-navy-50 text-navy-600 text-xs px-2.5 py-1 rounded-full border border-navy-100">
                        <Icon size={11} />
                        {am.label}
                      </span>
                    );
                  })}
                </div>

                <a
                  href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold-600 hover:text-gold-700 text-sm font-semibold transition-colors group"
                >
                  Book This Room
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="reveal text-center text-navy-500 text-sm mt-10">
          All rooms include complimentary breakfast, free parking, and 24/7 front desk support.
          <a
            href="tel:+919063568889"
            className="text-gold-600 font-semibold ml-1 hover:underline"
          >
            Call us for custom rates.
          </a>
        </p>
      </div>
    </section>
  );
}
