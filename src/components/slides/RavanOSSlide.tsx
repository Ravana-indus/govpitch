import { Cloud } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import PlatformComponent from '../PlatformComponent';
import RavanaOSLogo from '../../img/RavanaOS_Logo.png';
import RavanaOSLogoFull from '../../img/RavanaOS_Logo_Full.png';

interface RavanOSSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSSlide = ({ id, isActive }: RavanOSSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="RavanOS" 
        subtitle="Business Management Platform"
      />
      
      <PlatformComponent 
        icon={Cloud}
        title="RavanOS"
        description="AI-powered business operations platform"
        features={[
          { id: 1, text: "Natural language interface for all business operations" },
          { id: 2, text: "Seamless integration between departments and functions" },
          { id: 3, text: "AI agents with complete visibility across operations" },
          { id: 4, text: "Open architecture connecting to external systems" },
          { id: 5, text: "Scales from village entrepreneurs to global enterprises" }
        ]}
        color="purple"
        image={RavanaOSLogoFull}
      />
    </Slide>
  );
};

export default RavanOSSlide;
