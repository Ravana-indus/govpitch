import { Building, Network, User, Landmark, Stethoscope } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveConnectionsSlideProps {
  id: number;
  isActive: boolean;
}

const SolveConnectionsSlide = ({ id, isActive }: SolveConnectionsSlideProps) => {
  const connections = [
    {
      icon: Building,
      title: "Businesses",
      description: "Operating on RavanOS for seamless service experiences"
    },
    {
      icon: Network,
      title: "Government Agencies",
      description: "Using GovOS for friction-free civic interactions"
    },
    {
      icon: User,
      title: "Social Network",
      description: "For streamlined personal communications"
    },
    {
      icon: Landmark,
      title: "Financial Institutions",
      description: "For comprehensive money management"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Providers",
      description: "For integrated wellness tracking"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Connected to Everything That Matters" 
          subtitle="Comprehensive Integration"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {connections.map((connection, index) => {
                const Icon = connection.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                    variants={slideFromBottom(index * 0.1)}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex items-center mb-2">
                      <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-semibold">{connection.title}</h3>
                    </div>
                    <p className="text-sm text-gray-300 ml-10">{connection.description}</p>
                  </motion.div>
                );
              })}
            </div>
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
              Solve integrates directly with all the important systems in your life, creating a seamless experience across every domain.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Connected Network" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Universal Integration</h3>
                <p className="text-white/80">One interface connecting to all your services, systems and people</p>
              </div>
            </div>
            
            <motion.div 
              className="mt-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-lg p-4"
              variants={slideFromBottom(0.4)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-white/90 text-sm">
                Unlike other apps that operate in isolation, Solve creates bridges between all aspects of your digital life for truly seamless experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolveConnectionsSlide;
