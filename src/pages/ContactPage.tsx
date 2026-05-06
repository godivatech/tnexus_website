import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram } from 'lucide-react';

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
              Contact Us
            </h1>
            <nav className="flex items-center justify-center gap-3 text-white/50 font-medium text-sm uppercase tracking-widest">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-white">Contact</span>
            </nav>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      {/* Main Offices */}
      <section className="py-20 bg-background">
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
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 text-primary-foreground">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Main Office</h3>
              <p className="text-white/60 mb-8">Mon - Sat 10:00 - 18:00</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-primary" />
                  <span>6369361053, 9025776659</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-primary" />
                  <span>thenexusconstruction@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-primary" />
                  <span>7, KODIKULAM FIRST STREET, SURVEYOR COLONY,<br />MADURAI - 625007, TAMIL NADU</span>
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
                src="/images/contact/blueprints.png"
                alt="Nexus Construction Blueprints and Planning"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[Facebook, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/90 flex items-center justify-center text-dark hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form with Map */}
      <section className="relative">
        {/* Map Background */}
        <div className="h-[600px] bg-muted">
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
            className="bg-background p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-border"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h3>
              <p className="text-muted-foreground">
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
              <button type="submit" className="btn-accent w-full justify-center">
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
