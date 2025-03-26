import { Layers } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp } from '../../../utils/animationUtils';

interface SolveVisionSlideProps {
  id: number;
  isActive: boolean;
}

const SolveVisionSlide = ({ id, isActive }: SolveVisionSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        <div className="w-full md:w-1/2">
          <SlideTitle 
            title="Solve" 
            subtitle="Your Life, Simplified"
            className="text-left"
          />
          
          <motion.p 
            className="text-xl text-gray-200 mb-6"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            Solve reimagines personal productivity and life management through an AI-powered super-app that connects individuals to everything they need in one unified interface.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            The world's first truly unified super-app that brings together your entire digital life in one intelligent interface.
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
              src="https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Solve Interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white">
                <div className="flex items-center mb-2">
                  <Layers size={20} className="mr-2 text-purple-400" />
                  <span className="font-medium">Solve Super-App</span>
                </div>
                <p className="text-sm opacity-80">Intelligent personal life management</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolveVisionSlide;
