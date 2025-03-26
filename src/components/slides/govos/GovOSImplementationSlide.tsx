import { Workflow, LockKeyhole, Users, Puzzle } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSImplementationSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSImplementationSlide = ({ id, isActive }: GovOSImplementationSlideProps) => {
  const strategies = [
    { id: 1, text: "Phased implementation approach" },
    { id: 2, text: "Legacy system integration capabilities" },
    { id: 3, text: "Comprehensive security and compliance features" },
    { id: 4, text: "Digital literacy programs for citizens and officials" },
    { id: 5, text: "Public-private partnership options for deployment" },
    { id: 6, text: "Local customization for specific community needs" },
    { id: 7, text: "Open data initiatives for transparency" },
    { id: 8, text: "Comprehensive training and support services" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Implementation Strategy" 
          subtitle="Practical Considerations"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p className="text-xl text-gray-200 mb-6">
              GovOS balances innovation with practical considerations, ensuring smooth transitions from legacy systems to modern digital government.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-lg flex flex-col items-center text-center">
                <Workflow className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Phased Approach</h3>
                <p className="text-sm text-gray-400">Incremental implementation that minimizes disruption</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-lg flex flex-col items-center text-center">
                <LockKeyhole className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-sm text-gray-400">Built-in compliance with all security standards</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-lg flex flex-col items-center text-center">
                <Users className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Citizen Training</h3>
                <p className="text-sm text-gray-400">Programs to ensure adoption by all citizens</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-lg flex flex-col items-center text-center">
                <Puzzle className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Custom Integration</h3>
                <p className="text-sm text-gray-400">Adaptable to existing government systems</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
            >
              {strategies.map((strategy) => (
                <motion.li 
                  key={strategy.id}
                  className="flex items-start"
                  variants={slideUp}
                >
                  <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <span className="text-gray-200">{strategy.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-300 italic">
                "GovOS implements governance transformation at the pace that's right for each organization, ensuring no citizen or official is left behind in the digital transition."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default GovOSImplementationSlide;
