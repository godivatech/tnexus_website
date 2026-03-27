import { useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
}
const projects: Project[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    category: 'Commercial',
    title: 'Modern Office Hub',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555633514-abcee6ad93e1?w=800&q=80',
    category: 'Commercial',
    title: 'Retail & Shopping Complex',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    category: 'Residential',
    title: 'Luxury Apartment Complex',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    category: 'Residential',
    title: 'Premium Independent Villa',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586528116311-ad86d5259952?w=800&q=80',
    category: 'Industrial',
    title: 'Logistics Hub & Warehouse',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1523050353051-93e506689d44?w=800&q=80',
    category: 'Institutional',
    title: 'Educational Facility',
  },
];

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
    <section className="py-20 bg-white">
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
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
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
              className="w-12 h-12 border border-gray-300 flex items-center justify-center text-dark hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
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
              <div className="project-card h-[450px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="project-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
