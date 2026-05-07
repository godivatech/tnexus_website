import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className={`bg-dark text-white py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'hidden md:block'}`}>
        <div className="container-tnexus flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-accent font-medium">Email:</span>
            <span className="text-white/90">thenexusconstruction@gmail.com</span>
            <span className="text-accent font-medium ml-4">Call:</span>
            <a href="tel:6369361053" className="text-white/90 hover:text-accent transition-colors">
              6369361053
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-accent font-medium">Address:</span>
            <span className="text-white/90">7, Kodikulam First Street, Surveyor Colony, Madurai - 625007</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background shadow-lg py-3'
          : 'bg-background py-4'
          }`}
      >
        <div className="container-tnexus flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img loading="lazy" decoding="async" src="/images/logo.png" alt="Nexus Construction Logo" className="h-20 w-auto" />
          </Link>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 mr-8">
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={14} />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link px-4 py-2 ${isActive(link.path) ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex btn-accent"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container-tnexus py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-foreground hover:bg-muted/50'}`}
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


    </>
  );
};

export default Navbar;
