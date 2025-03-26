import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Lock, Unlock, Layers, Code } from 'lucide-react';

interface VisionOpenEcosystemSlideProps {
  id: number;
  isActive: boolean;
}

const VisionOpenEcosystemSlide = ({ id, isActive }: VisionOpenEcosystemSlideProps) => {
  const stakeholders = [
    {
      icon: Code,
      title: "Developers",
      description: "Create custom solutions that work natively across the entire platform"
    },
    {
      icon: Building,
      title: "Businesses",
      description: "Access enterprise-grade intelligence without prohibitive costs"
    },
    {
      icon: Lock,
      title: "Governments",
      description: "Deliver services efficiently while respecting citizen privacy"
    },
    {
      icon: Users,
      title: "Individuals",
      description: "Gain unprecedented control over digital experiences"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Open Connected Ecosystem" 
          subtitle="Breaking Down Digital Boundaries"
        />
        
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <motion.div 
            className="w-full lg:w-2/5"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg text-gray-200 mb-6">
              At the heart of our vision is openness. While most tech giants build walled gardens that trap users and data, we're building an open ecosystem for all stakeholders.
            </p>
            
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-gray-900/60">
                <div className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Unlock size={80} className="text-purple-400" />
                      <motion.div 
                        className="absolute top-0 left-0" 
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                      >
                        <Lock size={80} className="text-gray-500" />
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">From Closed to Open</h3>
                  <p className="text-gray-300">Reimagining digital interactions for a connected world</p>
                </div>
              </div>
              <img 
                src="https://images.stockcake.com/public/f/6/3/f631847e-bcc6-4141-aee3-de472ac149fa_large/global-connections-map-stockcake.jpg" 
                alt="Open Connected Ecosystem" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={slideFromBottom(0.2)}
            initial="hidden"
            animate="visible"
          >
            {stakeholders.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                  variants={slideFromBottom(0.1 * index)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-3">
                    <div className="rounded-full p-2 bg-gradient-to-r from-purple-400/30 to-pink-500/30 text-purple-400 mr-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 ml-12">{item.description}</p>
                </motion.div>
              );
            })}
            
            <motion.div 
              className="p-5 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 rounded-lg md:col-span-2"
              variants={slideFromBottom(0.5)}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Open Source Foundation, Commercial Innovation</h3>
              <ul className="text-gray-300 space-y-2 ml-5">
                <li className="list-disc">Evolve rapidly through community contributions</li>
                <li className="list-disc">Remain accessible to organizations of all sizes</li>
                <li className="list-disc">Promote transparency in how data and AI interact</li>
                <li className="list-disc">Prevent vendor lock-in that stifles innovation</li>
                <li className="list-disc">Enable truly global adoption across markets</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default VisionOpenEcosystemSlide;

import { Building, Users } from 'lucide-react';
