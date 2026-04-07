import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}
const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80',
    title: 'Building the Future',
    subtitle: 'Nexus Construction is a premier full-service construction firm dedicated to delivering high-quality residential, commercial, industrial, and interior infrastructure projects.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80',
    title: 'Turning Vision into Reality',
    subtitle: 'Where client vision meets architectural excellence. Delivering on time, within budget, and with total honesty.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
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

      {/* Side Info Bar */}
      <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-center gap-4 py-8 z-20"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateY(50%)' }}>
        <span className="text-white/70 text-sm tracking-wider">Call: 6369361053</span>
        <span className="text-white/70 text-sm tracking-wider">Email: thenexusconstruction@gmail.com</span>
      </div>

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
                <button
                  className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  <Play size={20} fill="currentColor" />
                </button>
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

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-32 h-32 z-20">
        <div className="w-full h-full bg-primary clip-diagonal-reverse"></div>
      </div>
    </section>
  );
};

export default Hero;
