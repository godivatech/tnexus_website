import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UnderDevelopmentProps {
  pageName: string;
}

const UnderDevelopment = ({ pageName }: UnderDevelopmentProps) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted/30 px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background p-12 rounded-2xl shadow-xl relative overflow-hidden border border-border"
        >
          {/* Decorative Background Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Construction className="text-primary w-10 h-10" />
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">
              {pageName} Under Development
            </h1>

            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Our team is working hard to bring you the best experience. This section will be available very soon with detailed information.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="btn-primary"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>
          </div>

          {/* Progress Bar Mockup */}
          <div className="mt-12 h-2 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-primary"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
