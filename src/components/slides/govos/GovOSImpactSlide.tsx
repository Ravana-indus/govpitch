import { BarChart, TrendingUp } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom, staggerChildren } from '../../../utils/animationUtils';

interface GovOSImpactSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSImpactSlide = ({ id, isActive }: GovOSImpactSlideProps) => {
  const directImpacts = [
    { metric: "65%", description: "reduction in processing time for citizen requests" },
    { metric: "40%", description: "decrease in administrative burden on civil servants" },
    { metric: "50%", description: "improvement in cross-agency collaboration" },
    { metric: "35%", description: "increase in compliance rates for businesses" },
    { metric: "45%", description: "reduction in paperwork for both citizens and officials" }
  ];

  const ecosystemImpacts = [
    { metric: "70%", description: "faster business licensing and permitting processes" },
    { metric: "60%", description: "improvement in tax collection efficiency" },
    { metric: "50%", description: "reduction in regulatory compliance costs for businesses" },
    { metric: "80%", description: "increase in citizen satisfaction with government services" },
    { metric: "40%", description: "better resource allocation through data-driven insights" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Impact Metrics" 
          subtitle="Measurable Results"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <BarChart className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Governments implementing GovOS experience:</h3>
            </div>
            
            <motion.ul 
              className="space-y-4 mb-6"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
            >
              {directImpacts.map((impact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  variants={slideUp}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-purple-400/20 text-white font-bold text-xl mr-4">
                    {impact.metric}
                  </div>
                  <span className="text-gray-200">{impact.description}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">When fully integrated within the Ravan platform ecosystem:</h3>
            </div>
            
            <motion.ul 
              className="space-y-4"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {ecosystemImpacts.map((impact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  variants={slideUp}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-purple-400/20 text-white font-bold text-xl mr-4">
                    {impact.metric}
                  </div>
                  <span className="text-gray-200">{impact.description}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default GovOSImpactSlide;
