import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Founders from '../sections/Founders';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const timelineTabs = [
    { year: 'In 2020', title: 'Journey Was Started', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
    { year: 'In 2021', title: 'Expansion Phase', image: 'https://images.unsplash.com/photo-1565514020176-db98e3c15463?w=600&q=80' },
    { year: 'In 2022', title: 'Major Projects Delivered', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { year: 'In 2023', title: 'Innovation Era', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
    { year: 'In 2024', title: 'Future Ready', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80' },
  ];



  return (
    <main>
      {/* Page Header */}
      <section className="relative bg-dark py-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container-tnexus relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <nav className="flex items-center justify-center gap-3 text-white/50 font-medium text-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-white">About</span>
            </nav>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
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
              <img loading="lazy" decoding="async"
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                alt="Our Mission - Active Construction Site"
                className="w-40 h-32 object-cover rounded-sm shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To deliver exceptional civil construction, luxury villas, and premium commercial spaces across Tamil Nadu by combining engineering precision, safety, and top-tier craftsmanship.
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
              <img loading="lazy" decoding="async"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80"
                alt="Our Vision - Luxury Modern Villa"
                className="w-40 h-32 object-cover rounded-sm shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be Tamil Nadu's premier construction partner, seamlessly turning ambitious architectural designs into structural, income-generating realities and luxurious custom homes.
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
                  description: 'Maintaining transparent communication with clients and partners throughout the project lifecycle.'
                },
                {
                  title: 'Quality',
                  description: 'Uncompromising standards in every material and finish to ensure lasting structural integrity.'
                },
                {
                  title: 'Integrity',
                  description: 'Delivering on time, within budget, and with total honesty in every interaction.'
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
            <img loading="lazy" decoding="async"
              src={timelineTabs[activeTab].image}
              alt={timelineTabs[activeTab].title}
              className="w-full h-[350px] object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{timelineTabs[activeTab].title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our inception in Madurai, Nexus Construction has grown consistently by delivering exceptional residential villas, commercial landmarks, industrial infrastructure, and premium interiors.
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

      <Founders />

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: '60+', label: 'Projects' },
              { value: '50+', label: 'Satisfied Clients' },
              { value: '1 Lakh', label: 'Sq. Ft. Covered' },
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
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
