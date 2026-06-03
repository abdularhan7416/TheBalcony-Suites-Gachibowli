import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rohit Srivastava',
    initial: 'R',
    rating: 5,
    text: 'I stayed for a week and really enjoyed my stay. Spacious rooms with excellent facilities and professional service. Would definitely recommend to anyone visiting Gachibowli.',
    date: 'Recent Guest',
  },
  {
    name: 'Purva Patki',
    initial: 'P',
    rating: 5,
    text: 'Very satisfied with my stay. Staff were warm, polite, cooperative, and management was extremely supportive. One of the best hotels I have stayed at in Hyderabad.',
    date: 'Recent Guest',
  },
  {
    name: 'Navin Kashyap',
    initial: 'N',
    rating: 5,
    text: 'Excellent location, spacious rooms, comfortable beds, and great breakfast. Highly recommended for business travelers and families alike.',
    date: 'Recent Guest',
  },
  {
    name: 'Santosh Rana',
    initial: 'S',
    rating: 5,
    text: 'Exceeded expectations. Courteous staff, spotless rooms, excellent service, and very good breakfast. The rooftop terrace is a fantastic bonus.',
    date: 'Recent Guest',
  },
  {
    name: 'Vellampally Srujana',
    initial: 'V',
    rating: 5,
    text: 'Luxurious stay at an affordable price. Clean rooms, amazing service, and delicious complimentary breakfast every morning. Will definitely come back.',
    date: 'Recent Guest',
  },
  {
    name: 'Sai Krishnaa',
    initial: 'S',
    rating: 5,
    text: 'Budget friendly hotel with good breakfast and helpful staff. Great value for money, especially given the prime Gachibowli location.',
    date: 'Recent Guest',
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const perPage = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1;

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section id="reviews" ref={ref} className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal section-subtitle">Guest Reviews</p>
          <h2 className="reveal section-title">
            What Our Guests
            <span className="block text-gradient-gold">Are Saying</span>
          </h2>
          <div className="reveal gold-divider mt-5 mb-5" />
          <div className="reveal flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
            ))}
            <span className="text-navy-600 text-sm ml-2 font-medium">4.5/5 on Google Reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {visible.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="reveal card-premium p-7 relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 text-gold-200 fill-gold-100"
              />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              {/* Text */}
              <p className="text-navy-700 text-sm leading-relaxed mb-6 font-sans">
                "{review.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-navy-900 font-bold text-sm shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{review.name}</p>
                  <p className="text-navy-400 text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="reveal flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:border-gold-400 hover:text-gold-600 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-gold-500 w-6' : 'bg-navy-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-600 hover:border-gold-400 hover:text-gold-600 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
