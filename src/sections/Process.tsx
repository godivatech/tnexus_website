import { motion } from 'framer-motion';
import { PieChart, PenTool, ClipboardCheck, PackageCheck } from 'lucide-react';

const processes = [
  {
    id: 1,
    icon: PieChart,
    title: 'Pre-Construction',
    description: 'Site analysis, feasibility studies, and detailed cost estimation for a solid project foundation.',
    number: '01',
  },
  {
    id: 2,
    icon: PenTool,
    title: '3D Design & Blueprints',
    description: 'Translating concepts into accurate blueprints and three-dimensional designs for visual clarity.',
    number: '02',
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: 'General Contracting',
    description: 'Meticulous on-site management, safety oversight, and rigorous quality control for excellence.',
    number: '03',
  },
  {
    id: 4,
    icon: PackageCheck,
    title: 'Post-Construction',
    description: 'Final inspections, detailed walk-throughs, and ongoing warranty support for total satisfaction.',
    number: '04',
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-tnexus">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            WORK PROCESS
          </span>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="process-card shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <span className="process-number">{process.number}</span>
              <div className="relative z-10">
                <process.icon 
                  className="text-primary mb-6" 
                  size={48} 
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
              
              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
