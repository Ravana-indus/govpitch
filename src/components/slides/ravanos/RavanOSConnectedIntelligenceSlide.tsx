import { Network, Users, Globe } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface RavanOSConnectedIntelligenceSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSConnectedIntelligenceSlide = ({ id, isActive }: RavanOSConnectedIntelligenceSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Connected Intelligence" 
          subtitle="The Solution"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Users className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Internal Connectivity (Intra-Business)</h3>
            </div>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.1)}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Unified platform connecting all departments and functions</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Seamless information flow between marketing, sales, operations, finance, and HR</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Shared context and data across the entire organization</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Real-time updates and notifications across business units</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="text-purple-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">External Connectivity (Inter-Business)</h3>
            </div>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.1)}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Direct connections to suppliers, partners, and customers</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Streamlined collaboration with external stakeholders</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>Secure information sharing with appropriate permissions</span>
              </motion.li>
              <motion.li variants={slideUp} className="flex items-start">
                <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                  <Network size={12} className="text-purple-400" />
                </div>
                <span>End-to-end visibility across the entire business ecosystem</span>
              </motion.li>
            </motion.ul>
          </motion.div>
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
              alt="Connected Intelligence" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-white/80">RavanOS connects your entire business ecosystem through intelligent interfaces</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default RavanOSConnectedIntelligenceSlide;
