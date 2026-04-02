import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Home Page Sections
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Statistics from './sections/Statistics';
import Services from './sections/Services';
import Process from './sections/Process';
import Projects from './sections/Projects';
import CTABanner from './sections/CTABanner';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Partners from './sections/Partners';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

// Page Components
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import UnderDevelopment from './components/UnderDevelopment';
import { FEATURE_FLAGS } from './config';

// Home Page Component
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      {!FEATURE_FLAGS.aboutUnderDevelopment && <About />}
      <Statistics />
      {!FEATURE_FLAGS.servicesUnderDevelopment && <Services />}
      <Process />
      <Projects />
      <CTABanner />
      <Team />
      <Testimonials />
      <Partners />
      <Blog />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/about" 
            element={FEATURE_FLAGS.aboutUnderDevelopment ? <UnderDevelopment pageName="About Us" /> : <AboutPage />} 
          />
          <Route 
            path="/services" 
            element={FEATURE_FLAGS.servicesUnderDevelopment ? <UnderDevelopment pageName="Our Services" /> : <ServicesPage />} 
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
