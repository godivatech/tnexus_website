import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

// Above the fold - Eagerly loaded
import Hero from './sections/Hero';
import Features from './sections/Features';

// Below the fold - Lazy loaded
const About = lazy(() => import('./sections/About'));
const Statistics = lazy(() => import('./sections/Statistics'));
const Services = lazy(() => import('./sections/Services'));
const Process = lazy(() => import('./sections/Process'));
const Projects = lazy(() => import('./sections/Projects'));
const CTABanner = lazy(() => import('./sections/CTABanner'));
const Founders = lazy(() => import('./sections/Founders'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Blog = lazy(() => import('./sections/Blog'));
const Contact = lazy(() => import('./sections/Contact'));

// Page Components - Lazy loaded
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
import UnderDevelopment from './components/UnderDevelopment';
import { FEATURE_FLAGS } from './config';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Home Page Component
const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Suspense fallback={<PageLoader />}>
        {!FEATURE_FLAGS.aboutUnderDevelopment && <About />}
        <Statistics />
        {!FEATURE_FLAGS.servicesUnderDevelopment && <Services />}
        <Process />
        <Projects />
        <CTABanner />
        <Founders />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
      </Suspense>
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
