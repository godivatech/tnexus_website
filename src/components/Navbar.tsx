import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Grid3X3,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  X
} from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-dark text-white py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container-tnexus flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-orange-500">Email:</span>
            support.tnexus@gmail.com
            <span className="text-orange-500 ml-4">Call:</span>
            <a href="tel:6369361053" className="hover:text-orange-500 transition-colors">
              6369361053
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-500">Address:</span>
            <span>SHRINAGAR, IYERBUNGALOW, MADURAI</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white py-4'
          }`}
      >
        <div className="container-tnexus flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-orange-500 clip-diagonal"></div>
              <div className="absolute inset-1 bg-white clip-diagonal flex items-center justify-center">
                <div className="w-4 h-4 bg-dark clip-diagonal"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-dark uppercase tracking-tight">TNexus</span>
          </Link>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 mr-8">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Youtube size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Linkedin size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-dark hover:bg-orange-500 hover:text-white transition-all duration-300">
              <Twitter size={14} />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link px-4 py-2 ${isActive(link.path) ? 'text-orange-500' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 flex items-center justify-center text-dark hover:text-orange-500 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:flex btn-primary"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>

            {/* Grid Icon */}
            <button className="hidden md:flex w-10 h-10 items-center justify-center text-dark hover:text-orange-500 transition-colors">
              <Grid3X3 size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container-tnexus py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 ${isActive(link.path) ? 'text-orange-500 bg-orange-50' : 'text-dark hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary justify-center mt-4"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl p-8 relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-dark"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">Search</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type to search..."
                className="form-input flex-1"
                autoFocus
              />
              <button className="btn-primary">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
