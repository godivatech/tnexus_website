import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      city: 'Madurai',
      phone: '+91 63693 61053',
      email: 'info@tnexusconstructions.com',
      hours: 'Mon - Sat 10:00 - 18:00',
      image: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?w=400&q=80',
    },
    {
      city: 'Chennai',
      phone: '+91 63693 61053',
      email: 'info@tnexusconstructions.com',
      hours: 'Mon - Sat 10:00 - 18:00',
      image: 'https://images.unsplash.com/photo-1582512355410-09699696c738?w=400&q=80',
    },
    {
      city: 'Coimbatore',
      phone: '+91 63693 61053',
      email: 'info@tnexusconstructions.com',
      hours: 'Mon - Sat 10:00 - 18:00',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
    },
  ];

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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
              <div className="flex items-center gap-2 text-white/80">
                <span>Home</span>
                <span>›</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Contact"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Offices */}
      <section className="py-20 bg-white">
        <div className="container-tnexus">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Dark Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark p-12 text-white"
            >
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Main Offices</h3>
              <p className="text-gray-400 mb-8">Mon - Sat 10:00 - 18:00</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-orange-500" />
                  <span>+91 63693 61053</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-orange-500" />
                  <span>info@tnexusconstructions.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-orange-500" />
                  <span>123, TNexus Tower, Anna Nagar,<br />Madurai, Tamil Nadu 625020</span>
                </div>
              </div>

              <button className="mt-8 border border-white/30 px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-dark transition-all">
                View Location
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Office Building"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/90 flex items-center justify-center text-dark hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gray-50">
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
              BRANCH
            </span>
            <h2 className="section-title mt-4">Global Office</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-6 shadow-card hover:shadow-hover transition-shadow"
              >
                <h3 className="text-xl font-bold text-dark mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-orange-500" />
                    {office.phone}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-orange-500" />
                    {office.email}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-orange-500" />
                    {office.hours}
                  </div>
                </div>
                <button className="w-full border border-gray-300 py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-all">
                  View Location
                  <ArrowRight size={14} />
                </button>
                <div className="mt-6 h-32 overflow-hidden">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Map */}
      <section className="relative">
        {/* Map Background */}
        <div className="h-[600px] bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.639148688!2d78.0792384!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58242145821%3A0xbe0908384882a275!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711530000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>

        {/* Form Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 max-w-2xl w-full shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-dark mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                Ready to start your next construction project? Our team is here to help you every step of the way. Reach out to us for any inquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>
              <textarea
                placeholder="Write Here..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
