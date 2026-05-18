import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}
const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero-section/1_windows_view.png',
    title: 'Building Excellence across Tamil Nadu',
    subtitle: 'Nexus Construction delivers high-quality residential, commercial, and industrial infrastructure with professional precision.',
  },
  {
    id: 2,
    image: '/images/hero-section/2_windows_view.png',
    title: 'Turning Vision into Structural Reality',
    subtitle: 'Where architectural excellence meets structural integrity. Delivering projects on time, within budget, and with total honesty.',
  },
  {
    id: 3,
    image: '/images/hero-section/3_windows_view.png',
    title: 'Modern Infrastructure Redefined',
    subtitle: 'Providing end-to-end construction solutions since 2020. We bridge the gap between design and reality with superior craftsmanship.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <section className="relative w-full aspect-[16/9] min-h-[500px] max-h-[85vh] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>



      {/* Content */}
      <div className="relative z-10 h-full container-tnexus flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg text-white/80 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href="#about" className="btn-accent">
                  Explore More
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
