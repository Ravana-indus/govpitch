import { Brain, Layout, Shield, Network } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveDifferenceSlideProps {
  id: number;
  isActive: boolean;
}

const SolveDifferenceSlide = ({ id, isActive }: SolveDifferenceSlideProps) => {
  const differences = [
    {
      icon: Brain,
      title: "Context-Aware Intelligence",
      description: "Solve understands your complete digital footprint, making recommendations and taking actions based on your entire life context, not just isolated data points."
    },
    {
      icon: Layout,
      title: "Truly Unified Experience",
      description: "No more bouncing between apps—every interaction happens through one consistent, intuitive interface designed around how you actually live."
    },
    {
      icon: Shield,
      title: "Human-Centered Control",
      description: "While powerful automation handles routine tasks, you maintain complete control over your data, privacy, and decisions."
    },
    {
      icon: Network,
      title: "Ecosystem Integration",
      description: "As part of the Ravan Platform, Solve connects you to businesses and government services that share the same technological foundation, creating unprecedented integration possibilities."
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Solve Difference" 
          subtitle="Beyond Traditional Super-Apps"
        />
        
        <motion.p 
          className="text-xl text-gray-200 mb-8 text-center max-w-4xl mx-auto"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          Unlike other super-apps that merely bundle services, Solve is built on a foundation of intelligent connectivity.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.map((difference, index) => {
            const Icon = difference.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                variants={slideFromBottom(index * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center mb-3">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{difference.title}</h3>
                </div>
                <p className="text-gray-300 ml-16">{difference.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 w-full rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-full h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Solve Difference" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">Intelligence + Integration</h3>
              <p className="text-white/80">A fundamental reimagining of the digital experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolveDifferenceSlide;
