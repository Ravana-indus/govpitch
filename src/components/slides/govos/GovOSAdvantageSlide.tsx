import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSAdvantageSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSAdvantageSlide = ({ id, isActive }: GovOSAdvantageSlideProps) => {
  const traditionalChallenges = [
    "Operate in isolated departmental silos",
    "Require extensive technical knowledge to navigate",
    "Struggle to adapt to changing regulations and needs",
    "Offer limited visibility into cross-agency processes"
  ];

  const portalChallenges = [
    "Focus on citizen-facing portals without back-end integration",
    "Lack intelligent assistance for complex processes",
    "Cannot connect directly with business systems",
    "Offer limited automation capabilities"
  ];

  const advantages = [
    "A comprehensive platform connecting all government functions",
    "Intelligent assistance for both citizens and government officials",
    "Seamless integration with the business ecosystem",
    "Appropriate automation with proper human oversight",
    "True digital transformation rather than digitization of paper processes"
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Competitive Advantage" 
          subtitle="True Digital Transformation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-3">Unlike traditional<br />government systems that:</h3>
            
            <motion.ul
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
            >
              {traditionalChallenges.map((challenge, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                  className="flex items-start"
                >
                  <ArrowRight className="text-red-400 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300 text-sm">{challenge}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-3">And unlike digital<br />government initiatives that:</h3>
            
            <motion.ul
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {portalChallenges.map((challenge, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                  className="flex items-start"
                >
                  <ArrowRight className="text-orange-400 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300 text-sm">{challenge}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-3">GovOS delivers:</h3>
            
            <motion.ul
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              {advantages.map((advantage, i) => (
                <motion.li 
                  key={i}
                  variants={slideUp}
                  className="flex items-start"
                >
                  <CheckCircle2 className="text-green-400 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-200 text-sm">{advantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 rounded-lg p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Beyond Digitization</h3>
          <p className="text-gray-300">
            GovOS doesn't just digitize existing processes — it fundamentally transforms how government works, with intelligent systems that adapt to both citizen and official needs.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSAdvantageSlide;
