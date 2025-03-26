import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import { slideUp } from '../../utils/animationUtils';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

interface CallToActionSlideProps {
  id: number;
  isActive: boolean;
}

const CallToActionSlide = ({ id, isActive }: CallToActionSlideProps) => {
  const navigate = useNavigate();

  const handleExplore = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="text-center max-w-3xl">
        <SlideTitle 
          title="Join the Revolution" 
          subtitle="Next Steps"
        />
        
        <motion.div 
          className="mb-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xl text-gray-200 mb-6">
            Invest in Ravan today and become part of building the connected digital future – where 
            businesses thrive, governments serve efficiently, and individuals navigate life seamlessly.
          </p>
          
          
        </motion.div>
        
        <motion.div 
          className="mb-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-5">Explore the Ravan Ecosystem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <Button 
              onClick={() => handleExplore('/ravanos')}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 border-none text-white"
            >
              Explore RavanOS
            </Button>
            <Button 
              onClick={() => handleExplore('/govos')}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 border-none text-white"
            >
              Explore GovOS
            </Button>
            <Button 
              onClick={() => handleExplore('/solve')}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 border-none text-white"
            >
              Explore Solve
            </Button>
            <Button 
              onClick={() => handleExplore('/vision')}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 border-none text-white"
            >
              Explore Vision & Business
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-gray-400 mb-2">Contact us</p>
          <h3 className="text-xl font-medium mb-1">patu@ravanaindustries.com</h3>
          <p className="text-lg">+49 174 9570 945</p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default CallToActionSlide;
