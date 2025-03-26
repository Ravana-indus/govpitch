import { CheckCircle, XCircle } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom, staggerChildren } from '../../../utils/animationUtils';

interface RavanOSCompetitiveAdvantageSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSCompetitiveAdvantageSlide = ({ id, isActive }: RavanOSCompetitiveAdvantageSlideProps) => {
  const traditionalSoftwareIssues = [
    "Requires extensive technical knowledge to navigate",
    "Forces users to adapt to the software rather than vice versa",
    "Operates in functional silos with limited integration",
    "Locks businesses into rigid workflows and processes"
  ];

  const standaloneAIIssues = [
    "Lack deep integration with business operations",
    "Don't have access to comprehensive business data",
    "Can't execute actions across systems",
    "Operate in isolation from core business processes"
  ];

  const ravanOSAdvantages = [
    "The seamless AI assistance of cutting-edge tools in a complete business platform",
    "Natural language interfaces that adapt to users rather than forcing adaptation",
    "Multi-level intelligence spanning from individual tasks to cross-company optimization",
    "The ability to execute, not just advise, while maintaining human control",
    "True accessibility for businesses of all sizes and technical capabilities"
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Competitive Advantage" 
          subtitle="A New Category of Business Platform"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <XCircle size={20} className="mr-2 text-red-500" />
              Traditional Business Software
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
            >
              {traditionalSoftwareIssues.map((issue, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={slideUp}
                >
                  <div className="rounded-full bg-red-500/20 p-1 mr-3 mt-0.5">
                    <XCircle size={12} className="text-red-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{issue}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <XCircle size={20} className="mr-2 text-red-500" />
              Standalone AI Tools
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {standaloneAIIssues.map((issue, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={slideUp}
                >
                  <div className="rounded-full bg-red-500/20 p-1 mr-3 mt-0.5">
                    <XCircle size={12} className="text-red-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{issue}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle size={20} className="mr-2 text-purple-400" />
              RavanOS Delivers
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {ravanOSAdvantages.map((advantage, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={slideUp}
                >
                  <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                    <CheckCircle size={12} className="text-purple-400" />
                  </div>
                  <span className="text-gray-200 text-sm">{advantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default RavanOSCompetitiveAdvantageSlide;
