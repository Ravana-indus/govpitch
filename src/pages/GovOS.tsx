import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PresentationLayout from '../layouts/PresentationLayout';
import GovOSVisionSlide from '../components/slides/govos/GovOSVisionSlide';
import GovOSChallengeSlide from '../components/slides/govos/GovOSChallengeSlide';
import GovOSConnectedGovernanceSlide from '../components/slides/govos/GovOSConnectedGovernanceSlide';
import GovOSAIServiceSlide from '../components/slides/govos/GovOSAIServiceSlide';
import GovOSArchitectureSlide from '../components/slides/govos/GovOSArchitectureSlide';
import GovOSControlSlide from '../components/slides/govos/GovOSControlSlide';
import GovOSAdaptabilitySlide from '../components/slides/govos/GovOSAdaptabilitySlide';
import GovOSPlatformAdvantageSlide from '../components/slides/govos/GovOSPlatformAdvantageSlide';
import GovOSImplementationSlide from '../components/slides/govos/GovOSImplementationSlide';
import GovOSAdvantageSlide from '../components/slides/govos/GovOSAdvantageSlide';
import GovOSImpactSlide from '../components/slides/govos/GovOSImpactSlide';
import GovOSConclusionSlide from '../components/slides/govos/GovOSConclusionSlide';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

const GovOS = () => {
  const navigate = useNavigate();
  const TOTAL_SLIDES = 12;
  
  return (
    <>
      <Button 
        onClick={() => {
          navigate('/');
          scrollToTop();
        }}
        variant="ghost" 
        className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm text-white hover:bg-purple-900/40"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Overview
      </Button>
      
      <PresentationLayout totalSlides={TOTAL_SLIDES}>
        <GovOSVisionSlide id={0} isActive={false} />
        <GovOSChallengeSlide id={1} isActive={false} />
        <GovOSConnectedGovernanceSlide id={2} isActive={false} />
        <GovOSAIServiceSlide id={3} isActive={false} />
        <GovOSArchitectureSlide id={4} isActive={false} />
        <GovOSControlSlide id={5} isActive={false} />
        <GovOSAdaptabilitySlide id={6} isActive={false} />
        <GovOSPlatformAdvantageSlide id={7} isActive={false} />
        <GovOSImplementationSlide id={8} isActive={false} />
        <GovOSAdvantageSlide id={9} isActive={false} />
        <GovOSImpactSlide id={10} isActive={false} />
        <GovOSConclusionSlide id={11} isActive={false} />
      </PresentationLayout>
    </>
  );
};

export default GovOS;
