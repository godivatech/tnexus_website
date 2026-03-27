import { motion } from 'framer-motion';
import { Lightbulb, HardHat, Bot, Headphones } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Precision Engineering',
    description: 'Delivering high-quality structural designs and civil engineering for manufacturing facilities.',
  },
  {
    id: 2,
    icon: HardHat,
    title: 'Expert Execution',
    description: 'A skilled workforce of 30+ professionals ensuring projects meet the highest safety standards.',
  },
  {
    id: 3,
    icon: Bot,
    title: 'Modern Technology',
    description: 'Utilizing state-of-the-art machinery and construction tech for large-scale industrial projects.',
  },
  {
    id: 4,
    icon: Headphones,
    title: 'Reliable Support',
    description: 'Committed to completing infrastructure projects on schedule through effective project coordination.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-tnexus">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="feature-card h-full cursor-pointer">
                <div className="relative z-10">
                  <feature.icon className="feature-icon" size={48} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
