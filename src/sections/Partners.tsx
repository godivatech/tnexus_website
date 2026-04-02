import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'UltraTech Cement', logo: 'UT' },
  { id: 2, name: 'JSW Steel', logo: 'JSW' },
  { id: 3, name: 'TATA Tiscon', logo: 'TT' },
  { id: 4, name: 'Sri City', logo: 'SC' },
  { id: 5, name: 'Sundaram Foundations', logo: 'SF' },
  { id: 6, name: 'Zuari Cement', logo: 'ZC' },
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-tnexus">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            PARTNERS
          </span>
          <h3 className="section-title mt-4">
            Trusted by over 50+ businesses across Tamil Nadu
          </h3>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="partner-logo flex items-center justify-center p-6 bg-background rounded-lg shadow-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {partner.logo}
                </div>
                <div className="text-xs text-muted-foreground">{partner.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
