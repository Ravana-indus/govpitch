import { Layers } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import PlatformComponent from '../PlatformComponent';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/utils/navigationUtils';
import SolveLogo from '../../img/solve-logo-nobg.png';

interface SolveSlideProps {
  id: number;
  isActive: boolean;
}

const SolveSlide = ({ id, isActive }: SolveSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="Solve" 
        subtitle="Consumer Super-App"
      />
      
      <PlatformComponent 
        icon={Layers}
        title="Solve"
        description="AI-driven personal life management"
        features={[
          { id: 1, text: "Unified interface for personal productivity and services" },
          { id: 2, text: "Seamless integration with businesses and government" },
          { id: 3, text: "AI assistance for scheduling, finances, and daily tasks" },
          { id: 4, text: "Direct access to services across the Ravan ecosystem" },
          { id: 5, text: "Personalized experiences based on individual needs" }
        ]}
        color="purple"
        image={SolveLogo}
      />
      
      <Button 
        onClick={() => {
          navigate('/solve');
          scrollToTop();
        }}
        className="mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white"
      >
        Explore Solve
      </Button>
    </Slide>
  );
};

export default SolveSlide;
