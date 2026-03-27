import { motion } from 'framer-motion';
import { PieChart, ClipboardCheck, PackageCheck } from 'lucide-react';

const processes = [
  {
    id: 1,
    icon: PieChart,
    title: 'Analysis of the client\'s objectives & needs',
    description: 'Our approach to project management is grounded in practical experience and prioritises open communication.',
    number: '01',
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: 'Construction project study & structural design',
    description: 'Together, we identify the construction project\'s total scope and the materials needed for excellence.',
    number: '02',
  },
  {
    id: 3,
    icon: PackageCheck,
    title: 'Project execution phase and site installation',
    description: 'We collaborate closely with you to manage the site and integrate all structural components.',
    number: '03',
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            WORK PROCESS
          </span>
        </motion.div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="text-orange-500 mb-6" 
                  size={48} 
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-dark mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
              
              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
