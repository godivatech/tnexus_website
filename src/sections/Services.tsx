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
    title: 'General Contracting',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    heading: 'Complete Project Management',
    description: 'We provide comprehensive site supervision and subcontractor coordination to ensure every project phase is handled with precision.',
    features: ['Subcontractor Coordination', 'Site Supervision', 'Project Management'],
  },
  {
    id: 2,
    title: 'Design-Build',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?w=800&q=80',
    heading: 'Streamlined Design & Construction',
    description: 'A unified approach where we handle both the design and construction phases for seamless project delivery.',
    features: ['Integrated Approach', 'Design Phase Management', 'Efficient Delivery'],
  },
  {
    id: 3,
    title: 'Commercial Renovation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    heading: 'Modernizing Existing Spaces',
    description: 'Updating and modernizing commercial environments to meet contemporary business needs and standards.',
    features: ['Office Remodeling', 'Retail Space Updates', 'Modern Infrastructure'],
  },
  {
    id: 4,
    title: 'Civil Engineering',
    image: 'https://images.unsplash.com/photo-1574123853831-d42135661605?w=800&q=80',
    heading: 'Large-Scale Infrastructure',
    description: 'Handling roads, boundary walls, drainage, and utility projects with expert engineering solutions.',
    features: ['Road Construction', 'Boundary Walls', 'Drainage Systems'],
  },
  {
    id: 5,
    title: 'Sustainability Consulting',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    heading: 'Eco-Friendly Building Practices',
    description: 'Implementing LEED standards and eco-friendly premium materials for sustainable architectural reality.',
    features: ['LEED Standards', 'Eco-friendly Materials', 'Sustainable Practices'],
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
