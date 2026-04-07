import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-tnexus">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              ABOUT US
            </span>
            <h2 className="section-title mt-4 mb-4 whitespace-nowrap">
              We work for you <span className="text-primary">since 2020</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
              Leading Construction Projects in Tamil Nadu
            </h3>
            
            {/* Image */}
            <div className="relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction site overview"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary clip-diagonal"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Welcome to Nexus Construction, a premier full-service construction firm dedicated to excellence.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded on the principles of integrity and innovation, Nexus Construction delivers high-quality residential, commercial, industrial, and interior renovation projects with engineering precision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "The Nexus Point"—where client vision meets architectural excellence. From high-rise elevation to specialized petrol pump infrastructure, we handle projects from breaking ground to the final handover.
            </p>
            
            <a href="#services" className="btn-primary inline-flex">
              Discover More
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
