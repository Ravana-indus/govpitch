import { Layers, Zap, Fingerprint } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveSolutionSlideProps {
  id: number;
  isActive: boolean;
}

const SolveSolutionSlide = ({ id, isActive }: SolveSolutionSlideProps) => {
  const features = [
    {
      icon: Layers,
      title: "Unified Interface",
      description: "One intelligent app to manage your entire digital life"
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Advanced AI agents that learn your preferences and optimize your experience"
    },
    {
      icon: Fingerprint,
      title: "Personalized",
      description: "Tailored to your unique needs, preferences, and lifestyle"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Solution: Solve" 
          subtitle="Your Digital Life, Unified"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 flex items-start"
                    variants={slideFromBottom(index * 0.1)}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="rounded-full p-3 mr-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              className="mt-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-lg p-5"
              variants={slideFromBottom(0.4)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-white/90 italic">
                "Unlike traditional apps that focus on single domains, Solve creates a seamless experience across personal, professional, and civic interactions. Powered by advanced AI agents, Solve doesn't just organize your digital life—it optimizes it."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              <span className="text-purple-400 font-semibold">Solve is the world's first truly unified super-app</span> that brings together your entire digital life in one intelligent interface.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Solve Solution" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">One App, Infinite Possibilities</h3>
                <p className="text-white/80">Simplifying digital chaos into meaningful experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolveSolutionSlide;
