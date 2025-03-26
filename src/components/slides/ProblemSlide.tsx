import { Database, Network, AlertTriangle } from 'lucide-react';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import ProblemStatement from '../ProblemStatement';

interface ProblemSlideProps {
  id: number;
  isActive: boolean;
}

const ProblemSlide = ({ id, isActive }: ProblemSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="The Problem" 
        subtitle="Today's Digital Landscape"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <ProblemStatement 
          icon={Database}
          title="Siloed Data"
          description="Data isolation prevents true optimization, making it impossible for AI agents to see the complete picture of supply chains and identify cross-functional opportunities."
          index={0}
        />
        
        <ProblemStatement 
          icon={Network}
          title="Fragmented Systems"
          description="Businesses, governments, and individuals operate in isolation with disconnected systems that increase complexity and create redundant, error-prone processes."
          index={1}
        />
        
        <ProblemStatement 
          icon={AlertTriangle}
          title="Limited Connectivity"
          description="Lack of seamless interaction between business services, government agencies, and consumer needs costs time, money, and opportunity, limiting what's possible in our digital world."
          index={2}
        />
      </div>
    </Slide>
  );
};

export default ProblemSlide;
