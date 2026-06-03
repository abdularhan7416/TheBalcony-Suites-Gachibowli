import { MapPin, Phone, MessageSquare, Instagram, Star } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <p className="font-serif text-gold-400 text-xl font-bold">The Balcony Suites</p>
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-0.5">Gachibowli, Hyderabad</p>
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            Comfort, Luxury &amp; Value in the Heart of Gachibowli. Your premium stay, starting from just ₹1557/night.
          </p>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-gold-400 text-gold-400" />
            ))}
            <span className="text-white/50 text-xs ml-2">4.5 on Google</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5 text-base">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-white/55 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5 text-base">Contact</h4>
          <div className="space-y-4">
            <a href="tel:+919063568889" className="flex items-center gap-3 text-white/55 hover:text-gold-400 text-sm transition-colors">
              <Phone size={15} className="shrink-0" />
              +91 90635 68889
            </a>
            <a
              href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/55 hover:text-emerald-400 text-sm transition-colors"
            >
              <MessageSquare size={15} className="shrink-0" />
              WhatsApp Booking
            </a>
            <a
              href="https://maps.app.goo.gl/QhpAT73reNVXMtCR9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/55 hover:text-gold-400 text-sm transition-colors"
            >
              <MapPin size={15} className="shrink-0 mt-0.5" />
              3rd Floor, Anika Reddy Heights, Gachibowli, Hyderabad 500032
            </a>
          </div>
        </div>

        {/* Booking CTA */}
        <div>
          <h4 className="font-serif text-white font-semibold mb-5 text-base">Book Direct</h4>
          <p className="text-white/50 text-sm mb-5 leading-relaxed">
            Get the best rates by booking directly. Includes complimentary breakfast, WiFi & parking.
          </p>
          <div className="space-y-3">
            <a
              href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center text-xs py-3"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919063568889"
              className="btn-outline-gold w-full justify-center text-xs py-3"
            >
              Call to Book
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} The Balcony Suites | Gachibowli, Hyderabad. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Best Hotel in Gachibowli &middot; Hotel Near HITEC City &middot; Affordable Luxury Hotel Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
