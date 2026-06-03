import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/gchibowli_4.png', alt: 'The Balcony Suites - Rooftop Terrace at Night' },
  { src: '/images/gachibowli_hotel_2.png', alt: 'The Balcony Suites - Family Suite' },
  { src: '/images/gachibowli_hotel1.png', alt: 'The Balcony Suites - Deluxe Room' },
  { src: '/images/gchibowli_3_home_.png', alt: 'The Balcony Suites - Hotel Building Exterior' },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox((l) => (l! > 0 ? l! - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setLightbox((l) => (l! < images.length - 1 ? l! + 1 : 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle text-gold-400">Photo Gallery</p>
          <h2 className="reveal font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            See The Balcony Suites
            <span className="block text-gradient-gold">In All Its Glory</span>
          </h2>
          <div className="reveal gold-divider mt-5" />
        </div>

        {/* Masonry-style Grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large image */}
          <div
            className="col-span-2 row-span-2 relative overflow-hidden rounded-sm cursor-pointer group"
            style={{ aspectRatio: '1 / 1' }}
            onClick={() => setLightbox(0)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/25 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-glass px-4 py-2 rounded-sm">
                View Photo
              </span>
            </div>
          </div>

          {/* Smaller images */}
          {images.slice(1).map((img, i) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-sm cursor-pointer group"
              style={{ aspectRatio: '1 / 1' }}
              onClick={() => setLightbox(i + 1)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-glass px-3 py-1.5 rounded-sm">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-glass-dark p-2 rounded-full"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-glass-dark p-2.5 rounded-full"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! > 0 ? l! - 1 : images.length - 1)); }}
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-glass-dark p-2.5 rounded-full"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! < images.length - 1 ? l! + 1 : 0)); }}
          >
            <ChevronRight size={22} />
          </button>
          <p className="absolute bottom-5 text-white/50 text-sm">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
