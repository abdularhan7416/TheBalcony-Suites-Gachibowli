import { useState, useEffect } from 'react';
import { Phone, MessageSquare, X, ChevronUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Show WhatsApp tooltip after 3s
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="relative bg-white shadow-card-hover rounded-sm px-4 py-3 max-w-[200px] animate-fade-in-up">
            <button
              className="absolute -top-2 -right-2 bg-navy-900 text-white rounded-full p-0.5"
              onClick={() => setShowTooltip(false)}
            >
              <X size={10} />
            </button>
            <p className="text-navy-800 text-xs font-medium">Book via WhatsApp</p>
            <p className="text-navy-500 text-xs">Instant response guaranteed</p>
            <div className="absolute bottom-0 right-5 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
          </div>
        )}

        {/* Call Button */}
        <a
          href="tel:+919063568889"
          className="w-12 h-12 rounded-full bg-navy-800 hover:bg-navy-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Call The Balcony Suites"
        >
          <Phone size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe59] text-white flex items-center justify-center shadow-lg whatsapp-pulse transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp Booking - The Balcony Suites"
        >
          <MessageSquare size={24} />
        </a>
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-900 flex items-center justify-center shadow-gold transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </>
  );
}
