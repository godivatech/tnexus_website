import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Residential Construction',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
    heading: 'Custom-Built Modern Homes',
    description: 'Specializing in residential construction desde custom-built homes to building elevation with premium finishes.',
    features: ['Custom Home Design', 'Building Elevation', 'Structural Engineering'],
  },
  {
    id: 2,
    title: 'Commercial & Retail',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    heading: 'High-Performance Business Spaces',
    description: 'We build efficient office spaces, petrol pumps, and all types of retail shop infrastructures.',
    features: ['Office Infrastructure', 'Petrol Pump Projects', 'Retail Shop Design'],
  },
  {
    id: 3,
    title: 'Renovation & Modernizing',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
    heading: 'Updating Existing Structures',
    description: 'Comprehensive renovation and modernizing services for both residential and commercial buildings.',
    features: ['Heritage Restoration', 'Modern Infrastructure Updates', 'Space Optimization'],
  },
  {
    id: 4,
    title: 'Industrial Infrastructure',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
    heading: 'Specialized Industrial Facilities',
    description: 'Expertise in building specialized industrial facilities, warehouses, and logistics centers.',
    features: ['Warehouse Construction', 'Specialized Facilities', 'Heavy Infrastructure'],
  },
  {
    id: 5,
    title: 'Interior Work',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    heading: 'Comprehensive Interior Solutions',
    description: 'Providing all kinds of premium interior work from the foyer to the bedroom.',
    features: ['Foyer Design', 'Bedroom Interiors', 'Modular Kitchen Solutions'],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-background">
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
              SERVICES
            </span>
            <h2 className="section-title mt-4">
              Expert solutions for the<br />construction industry
            </h2>
          </motion.div>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="btn-outline mt-4 md:mt-0 inline-flex"
          >
            View All Solutions
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-1"
          >
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`service-tab w-full flex items-center justify-between ${activeService === index ? 'active' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <span>{service.title}</span>
                <ArrowRight size={16} className={`transition-transform ${activeService === index ? 'translate-x-1' : ''}`} />
              </button>
            ))}
          </motion.div>

          {/* Service Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative h-[350px] overflow-hidden"
              >
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {services[activeService].heading}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {services[activeService].description}
                </p>
                <ul className="space-y-3 mb-6">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check size={12} className="text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
