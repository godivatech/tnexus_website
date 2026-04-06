import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const timelineTabs = [
    { year: 'In 2020', title: 'Journey Was Started', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
    { year: 'In 2021', title: 'Expansion Phase', image: 'https://images.unsplash.com/photo-1565514020176-db98e3c15463?w=600&q=80' },
    { year: 'In 2022', title: 'Major Projects Delivered', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { year: 'In 2023', title: 'Innovation Era', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
    { year: 'In 2024', title: 'Future Ready', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80' },
  ];

  const teamMembers = [
    { name: 'Ramesh Kumar', role: 'Sr. Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Senthil Nathan', role: 'Foreman', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
    { name: 'Karthikeyan S', role: 'Sr. Engineer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-dark opacity-20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </div>
        <div className="container-tnexus relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About</h1>
              <div className="flex items-center gap-2 text-white/80">
                <span>Home</span>
                <span>›</span>
                <span>About</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Team"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container-tnexus">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="section-subtitle flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              ABOUT NEXUS CONSTRUCTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Providing end-to-end best construction solutions across Tamil Nadu since 2020.
            </h2>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                alt="Mission"
                className="w-40 h-32 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our mission is to build the highest quality homes and commercial spaces for our clients. We focus on maintaining a safe workplace, being extremely careful with every technical detail, and using building methods that protect our environment. We want every client to feel that their project was handled with the best care and expertise.
                </p>
                <div className="w-12 h-0.5 bg-primary mt-4" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6"
            >
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&q=80"
                alt="Vision"
                className="w-40 h-32 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We aim to be the most trusted name in the region for turning dream designs into strong, real-world buildings. Our vision is to serve as the perfect bridge between creative architectural ideas and solid structural reality, making sure every project we finish matches the original plan perfectly.
                </p>
                <div className="w-12 h-0.5 bg-primary mt-4" />
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Connectivity', 
                  description: 'We believe in staying connected with you through honest and open communication. We listen to your needs and keep you updated at every stage of the project so you always know exactly what is happening.' 
                },
                { 
                  title: 'Quality', 
                  description: 'We never settle for second best. By using the finest materials and working with highly skilled professionals, we make sure that every part of your building is strong, safe, and beautifully finished.' 
                },
                { 
                  title: 'Integrity', 
                  description: 'Honesty is at the heart of our business. We promise to deliver your project on time and within the agreed budget, doing exactly what we said we would do with total transparency and care.' 
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/30 p-8 text-center border-t-4 border-primary"
                >
                  <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container-tnexus">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-subtitle flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              OUR HISTORY
            </span>
            <h2 className="section-title mt-4">Company Journey</h2>
          </motion.div>

          {/* Timeline Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {timelineTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${activeTab === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:bg-muted'
                  }`}
              >
                {tab.year}
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-background p-8"
          >
            <img
              src={timelineTabs[activeTab].image}
              alt={timelineTabs[activeTab].title}
              className="w-full h-[350px] object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{timelineTabs[activeTab].title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our inception in Madurai, Nexus Construction has grown consistently by delivering exceptional residential villas, apartments, and modern commercial spaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Quality Control System
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Building Quality Industrial
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container-tnexus">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-subtitle flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                ENGINEER
              </span>
              <h2 className="section-title mt-4">The Best industry experts</h2>
            </motion.div>

            <motion.a
              href="/team"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="btn-accent mt-4 md:mt-0 inline-flex"
            >
              Become a Member
              <ArrowRight size={18} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
                      <Facebook size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
                      <Twitter size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
                <div className="bg-background p-4 text-center shadow-lg">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                  <div className="w-12 h-0.5 bg-primary mx-auto mt-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container-tnexus">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-subtitle flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              ACHIEVEMENT
            </span>
            <h2 className="section-title mt-4">Company Achievement</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '45+', label: 'Drilling Fields' },
              { value: '100+', label: 'Satisfied Clients' },
              { value: '500k', label: 'Sq. Ft. Built' },
              { value: '8+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="stat-number">{stat.value}</div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
