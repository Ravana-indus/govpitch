import { AlertTriangle, Database, Network } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface RavanOSProblemSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSProblemSlide = ({ id, isActive }: RavanOSProblemSlideProps) => {
  const problems = [
    { id: 1, text: "Disconnected software systems creating information silos" },
    { id: 2, text: "Complex interfaces requiring specialized training and constant switching" },
    { id: 3, text: "Limited intelligence that forces humans to connect the dots manually" },
    { id: 4, text: "Inability to collaborate seamlessly across departments and external partners" },
    { id: 5, text: "Time wasted on repetitive administrative tasks instead of value creation" },
    { id: 6, text: "Rigid workflows that can't adapt to unique business processes" },
    { id: 7, text: "Customer and supplier management separated from internal operations" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Problem" 
          subtitle="Today's Business Challenges"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p className="text-xl text-gray-200 mb-6">
              Today's businesses face unprecedented challenges that impact organizations of all sizes, with smaller businesses often left behind due to the complexity and cost of traditional business systems.
            </motion.p>
            
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Business Complexity" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm">Legacy systems create unnecessary complexity and friction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle size={20} className="mr-2 text-purple-400" />
              Key Challenges
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
              initial="hidden"
              animate="visible"
            >
              {problems.map((problem, index) => (
                <motion.li 
                  key={problem.id}
                  className="flex items-start"
                  variants={slideUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                    <AlertTriangle size={12} className="text-purple-400" />
                  </div>
                  <span className="text-gray-200">{problem.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default RavanOSProblemSlide;
