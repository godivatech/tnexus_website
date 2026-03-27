import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              ABOUT US
            </span>
            <h2 className="section-title mt-4 mb-6">
              We work for you <span className="text-orange-500">since 2020.</span><br />
              Leading Construction Projects in Tamil Nadu
            </h2>
            
            {/* Image */}
            <div className="relative mt-8">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction site overview"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 clip-diagonal"></div>
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
            <h3 className="text-2xl font-bold text-dark mb-4">
              Welcome to TNexus Constructions, a leading innovator with a rich history of excellence.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At the heart of Tamil Nadu's infrastructure development, TNexus Constructions stands as a multidimensional force of progress, building high-quality residential, commercial, and industrial spaces across the state.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With a passion for precision and a commitment to quality, we have been building dreams and driving progress for over 6 years. Our diverse team of experts brings together years of experience across multiple sectors.
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
