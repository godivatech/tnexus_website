import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp, Monitor, ShoppingCart, Ticket } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle visibility of "Scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
};

export default ScrollToTop;
