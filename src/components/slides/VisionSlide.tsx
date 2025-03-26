import { motion } from 'framer-motion';
import { Building, Globe, Users } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import { slideFromBottom } from '../../utils/animationUtils';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/utils/navigationUtils';

interface VisionSlideProps {
  id: number;
  isActive: boolean;
}

const VisionSlide = ({ id, isActive }: VisionSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="Our Vision for Impact" 
        subtitle="Global Transformation"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/20 bg-white/5 flex flex-col"
          variants={slideFromBottom(0)}
          initial="hidden"
          animate="visible"
        >
          <Building className="text-purple-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-3">Powering Businesses Anywhere</h3>
          <p className="text-sm text-gray-300 flex-grow">
            From village entrepreneurs to multinational corporations, Ravan democratizes access to 
            powerful AI-driven business tools that scale with any business, anywhere.
          </p>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/20 bg-white/5 flex flex-col"
          variants={slideFromBottom(0.2)}
          initial="hidden"
          animate="visible"
        >
          <Globe className="text-purple-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
          <p className="text-sm text-gray-300 flex-grow">
            Starting with Sri Lanka and expanding globally, we aim to create a platform that contributes 
            significantly to economic growth by enabling efficient digital interactions across all sectors.
          </p>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/20 bg-white/5 flex flex-col"
          variants={slideFromBottom(0.4)}
          initial="hidden"
          animate="visible"
        >
          <Users className="text-purple-400 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-3">Economic Empowerment</h3>
          <p className="text-sm text-gray-300 flex-grow">
            Our ultimate goal is economic empowerment at all levels, closing digital divides while 
            creating a more inclusive and efficient global marketplace.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-8"
        variants={slideFromBottom(0.6)}
        initial="hidden"
        animate="visible"
      >
        <Button 
          onClick={() => {
            navigate('/vision');
            scrollToTop();
          }}
          className="mt-4 w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white"
        >
          Explore Vision
        </Button>
      </motion.div>
    </Slide>
  );
};

export default VisionSlide;
