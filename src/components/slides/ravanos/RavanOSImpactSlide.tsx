import { BarChart, TrendingUp } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom, staggerChildren } from '../../../utils/animationUtils';

interface RavanOSImpactSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSImpactSlide = ({ id, isActive }: RavanOSImpactSlideProps) => {
  const directImpacts = [
    { metric: "70%", description: "reduction in training time through natural language interaction" },
    { metric: "40%", description: "increase in cross-departmental collaboration efficiency" },
    { metric: "35%", description: "faster execution of complex business processes" },
    { metric: "25%", description: "improvement in data-driven decision making" },
    { metric: "30%", description: "reduction in time spent switching between applications" }
  ];

  const ecosystemImpacts = [
    { metric: "50%", description: "faster government compliance and reporting processes" },
    { metric: "45%", description: "improvement in end-to-end supply chain visibility" },
    { metric: "60%", description: "more efficient customer service through Solve app integration" },
    { metric: "20%", description: "increase in business opportunities through platform connections" },
    { metric: "30%", description: "reduction in friction for B2B and B2G transactions" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Business Impact" 
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
              <h3 className="text-xl font-semibold">Organizations implementing RavanOS experience:</h3>
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

export default RavanOSImpactSlide;
