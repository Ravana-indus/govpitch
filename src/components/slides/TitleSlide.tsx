import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animationUtils';
import Slide from '../Slide';

interface TitleSlideProps {
  id: number;
  isActive: boolean;
}

const TitleSlide = ({ id, isActive }: TitleSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="text-center max-w-4xl">
        <motion.div 
          className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm font-medium">Investor Presentation</p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          RAVAN: The Connected Ecosystem
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Revolutionizing how businesses, governments, and individuals connect
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Born from necessity during Sri Lanka's economic crisis and now powering its digital transformation
        </motion.p>
        
       
      </div>
    </Slide>
  );
};

export default TitleSlide;
