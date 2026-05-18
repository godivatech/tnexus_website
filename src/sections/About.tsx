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
              Delivering Quality <span className="text-primary">since 2020</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
              Your Trusted Partner for Quality Construction
            </h3>

            {/* Image */}
            <div className="relative mt-8">
              <img loading="lazy" decoding="async"
                src="/images/about/2.png"
                alt="Nexus Construction Team on Site"
                className="w-full h-[400px] object-cover rounded-sm shadow-xl"
              />
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
              Founded on the principles of integrity and innovation, Nexus Construction delivers premium residential homes, state-of-the-art commercial hubs, modern showrooms, and retail shop fit-outs. We bring engineering precision and structural excellence to every workspace and living space we craft.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From luxury custom villas to vacant site developments and commercial extensions, we handle every detail from the ground up to the final keys handover. We specialize in transforming vacant land and properties into modern, income-generating commercial landmarks.
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