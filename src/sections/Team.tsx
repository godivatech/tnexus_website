import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    role: 'Sr. Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 2,
    name: 'Senthil Nathan',
    role: 'Foreman',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    id: 3,
    name: 'Karthikeyan S',
    role: 'Project Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' },
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
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
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              ENGINEER
            </span>
            <h2 className="section-title mt-4">
              The Best Industry Experts
            </h2>
          </motion.div>

          <motion.a
            href="/team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="btn-primary mt-4 md:mt-0 inline-flex"
          >
            Become a Member
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="team-card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Social Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.socials.facebook}
                    className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  >
                    <Facebook size={14} />
                  </a>
                  <a 
                    href={member.socials.twitter}
                    className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  >
                    <Twitter size={14} />
                  </a>
                  <a 
                    href={member.socials.linkedin}
                    className="w-8 h-8 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
              
              {/* Info */}
              <div className="team-info">
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
