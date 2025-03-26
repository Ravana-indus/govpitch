import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PresentationLayout from '../layouts/PresentationLayout';
import SolveVisionSlide from '../components/slides/solve/SolveVisionSlide';
import SolveProblemSlide from '../components/slides/solve/SolveProblemSlide';
import SolveSolutionSlide from '../components/slides/solve/SolveSolutionSlide';
import SolveInteractionModesSlide from '../components/slides/solve/SolveInteractionModesSlide';
import SolveConnectionsSlide from '../components/slides/solve/SolveConnectionsSlide';
import SolveDifferenceSlide from '../components/slides/solve/SolveDifferenceSlide';
import SolveLifeImpactSlide from '../components/slides/solve/SolveLifeImpactSlide';
import SolveRealLifeScenariosSlide from '../components/slides/solve/SolveRealLifeScenariosSlide';
import SolveBusinessModelSlide from '../components/slides/solve/SolveBusinessModelSlide';
import SolvePlatformAdvantageSlide from '../components/slides/solve/SolvePlatformAdvantageSlide';
import SolveConclusionSlide from '../components/slides/solve/SolveConclusionSlide';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

const Solve = () => {
  const navigate = useNavigate();
  const TOTAL_SLIDES = 11;
  
  return (
    <>
      <Button 
        onClick={() => {
          navigate('/home');
          scrollToTop();
        }}
        variant="ghost" 
        className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm text-white hover:bg-purple-900/40"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Overview
      </Button>
      
      <PresentationLayout totalSlides={TOTAL_SLIDES}>
        <SolveVisionSlide id={0} isActive={false} />
        <SolveProblemSlide id={1} isActive={false} />
        <SolveSolutionSlide id={2} isActive={false} />
        <SolveInteractionModesSlide id={3} isActive={false} />
        <SolveConnectionsSlide id={4} isActive={false} />
        <SolveDifferenceSlide id={5} isActive={false} />
        <SolveLifeImpactSlide id={6} isActive={false} />
        <SolveRealLifeScenariosSlide id={7} isActive={false} />
        <SolveBusinessModelSlide id={8} isActive={false} />
        <SolvePlatformAdvantageSlide id={9} isActive={false} />
        <SolveConclusionSlide id={10} isActive={false} />
      </PresentationLayout>
    </>
  );
};

export default Solve;
