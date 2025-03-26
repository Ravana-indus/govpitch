import { Cloud, Lock, Layers } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import SolutionCard from '../SolutionCard';

interface SolutionSlideProps {
  id: number;
  isActive: boolean;
}

const SolutionSlide = ({ id, isActive }: SolutionSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="Our Solution" 
        subtitle="The Three Pillars"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <SolutionCard 
          icon={Cloud}
          title="RavanOS"
          description="Business Management Platform"
          details="Built with 'AI Agent First' architecture, RavanOS unifies core business functions through natural language conversations, enabling seamless departmental integration and streamlined operations in one connected platform."
          index={0}
        />
        
        <SolutionCard 
          icon={Lock}
          title="GovOS"
          description="Government Operations System"
          details="A government-focused adaptation that transforms public sector operations through intuitive interfaces and integrated workflows, simplifying complex governmental processes for both officials and citizens."
          index={1}
        />
        
        <SolutionCard 
          icon={Layers}
          title="Solve"
          description="Consumer Super-App"
          details="AI-driven personal life management that seamlessly integrates scheduling, finances, business services, and government interactions, connecting users to the broader Ravan ecosystem for a truly unified experience."
          index={2}
        />
      </div>
    </Slide>
  );
};

export default SolutionSlide;
