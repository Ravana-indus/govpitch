import { Lock } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import PlatformComponent from '../PlatformComponent';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/utils/navigationUtils';
import GovOSLogo from '../../img/gov-os-logo.jpg';

interface GovOSSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSSlide = ({ id, isActive }: GovOSSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="GovOS" 
        subtitle="Government Operations System"
      />
      
      <PlatformComponent 
        icon={Lock}
        title="GovOS"
        description="Transforming public sector operations"
        features={[
          { id: 1, text: "Intelligent government operating system" },
          { id: 2, text: "Streamlined public services for citizens" },
          { id: 3, text: "Cross-department collaboration" },
          { id: 4, text: "Integration with business and citizen systems" },
          { id: 5, text: "Human-centered design with appropriate automation" }
        ]}
        color="purple"
        image={GovOSLogo}
      />
      
      <Button 
        onClick={() => {
          navigate('/govos');
          scrollToTop();
        }}
        className="mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white"
      >
        Explore GovOS
      </Button>
    </Slide>
  );
};

export default GovOSSlide;
