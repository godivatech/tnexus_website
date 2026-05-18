import { motion } from 'framer-motion';
import { Home, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-xl w-full text-center relative">
        {/* Background Glowing Orb Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

        {/* Cinematic Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Animated 404 Number with Construction Lines */}
          <div className="text-[120px] sm:text-[160px] font-extrabold leading-none tracking-tight text-primary/10 select-none font-sans relative">
            404
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[100px] sm:text-[130px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent select-text">
                404
              </span>
            </div>
          </div>
          
          {/* Decorative Blueprint Construction Grid Lines */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-accent/20 rounded-sm animate-[spin_15s_linear_infinite_reverse]" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-subtitle inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
            Page Not Found
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans tracking-tight">
            Under Construction or Lost?
          </h1>
          
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto text-sm sm:text-base">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 group"
            >
              <Home size={18} className="transition-transform group-hover:-translate-y-0.5" />
              Go Back Home
            </Link>
            
            <Link
              to="/contact"
              className="btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 group bg-card hover:bg-muted/30"
            >
              <PhoneCall size={18} className="transition-transform group-hover:scale-110" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
