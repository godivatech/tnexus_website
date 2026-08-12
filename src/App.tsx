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
const OngoingProjects = lazy(() => import('./sections/OngoingProjects'));
const CTABanner = lazy(() => import('./sections/CTABanner'));
const Founders = lazy(() => import('./sections/Founders'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
// const Blog = lazy(() => import('./sections/Blog'));
const Contact = lazy(() => import('./sections/Contact'));

// Page Components - Lazy loaded
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
import UnderDevelopment from './components/UnderDevelopment';
import { FEATURE_FLAGS } from './config';
import SEO from './components/SEO';

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
      <SEO 
        title="Nexus Construction | Best Construction Company in Madurai"
        description="Nexus Construction is a premier construction firm in Madurai, specializing in luxury residential villas, state-of-the-art commercial buildings, civil infrastructure, and premium interior designs across Tamil Nadu."
        keywords="best construction company in Madurai, builders in Madurai, residential builders Madurai, commercial construction Tamil Nadu, luxury villa builders, civil engineering contractors Madurai, interior design Surveyor Colony, home construction Madurai, budget builders Tamil Nadu"
        canonical="/"
      />
      <Hero />
      <Features />
      <Suspense fallback={<PageLoader />}>
        {!FEATURE_FLAGS.aboutUnderDevelopment && <About />}
        <Statistics />
        {!FEATURE_FLAGS.servicesUnderDevelopment && <Services />}
        <Process />
        <OngoingProjects />
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
