import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anbarasan M',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    company: 'V-Arch Group',
    content: "Nexus Construction didn't just build our headquarters; they built a relationship based on trust. Their expertise in commercial infrastructure and specialized foundation work is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Muthu Selvam',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    company: 'Private Residence',
    content: 'The 3D design phase was a game-changer. Seeing our villa before construction even started gave us absolute confidence. The final handover was seamless and on schedule.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Kannan',
    role: 'Proprietor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    company: 'Industrial Logistics',
    content: 'For our petrol pump and warehouse expansion, Nexus was the perfect partner. Their understanding of industrial regulations and structural integrity is excellent.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-tnexus">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              TESTIMONIALS
            </span>
            <h2 className="section-title mt-4">
              What people say about<br />Nexus Construction
            </h2>
          </motion.div>

          <motion.a
            href="/testimonials"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="btn-primary mt-4 md:mt-0 inline-flex"
          >
            More Reviews
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="testimonial-card"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-muted/30 font-bold text-lg">{testimonial.company}</span>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted'}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote size={32} className="text-muted/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
