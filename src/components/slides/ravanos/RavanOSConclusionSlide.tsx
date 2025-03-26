import { ArrowRight } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

interface RavanOSConclusionSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSConclusionSlide = ({ id, isActive }: RavanOSConclusionSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full text-center">
        <SlideTitle 
          title="Join the Business Revolution" 
          subtitle="Transform Your Organization"
        />
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <p className="text-xl text-gray-200 mb-8">
            RavanOS reimagines how organizations operate by creating an intelligent operating system where humans and AI work together seamlessly. We're bringing a paradigm shift in how businesses function, creating a future where your systems understand context, facilitate collaboration, and drive optimization.
          </p>
          
          <p className="text-xl text-gray-200 mb-12">
            From small village shops to global enterprises, RavanOS provides the collaborative, intelligent tools needed to thrive in today's interconnected business landscape—all while ensuring humans remain firmly in control of critical decisions.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10"
            variants={slideFromBottom(0.3)}
          >
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
            
            <Button
              onClick={() => {
                navigate('/vision');
                scrollToTop();
              }}
              size="lg"
              variant="outline"
              className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-8"
            >
              Business Vision
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default RavanOSConclusionSlide;
