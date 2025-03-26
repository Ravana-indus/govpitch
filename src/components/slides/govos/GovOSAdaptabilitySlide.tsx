import { Layers, Settings, Scale, Globe, Languages } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSAdaptabilitySlideProps {
  id: number;
  isActive: boolean;
}

const GovOSAdaptabilitySlide = ({ id, isActive }: GovOSAdaptabilitySlideProps) => {
  const adaptabilityFeatures = [
    {
      icon: Layers,
      title: "Flexible system adaptable to any government structure",
      description: "Modular architecture that can be configured for national, state/provincial, or local governments."
    },
    {
      icon: Scale,
      title: "Scales from local municipalities to national agencies",
      description: "Performance and capacity that can grow from serving small communities to entire nations."
    },
    {
      icon: Settings,
      title: "Modules for specific government functions",
      description: "Specialized components for tax administration, permit management, welfare services, and more."
    },
    {
      icon: Globe,
      title: "Configurable workflows to match existing legal frameworks",
      description: "Adaptable processes that conform to the specific regulatory requirements of each jurisdiction."
    },
    {
      icon: Languages,
      title: "Multilingual support for diverse populations",
      description: "Interface and content available in multiple languages to serve diverse citizen populations."
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Universal Government Adaptability" 
          subtitle="Flexibility Across All Levels"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adaptabilityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-3 mt-1">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden h-[200px]">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Local Government" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold">Local Government</h3>
                <p className="text-white/80 text-sm">Streamlined operations for municipalities</p>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-[200px]">
              <img 
                src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="National Government" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold">National Government</h3>
                <p className="text-white/80 text-sm">Scaled solutions for complex national operations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSAdaptabilitySlide;
