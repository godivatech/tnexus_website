import { useCallback, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  media: string[];
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Commercial Construction',
    title: 'Commercial Infrastructure',
    media: [
      '/images/projects/Commercial infrastructure/WhatsApp Image 2026-05-15 at 8.55.28 PM.jpeg',
      '/images/projects/Commercial infrastructure/WhatsApp Image 2026-05-15 at 8.55.31 PM.jpeg',
      '/images/projects/Commercial infrastructure/1778858668075.mp4',
    ]
  },
  {
    id: 2,
    category: 'Showrooms & Shops',
    title: 'Madurai Apple Showroom',
    media: [
      '/images/projects/Madurai Apple showroom/WhatsApp Image 2026-05-15 at 10.17.49 PM.jpeg',
      '/images/projects/Madurai Apple showroom/WhatsApp Image 2026-05-15 at 10.17.49 PM (1).jpeg',
      '/images/projects/Madurai Apple showroom/WhatsApp Image 2026-05-15 at 10.17.50 PM.jpeg',
    ]
  },
  {
    id: 3,
    category: 'Showrooms & Shops',
    title: 'KK Nagar Green Fresh Shop',
    media: [
      '/images/projects/Madurai kk nagar green fresh shop/IMG_5417.MOV',
      '/images/projects/Madurai kk nagar green fresh shop/IMG_5140.MOV',
    ]
  },
  {
    id: 4,
    category: 'Renovation',
    title: 'Commercial & Residential Renovation',
    media: [
      '/images/projects/renovation/WhatsApp Image 2026-05-15 at 10.18.59 PM.jpeg',
      '/images/projects/renovation/WhatsApp Image 2026-05-15 at 10.19.28 PM.jpeg',
      '/images/projects/renovation/WhatsApp Image 2026-05-15 at 10.19.29 PM.jpeg',
      '/images/projects/renovation/WhatsApp Image 2026-05-15 at 10.19.29 PM (1).jpeg',
      '/images/projects/renovation/WhatsApp Image 2026-05-15 at 10.19.29 PM (2).jpeg',
    ]
  },
  {
    id: 5,
    category: 'Residential Construction',
    title: 'Luxury Residential Construction',
    media: [
      '/images/projects/residential construction/WhatsApp Image 2026-05-15 at 8.39.02 PM.jpeg',
      '/images/projects/residential construction/WhatsApp Image 2026-05-15 at 8.41.50 PM.jpeg',
      '/images/projects/residential construction/WhatsApp Image 2026-05-15 at 8.48.47 PM.jpeg',
      '/images/projects/residential construction/WhatsApp Image 2026-05-15 at 8.48.48 PM.jpeg',
    ]
  },
  {
    id: 6,
    category: 'Extension of Vacant Land',
    title: 'Extension: Vacant Land into Commercial',
    media: [
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.19 PM.jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.20 PM.jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.21 PM.jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.22 PM.jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.22 PM (1).jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.27 PM.jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.27 PM (1).jpeg',
      '/images/projects/vacant and extension/WhatsApp Image 2026-05-15 at 10.51.28 PM.jpeg',
    ]
  },
  {
    id: 7,
    category: 'Commercial Construction',
    title: 'TVS School Golf Stadium',
    media: [
      '/images/projects/virapanjan tvs school golf stadium/IMG_0848.MOV',
      '/images/projects/virapanjan tvs school golf stadium/IMG_0871.MOV',
      '/images/projects/virapanjan tvs school golf stadium/IMG_0931.MOV',
    ]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered && project.media.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.media.length);
      }, 1500);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setCurrentIndex(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, project.media.length]);

  const isVideo = (path: string) => {
    return path.endsWith('.mp4') || path.endsWith('.MOV') || path.endsWith('.mov') || path.endsWith('.webm');
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card h-[450px] relative overflow-hidden group cursor-pointer rounded-2xl shadow-lg"
    >
      {/* Media Slides */}
      <div className="w-full h-full relative">
        {project.media.map((item, idx) => {
          const active = idx === currentIndex;
          const isVid = isVideo(item);

          return (
            <div
              key={item}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {isVid ? (
                <video
                  src={item}
                  muted
                  loop
                  playsInline
                  autoPlay={active}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  loading="lazy"
                  decoding="async"
                  src={item}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Slide Indicators / Navigation dots */}
      {isHovered && project.media.length > 1 && (
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-20 px-4">
          {project.media.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary' : 'bg-white/40'
                }`}
            />
          ))}
        </div>
      )}

      <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Info Container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3 shadow-md">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white leading-snug drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-background">
      <div className="container-tnexus">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              RECENT WORK
            </span>
            <h2 className="section-title mt-4">
              Explore Our Recent Projects
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 mt-4 md:mt-0"
          >
            <button
              onClick={scrollPrev}
              className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-4 sm:px-6 lg:px-8 xl:px-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
