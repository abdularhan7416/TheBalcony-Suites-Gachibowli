import { useEffect, useRef } from 'react';
import { MapPin, Navigation, Building2, ShoppingBag, Coffee, Train } from 'lucide-react';

const nearby = [
  { icon: Building2, label: 'Gachibowli IT Hub', distance: '2 min drive', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Building2, label: 'Financial District', distance: '5 min drive', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { icon: Building2, label: 'HITEC City', distance: '10 min drive', color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: Train, label: 'Airport Bus Stop', distance: 'Walking distance', color: 'bg-sky-50 text-sky-600 border-sky-100' },
  { icon: ShoppingBag, label: 'Shopping Areas', distance: '5 min drive', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { icon: Coffee, label: 'Restaurants & Cafes', distance: 'Nearby', color: 'bg-orange-50 text-orange-600 border-orange-100' },
];

export default function Location() {
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
    <section id="location" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle">Location</p>
          <h2 className="reveal section-title">
            Perfectly Located in the
            <span className="block text-gradient-gold">Heart of Gachibowli</span>
          </h2>
          <div className="reveal gold-divider mt-5 mb-6" />
          <p className="reveal text-navy-600 font-sans max-w-xl mx-auto text-base">
            A peaceful setting with easy access to Hyderabad's most important tech, business, and leisure destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Map Embed */}
          <div className="reveal lg:col-span-3 rounded-sm overflow-hidden shadow-card-hover">
            <iframe
              title="The Balcony Suites Gachibowli Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4946944267226!2d78.34383!3d17.44196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d3753%3A0x7cb7e0b6b2a80e5e!2sThe%20Balcony%20Suites%20Hotels%20%26%20Home%20Stays!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Panel */}
          <div className="reveal lg:col-span-2">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-navy-50 rounded-sm border border-navy-100 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-navy-900" />
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Our Address</p>
                <p className="text-navy-600 text-sm leading-relaxed">
                  3rd Floor, Anika Reddy Heights,<br />
                  Survey No. 90/2, GPRA Road,<br />
                  Greenland Colony, Madhava Reddy Colony,<br />
                  Gachibowli, Serilingampalle (M),<br />
                  Hyderabad, Telangana 500032
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.app.goo.gl/QhpAT73reNVXMtCR9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center mb-7 text-sm py-3.5"
            >
              <Navigation size={16} />
              Get Directions
            </a>

            {/* Nearby Highlights */}
            <p className="font-serif text-navy-900 font-semibold text-base mb-4">Nearby Highlights</p>
            <div className="space-y-3">
              {nearby.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between p-3 rounded-sm border ${item.color} transition-all duration-200`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={15} />
                      <span className="text-sm font-medium text-navy-700">{item.label}</span>
                    </div>
                    <span className="text-xs text-navy-500 font-medium">{item.distance}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
