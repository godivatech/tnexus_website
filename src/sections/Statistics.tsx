import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, value: 50, suffix: '+', label: 'Completed Projects' },
  { id: 2, value: 40, suffix: '+', label: 'Satisfied Clients' },
  { id: 3, value: 850, suffix: 'k', label: 'Sq. Ft. Built' },
  { id: 4, value: 6, suffix: '+', label: 'Years Experience' },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="py-16 bg-muted/20 border-y border-border">
      <div className="container-tnexus">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
