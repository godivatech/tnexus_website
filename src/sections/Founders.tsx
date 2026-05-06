import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

interface Founder {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
  };
}

const founders: Founder[] = [
  {
    id: 1,
    name: 'Balaji Palanivel',
    role: 'Founder & Managing Director',
    bio: `With 7+ years of experience in civil engineering, Balaji Palanivel has a proven track record in delivering residential and large-scale commercial projects.

Key Expertise:
• Commercial: Marriage halls, Petrol Bunks, and showrooms.
• Residential: Premium apartments and individual homes.
• Infrastructure: Sporting arenas and stadium projects.

He is dedicated to delivering innovative, high-integrity structural solutions with professional precision.`,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    socials: { facebook: '#', instagram: '#' },
  },
  {
    id: 2,
    name: 'Siva Prakash',
    role: 'Co-Founder & Director',
    bio: `With 7+ years in construction, Siva specializes in delivering high-precision residential and specialized industrial projects.

Expertise:
• Showrooms & Petrol stations
• Luxury apartments & villas
• Sporting facilities & stadiums`,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    socials: { facebook: '#', instagram: '#' },
  },
];

const Founders = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-tnexus relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Visionaries Behind <br />
              <span className="text-gradient">Nexus Construction</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
              Our leadership team brings together decades of expertise to redefine the construction landscape in Tamil Nadu through integrity, innovation, and excellence.
            </p>
          </motion.div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Image Wrapper */}
                <div className="relative w-full md:w-[280px] h-[380px] overflow-hidden rounded-2xl flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-white/10 m-3 rounded-xl pointer-events-none z-20"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-full pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-accent text-sm font-medium uppercase tracking-wider mb-6">
                    {founder.role}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow whitespace-pre-line">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-5">
                    <a href={founder.socials.facebook} className="text-white/40 hover:text-white transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href={founder.socials.instagram} className="text-white/40 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
