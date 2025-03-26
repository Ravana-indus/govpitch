import { Cloud } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import RavanaOSUI from '../../../img/RavanOS-UI.png';

interface RavanOSVisionSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSVisionSlide = ({ id, isActive }: RavanOSVisionSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        <div className="w-full md:w-1/2">
          <SlideTitle 
            title="RavanOS" 
            subtitle="The Intelligent Business Operating System"
          />
          
          <motion.p 
            className="text-xl text-gray-200 mb-6"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            The world's first Intelligent Business Operating System designed to power operations for organizations of any size, anywhere.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 mb-6"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            From fruit shops to universities, from village entrepreneurs to global enterprises, RavanOS adapts to any industry with custom modules while maintaining a simple, intuitive interface that works the way you think.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            variants={slideFromBottom(0.3)}
            initial="hidden"
            animate="visible"
          >
            <span className="px-3 py-1.5 bg-purple-400/20 text-purple-400 rounded-full text-sm">AI-First Design</span>
            <span className="px-3 py-1.5 bg-purple-400/20 text-purple-400 rounded-full text-sm">Universal Adaptability</span>
            <span className="px-3 py-1.5 bg-purple-400/20 text-purple-400 rounded-full text-sm">Human-Centered</span>
            <span className="px-3 py-1.5 bg-purple-400/20 text-purple-400 rounded-full text-sm">Connected Intelligence</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={RavanaOSUI} 
              alt="RavanOS Interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white">
                <div className="flex items-center mb-2">
                  <Cloud size={20} className="mr-2 text-purple-400" />
                  <span className="font-medium">RavanOS Dashboard</span>
                </div>
                <p className="text-sm opacity-80">Intelligent business management made simple</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default RavanOSVisionSlide;
