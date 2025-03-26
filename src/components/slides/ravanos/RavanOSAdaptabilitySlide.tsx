import { Puzzle, Scale, Settings, Cloud } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface RavanOSAdaptabilitySlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSAdaptabilitySlide = ({ id, isActive }: RavanOSAdaptabilitySlideProps) => {
  const adaptabilityFeatures = [
    {
      icon: Puzzle,
      title: "Modular design adapts to businesses of all types",
      description: "Choose the components that fit your specific needs"
    },
    {
      icon: Settings,
      title: "Industry-specific modules for specialized needs",
      description: "From retail to manufacturing, healthcare to education"
    },
    {
      icon: Scale,
      title: "Scales from single-person shops to multinational enterprises",
      description: "Grow with a platform that expands as you do"
    },
    {
      icon: Cloud,
      title: "Cloud-based for global accessibility",
      description: "Access your business operations from anywhere in the world"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Universal Business Adaptability" 
          subtitle="One Platform, Any Business"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {adaptabilityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                variants={slideFromBottom(index * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 ml-16">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Universal Adaptability" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">From Small Shops to Global Enterprises</h3>
              <p className="text-white/80">Affordable entry points with scalable capabilities for any organization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default RavanOSAdaptabilitySlide;
