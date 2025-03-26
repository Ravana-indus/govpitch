import { Building, Lock, Shield, Sparkles } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolvePlatformAdvantageSlideProps {
  id: number;
  isActive: boolean;
}

const SolvePlatformAdvantageSlide = ({ id, isActive }: SolvePlatformAdvantageSlideProps) => {
  const advantages = [
    {
      icon: Building,
      title: "Direct integration with businesses using RavanOS",
      description: "Seamless interactions with companies on the platform"
    },
    {
      icon: Lock,
      title: "Seamless government interactions through GovOS",
      description: "Simplified bureaucracy and digital-first public services"
    },
    {
      icon: Shield,
      title: "Privacy-preserving data sharing that puts you in control",
      description: "Granular permissions and complete transparency"
    },
    {
      icon: Sparkles,
      title: "Continuous intelligence improvements through ecosystem learning",
      description: "AI that gets better as the entire platform evolves"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Ravan Platform Advantage" 
          subtitle="Ecosystem Benefits"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              While powerful as a standalone app, Solve reaches its full potential as part of the Ravan ecosystem.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Platform Advantage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-white text-3xl font-bold mb-4">Ecosystem Power</h3>
                <p className="text-white/80 max-w-xs">When personal tools connect to business and government systems, entirely new possibilities emerge</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-start">
                    <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mt-1">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{advantage.title}</h3>
                      <p className="text-sm text-gray-400">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-purple-400/20"
              variants={slideFromBottom(0.5)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-white/90">
                The true magic of Solve comes from its integration with the broader Ravan platform—creating unprecedented opportunities for personal optimization within a connected ecosystem.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolvePlatformAdvantageSlide;
