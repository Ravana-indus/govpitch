import { ArrowRight } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

interface VisionConclusionSlideProps {
  id: number;
  isActive: boolean;
}

const VisionConclusionSlide = ({ id, isActive }: VisionConclusionSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full text-center">
        <SlideTitle 
          title="Join Our Mission" 
          subtitle="Build the Playground for the AGI"
        />
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <p className="text-xl text-gray-200 mb-8">
            The Ravan Platform represents a once-in-a-generation opportunity to fundamentally reimagine how digital systems connect. We're not just building another software product—we're creating the foundation for a more efficient, connected world.
          </p>
          
          <p className="text-xl text-gray-200 mb-12">
            By investing in Ravan, you're not only positioning yourself for significant returns but also contributing to a vision that will transform how businesses operate, governments serve, and individuals thrive in the digital age.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10"
            variants={slideFromBottom(0.3)}
          >
            <Button
              onClick={() => {
                navigate('/ravanos');
                scrollToTop();
              }}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white px-8"
            >
              Explore RavanOS
              <ArrowRight className="ml-2" size={16} />
            </Button>
            
            <Button
              onClick={() => {
                navigate('/govos');
                scrollToTop();
              }}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white px-8"
            >
              Explore GovOS
              <ArrowRight className="ml-2" size={16} />
            </Button>
            
            <Button
              onClick={() => {
                navigate('/solve');
                scrollToTop();
              }}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white px-8"
            >
              Explore Solve
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          variants={slideFromBottom(0.5)}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 inline-block">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">We invite you to join us</h3>
            <p className="text-lg text-gray-300">in building the open, connected future.</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default VisionConclusionSlide;
