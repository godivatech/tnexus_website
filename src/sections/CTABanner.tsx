import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-0">
      <div className="bg-primary">
        <div className="container-tnexus">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 lg:py-20 flex flex-col justify-center"
            >
              <div className="text-primary-foreground">
                <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-2 block">
                  OUR PROJECTS
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  50+
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-md">
                  Success Projects
                </p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="py-16 lg:py-20 flex flex-col justify-center lg:items-end"
            >
              <p className="text-primary-foreground/90 mb-6 max-w-md lg:text-right">
                Over the past few years, we have built a reputation for delivering high-quality regional projects on time and within budget.
              </p>
              <a 
                href="/contact" 
                className="bg-background text-foreground px-8 py-4 font-medium inline-flex items-center gap-2 hover:bg-dark hover:text-white transition-all duration-300"
              >
                Consultation & Quote
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
