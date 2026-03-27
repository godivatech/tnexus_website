import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential & Villa Construction',
    description: "Custom homes and luxury villas built with precision and Tamil Nadu's architectural heritage in mind.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    number: '01',
  },
  {
    id: 2,
    title: 'Commercial & Retail Spaces',
    description: 'Developing modern offices, shopping complexes, and retail environments that drive business growth.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    number: '02',
  },
  {
    id: 3,
    title: 'Premium Apartments',
    description: 'Expertly designed multi-family residential complexes that offer modern living experiences.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    number: '03',
  },
  {
    id: 4,
    title: 'Institutional Projects',
    description: 'Leading construction for schools, colleges, and healthcare facilities with safety-first infrastructure.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    number: '04',
  },
  {
    id: 5,
    title: 'Structural Renovation',
    description: 'Professional structural restoration and modern upgrades for existing commercial and residential buildings.',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?w=600&q=80',
    number: '05',
  },
  {
    id: 6,
    title: 'Civil & Land Development',
    description: 'Comprehensive site preparation, foundation engineering, and civil infrastructure for residential and commercial developments.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    number: '06',
  },
  {
    id: 7,
    title: 'Architectural Planning',
    description: 'Integrated design and planning services that merge modern functionality with structural excellence.',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?w=600&q=80',
    number: '07',
  },
];

const benefits = [
  { title: 'Expert Engineers', description: 'Our team consists of highly skilled civil and structural engineers.' },
  { title: 'Quality Control System', description: 'Rigorous multi-stage quality checks for every project.' },
  { title: 'Satisfaction Guarantee', description: 'We ensure 100% client satisfaction through transparent processes.' },
  { title: 'Regional Expertise', description: 'Deep understanding of Tamil Nadu construction regulations.' },
  { title: 'Unrivalled Workmanship', description: 'Superior finishing and attention to structural detail.' },
  { title: 'High Professional Staff', description: 'Dedicated support and project management for every client.' },
];

const ServicesPage = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="relative bg-orange-500 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-dark opacity-20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
        </div>
        <div className="container-tnexus relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Services</h1>
              <div className="flex items-center gap-2 text-white/80">
                <span>Home</span>
                <span>›</span>
                <span>Services</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Services"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-tnexus">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                </div>
                <div className="bg-white p-6 shadow-card group-hover:shadow-hover transition-shadow relative">
                  <span className="absolute -top-8 right-4 text-6xl font-bold text-gray-100 select-none">
                    {service.number}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-orange-500 transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 relative z-10">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors relative z-10">
                    View Details
                    <span className="w-8 h-8 bg-gray-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-tnexus relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2 block">
              OUR BENEFIT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Always powering your<br />
              <span className="text-dark">business since 2020</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 flex gap-4"
              >
                <div className="w-12 h-12 bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-tnexus">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <span className="section-subtitle flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                WORK PROCESS
              </span>
              <h2 className="section-title mb-12">Project implementation process</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { step: '01', title: 'Design and Planning', description: 'Detailed architectural drawings and structural analysis tailored to your needs.' },
                  { step: '02', title: 'Material Sourcing', description: 'Procurement of high-quality, premium materials from trusted suppliers.' },
                  { step: '03', title: 'On-Site Construction', description: 'Efficient and safe construction execution by our expert engineering team.' },
                  { step: '04', title: 'Final Handover', description: 'Thorough quality audit and project delivery within the committed timeline.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs uppercase tracking-wider">STEP</span>
                      <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 shadow-card"
            >
              <h3 className="text-xl font-bold text-dark mb-2">Have any Question?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Our experts are ready to assist you with your industrial or residential construction needs. Get in touch for a free consultation.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="text" placeholder="Your Inquiry" className="form-input" />
                <textarea placeholder="Write Here..." rows={3} className="form-input resize-none" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container-tnexus">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-subtitle flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              OUR SERVICE COMMITMENT
            </span>
            <h2 className="section-title mt-4">Why Choose TNexus Constructions?</h2>
          </motion.div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Safety & Integrity', description: 'Zero-incident policy and ethical practices.', popular: false, features: ['Zero-Incident Policy', 'Ethical Material Sourcing', 'Transparent Communication', 'Regulatory Compliance', 'Workers\' Welfare Focus'] },
              { name: 'Advanced Technology', description: 'Leveraging modern tools for superior builds.', popular: true, features: ['BIM Modeling', 'Smart Site Management', 'Eco-Friendly Materials', 'Modular Construction', 'Real-Time Progress Tracking'] },
              { name: 'Client Satisfaction', description: 'Defined by the satisfaction of our partners.', popular: false, features: ['On-Time Project Delivery', 'Budget-Friendly Execution', 'Personalized Support', 'Post-Construction Service', 'Long-Term Partnerships'] },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white p-8 ${plan.popular ? 'shadow-hover border-2 border-orange-500' : 'shadow-card'} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white px-4 py-1 text-sm font-medium">
                    Core Strength
                  </div>
                )}
                <h4 className="font-bold text-dark text-xl mb-4">{plan.name}</h4>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">{plan.description}</p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="text-orange-500 font-bold">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-bold uppercase tracking-wider transition-all ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'}`}>
                  Get a Quote →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
