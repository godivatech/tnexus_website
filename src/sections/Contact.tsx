import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container-tnexus">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a project in mind?<br />
              Contact us
            </h2>
            <p className="text-white/60 mb-10 max-w-md">
              Ready to start your next construction project? Reach out to our team of experts for a comprehensive consultation and custom engineering solution.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase">Office Address</h4>
                  <p className="text-white/60 text-sm">Shrinagar, Iyerbungalow, Madurai</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase">Phone Number</h4>
                  <p className="text-white/60 text-sm">6369361053, 9025776659</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-white/60 text-sm">
                    Interested in working with us?<br />
                    thenexusconstruction@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hour</h4>
                  <p className="text-white/60 text-sm">
                    Mon - Fri: 09am - 07pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary p-8 md:p-10 clip-diagonal">
              <h3 className="text-2xl font-bold mb-2 text-primary-foreground">Get in Touch</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                Fill out the form below and our project managers will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input-dark"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input-dark"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write Here..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input-dark resize-none"
                  />
                </div>
                <button type="submit" className="bg-dark text-white px-8 py-4 font-medium inline-flex items-center gap-2 hover:bg-white hover:text-dark transition-all duration-300 w-full justify-center">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
