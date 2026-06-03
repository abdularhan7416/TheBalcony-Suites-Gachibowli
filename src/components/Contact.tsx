import { useEffect, useRef, useState, FormEvent } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', checkin: '', checkout: '', guests: '1', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello, I would like to make a booking enquiry at The Balcony Suites Gachibowli.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919063568889?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal section-subtitle">Get In Touch</p>
          <h2 className="reveal section-title">
            Book Your Stay or
            <span className="block text-gradient-gold">Send an Enquiry</span>
          </h2>
          <div className="reveal gold-divider mt-5" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="reveal lg:col-span-2 space-y-6">
            {/* Quick Contacts */}
            <div className="bg-white rounded-sm shadow-card p-7">
              <h3 className="font-serif text-navy-900 text-xl font-bold mb-5">Contact Us Directly</h3>

              <a
                href="tel:+919063568889"
                className="flex items-center gap-4 p-4 rounded-sm border border-navy-100 hover:border-gold-300 hover:shadow-gold transition-all duration-200 mb-3 group"
              >
                <div className="w-11 h-11 rounded-full bg-navy-100 group-hover:bg-gold-100 flex items-center justify-center transition-colors">
                  <Phone size={18} className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-wide font-medium">Click to Call</p>
                  <p className="text-navy-900 font-semibold">+91 90635 68889</p>
                </div>
              </a>

              <a
                href="https://wa.me/919063568889?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20The%20Balcony%20Suites%20Gachibowli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-sm border border-navy-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 mb-3 group"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MessageSquare size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-wide font-medium">WhatsApp Booking</p>
                  <p className="text-navy-900 font-semibold">+91 90635 68889</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/QhpAT73reNVXMtCR9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-sm border border-navy-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-wide font-medium mb-0.5">Our Address</p>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    3rd Floor, Anika Reddy Heights, Survey No. 90/2,
                    GPRA Road, Gachibowli, Hyderabad 500032
                  </p>
                </div>
              </a>
            </div>

            {/* Pricing Reminder */}
            <div className="bg-navy-gradient rounded-sm p-6 text-center">
              <p className="text-gold-400 font-serif text-3xl font-bold">&#8377;1557</p>
              <p className="text-white/70 text-sm mt-1">Starting price per night</p>
              <p className="text-white/50 text-xs mt-2">Includes breakfast, WiFi & parking</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="reveal lg:col-span-3">
            <div className="bg-white rounded-sm shadow-card p-8">
              <h3 className="font-serif text-navy-900 text-xl font-bold mb-7">Quick Booking Enquiry</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle size={48} className="text-emerald-500 mb-4" />
                  <h4 className="font-serif text-navy-900 text-xl font-bold mb-2">Enquiry Sent!</h4>
                  <p className="text-navy-600 text-sm">
                    Your booking enquiry has been sent via WhatsApp. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Check-in *</label>
                      <input
                        type="date"
                        required
                        value={form.checkin}
                        onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                        className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Check-out *</label>
                      <input
                        type="date"
                        required
                        value={form.checkout}
                        onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                        className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Guests</label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors bg-white"
                      >
                        {['1','2','3','4','5+'].map((g) => (
                          <option key={g} value={g}>{g} Guest{g !== '1' ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-navy-500 uppercase tracking-wide block mb-1.5">Message / Special Requests</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Any special requirements, room preferences, or questions..."
                      className="w-full border border-navy-200 rounded-sm px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-200 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full justify-center text-sm py-4"
                  >
                    <Send size={16} />
                    Send Enquiry via WhatsApp
                  </button>
                  <p className="text-navy-400 text-xs text-center">
                    Your enquiry will be sent directly to our team via WhatsApp for instant response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
