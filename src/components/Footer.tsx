import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1c1c1c] text-white font-sans relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-80 bg-no-repeat bg-bottom bg-cover opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80")' }}></div>
      <div className="relative z-10">

        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container-tnexus py-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 lg:w-1/4">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <div className="absolute inset-0 bg-orange-500 transform rotate-45"></div>
                  <div className="absolute inset-1 bg-[#1c1c1c] transform rotate-45 flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold tracking-wide">TNexus</span>
              </Link>

              {/* Newsletter Text */}
              <div className="lg:w-2/4 lg:text-right px-4">
                <p className="text-gray-300 text-sm xl:px-8">
                  Subscribe for the latest news. Stay updated<br className="hidden lg:block" /> on the latest trends.
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="lg:w-auto flex lg:justify-end">
                <form onSubmit={handleSubscribe} className="flex relative items-center w-full max-w-[400px]">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#2a2a2a] text-gray-300 px-6 py-4 pr-40 rounded-full focus:outline-none placeholder-gray-500 text-sm"
                  />
                  <button type="submit" className="absolute right-1 top-1 bottom-1 bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                    Subscribe Now
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container-tnexus py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1: About Company */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h4 className="text-xl font-bold mb-6">About Company</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                TNexus Constructions stands for quality, innovation, and reliability. We are committed to building a better future through exceptional infrastructure.
              </p>
              <div className="font-bold text-4xl tracking-wide text-transparent" style={{ WebkitTextStroke: '1px #f97316' }}>
                Since 2020
              </div>
            </motion.div>

            {/* Column 2: Useful Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h4 className="text-xl font-bold mb-6">Useful Links</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link>
                  <Link to="/projects" className="text-gray-400 text-sm hover:text-white transition-colors">Projects</Link>
                  <Link to="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</Link>
                  <Link to="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</Link>
                  <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link to="/services" className="text-gray-400 text-sm hover:text-white transition-colors">Services</Link>
                  <Link to="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</Link>
                  <Link to="/team" className="text-gray-400 text-sm hover:text-white transition-colors">Team</Link>
                  <Link to="/contact" className="text-orange-500 text-sm hover:text-white transition-colors">Contact</Link>
                  <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of use</Link>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Office & Email Address */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-6">Office Address</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Shrinagar, Iyerbungalow, Madurai<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 mt-8 lg:mt-0 pt-4">Email Address</h4>
                <p className="text-gray-400 text-sm mb-2">Interested in working with us?</p>
                <a href="mailto:support.tnexus@gmail.com" className="text-gray-400 text-sm hover:text-orange-500 transition-colors break-words">support.tnexus@gmail.com</a>
              </div>
            </motion.div>

            {/* Column 4: Phone Number & Follow Us */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-6">Phone Number</h4>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919944325345" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">+91 99443 25345</a>
                  <a href="tel:+919152261659" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">+91 91522 61659</a>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 mt-8 lg:mt-0 pt-4">Follow Us</h4>
                <div className="flex gap-2">
                  <a href="#" className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded text-gray-400 hover:text-white hover:bg-orange-500 transition-all">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded text-gray-400 hover:text-white hover:bg-orange-500 transition-all">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded text-gray-400 hover:text-white hover:bg-orange-500 transition-all">
                    <Youtube size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded text-gray-400 hover:text-white hover:bg-orange-500 transition-all">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="container-tnexus py-6">
            <div className="text-center text-sm text-gray-400">
              <p>© 2026 TNexus. Designed By <a href="https://godivatech.com" className="text-orange-500 hover:underline">Godivatech</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
