import { motion } from 'framer-motion';
import { Database, Network } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import { slideFromBottom } from '../../utils/animationUtils';

interface AIArchitectureSlideProps {
  id: number;
  isActive: boolean;
}

const AIArchitectureSlide = ({ id, isActive }: AIArchitectureSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="AI Agent First Architecture" 
        subtitle="Unprecedented Optimization"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
          variants={slideFromBottom(0)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Database className="mr-3 text-purple-400" size={24} />
            Complete Supply Chain Visibility
          </h3>
          <p className="text-gray-300 mb-4">
            By providing AI agents with complete knowledge – from raw materials to government regulations 
            to consumer demand – Ravan enables optimization at a level previously unattainable.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>End-to-end visibility eliminates inefficiencies</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>Real-time adaptability to changing conditions</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>Cost reduction through holistic optimization</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
          variants={slideFromBottom(0.2)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Network className="mr-3 text-purple-400" size={24} />
            Natural Language Interface
          </h3>
          <p className="text-gray-300 mb-4">
            Ravan's AI agents use natural language conversations to make powerful functionality accessible to everyone, 
            regardless of technical expertise.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>Conversational interface for complex operations</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>Contextual understanding of business needs</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></div>
              <span>Progressive automation with human oversight</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </Slide>
  );
};

export default AIArchitectureSlide;
