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
    title: 'General Management',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    heading: 'Professional Project Oversight',
    description: 'Expert management of all construction phases, ensuring seamless coordination between stakeholders and adherence to strict quality standards.',
    features: ['Project Scheduling', 'Stakeholder Management', 'Quality Control Oversight'],
  },
  {
    id: 2,
    title: 'Design Build',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?w=800&q=80',
    heading: 'Integrated Design & Construction',
    description: 'A unified approach that combines architectural vision with construction expertise for efficient project delivery.',
    features: ['BIM 3D Modeling', 'Unified workflow', 'Visualized 3D walkthrough'],
  },
  {
    id: 3,
    title: 'Residential Infrastructure',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    heading: 'Premium Residential Solutions',
    description: 'Specializing in high-end villas and residential layouts that prioritize luxury, comfort, and structural excellence.',
    features: ['Luxury Villas (fully furnished)', 'Structural Integrity Villas', 'Modernized Villas-cum-Commercial'],
  },
  {
    id: 4,
    title: 'Commercial Infrastructure',
    image: '/images/projects/madurai/1 building renevation.png',
    heading: 'Modern Business Spaces',
    description: 'Designing and building state-of-the-art commercial environments that support growth and futuristic operational needs.',
    features: ['Office Infrastructure', 'Modernized Showroom', 'Futuristic Parking lots'],
  },
  {
    id: 5,
    title: 'Civil Infrastructure',
    image: '/images/projects/madurai/1 paver block.png',
    heading: 'Large-Scale Engineering',
    description: 'Providing robust civil engineering solutions for essential urban development and large-scale utility networks.',
    features: ['Infrastructure Development', 'Residential Layout Development', 'Large Scale of utility Networks'],
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
                <img loading="lazy" decoding="async"
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
