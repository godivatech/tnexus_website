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
    title: 'Residential & Commercial',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    heading: 'Modern residential and commercial construction',
    description: "Specializing in premium villas, apartments, and modern commercial spaces, TNexus Constructions brings your vision to life with uncompromising quality.",
    features: ['Premium Villas', 'Modern Apartments', 'Commercial Spaces'],
  },
  {
    id: 2,
    title: 'Warehouse Construction',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    heading: 'Efficient storage solutions for local businesses',
    description: "TNexus Constructions provides robust engineering solutions tailored for modern warehouse developments and storage facilities.",
    features: ['Warehouse Design', 'Heavy Duty Flooring', 'Space Optimization'],
  },
  {
    id: 3,
    title: 'Civil & Foundations',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    heading: 'Strong foundations for reliable structures',
    description: "We design and build modern civil foundations that meet the highest regulatory standards and ensure long-term structural integrity.",
    features: ['Foundation Layout', 'Civil Maintenance', 'Site Development'],
  },
  {
    id: 4,
    title: 'Residential Villas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    heading: 'Designing luxury homes for comfortable living',
    description: "We build custom villas and residential complexes that combine modern aesthetics with durability and comfort.",
    features: ['Custom Villa Design', 'Luxury Interior Finish', 'Premium Landscaping'],
  },
  {
    id: 5,
    title: 'Commercial Spaces',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    heading: 'Functional commercial architecture for businesses',
    description: "Our commercial construction services focus on creating efficient, modern office and retail environments.",
    features: ['Office Building Construction', 'Retail Interior Fit-out', 'Structural Reliability'],
  },
  {
    id: 6,
    title: 'Renovation Works',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?w=800&q=80',
    heading: 'Transforming existing spaces into modern environments',
    description: "From home makeovers to office remodeling, we provide high-quality renovation services that breathe new life into your property.",
    features: ['Structural Strengthening', 'Modern Upgrades', 'Quality Finishing'],
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
