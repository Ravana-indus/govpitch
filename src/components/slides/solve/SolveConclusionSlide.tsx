import { Layers, ArrowRight } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

interface SolveConclusionSlideProps {
  id: number;
  isActive: boolean;
}

const SolveConclusionSlide = ({ id, isActive }: SolveConclusionSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full text-center">
        <SlideTitle 
          title="Join the Future of Digital Life" 
          subtitle="Experience Solve Today"
        />
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <p className="text-xl text-gray-200 mb-8">
            Solve isn't just another app—it's a fundamental rethinking of how technology should serve people. By bringing together every aspect of digital life in one intelligent, unified experience, Solve gives you something priceless: the freedom to focus on what truly matters.
          </p>
          
          <p className="text-xl text-gray-200 mb-12">
            Experience Solve today, and discover what's possible when technology finally works for you, not the other way around.
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
                navigate('/vision');
                scrollToTop();
              }}
              size="lg"
              variant="outline"
              className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-8"
            >
              Platform Vision
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          variants={slideFromBottom(0.5)}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl border-4 border-purple-400/20">
            <img 
              src="https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Solve" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
              <Layers size={36} className="text-purple-400 drop-shadow-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolveConclusionSlide;
