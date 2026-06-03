import { ChevronDown, Wifi, Car, UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToRooms = () => {
    document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gchibowli_4.png"
          alt="The Balcony Suites Gachibowli - Rooftop Terrace"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <p className="section-subtitle text-gold-400 mb-6 animate-fade-in">
            Gachibowli, Hyderabad
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Experience Comfort
            <span className="block text-gradient-gold">&amp; Luxury</span>
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl mt-1 font-normal italic">
              in Gachibowli
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up">
            Spacious rooms, complimentary breakfast, free WiFi, free parking,
            exceptional hospitality, and unbeatable value starting from just{' '}
            <span className="text-gold-300 font-semibold">&#8377;1557</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up">
            <a
              href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-10 py-4 rounded-sm shadow-gold"
            >
              Book Now
              <ArrowRight size={18} />
            </a>
            <button
              onClick={scrollToRooms}
              className="btn-outline-white text-base px-10 py-4 rounded-sm"
            >
              View Rooms
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 animate-fade-in">
            {[
              { icon: <span className="text-gold-300 font-bold font-serif">&#8377;</span>, label: 'From ₹1557/night' },
              { icon: <UtensilsCrossed size={16} className="text-gold-300" />, label: 'Free Breakfast' },
              { icon: <Wifi size={16} className="text-gold-300" />, label: 'Free WiFi' },
              { icon: <Car size={16} className="text-gold-300" />, label: 'Free Parking' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="bg-glass flex items-center gap-2 px-4 py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium"
              >
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-8 animate-float">
        <button
          onClick={scrollToContact}
          className="text-white/50 hover:text-gold-400 transition-colors flex flex-col items-center gap-1"
          aria-label="Scroll down"
        >
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase">Explore</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
