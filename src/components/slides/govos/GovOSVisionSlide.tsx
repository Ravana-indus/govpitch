import { Lock } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp } from '../../../utils/animationUtils';

interface GovOSVisionSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSVisionSlide = ({ id, isActive }: GovOSVisionSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        <div className="w-full md:w-1/2">
          <SlideTitle 
            title="GovOS" 
            subtitle="Transforming Public Sector Operations"
            className="text-left"
          />
          
          <motion.p 
            className="text-xl text-gray-200 mb-6"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            GovOS reimagines how governments serve citizens through an Intelligent Government Operating System designed for the digital age.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            By leveraging the same AI Agent First architecture as RavanOS, GovOS transforms complex bureaucratic processes into intuitive, efficient, and transparent public services accessible to all.
          </motion.p>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm z-0" />
            <img 
              src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="GovOS Interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white">
                <div className="flex items-center mb-2">
                  <Lock size={20} className="mr-2 text-purple-400" />
                  <span className="font-medium">GovOS Digital Services</span>
                </div>
                <p className="text-sm opacity-80">Intelligent government operations simplified</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSVisionSlide;
