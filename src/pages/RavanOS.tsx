import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PresentationLayout from '../layouts/PresentationLayout';
import RavanOSVisionSlide from '../components/slides/ravanos/RavanOSVisionSlide';
import RavanOSProblemSlide from '../components/slides/ravanos/RavanOSProblemSlide';
import RavanOSConnectedIntelligenceSlide from '../components/slides/ravanos/RavanOSConnectedIntelligenceSlide';
import RavanOSAIAgentsSlide from '../components/slides/ravanos/RavanOSAIAgentsSlide';
import RavanOSArchitectureSlide from '../components/slides/ravanos/RavanOSArchitectureSlide';
import RavanOSHumanControlSlide from '../components/slides/ravanos/RavanOSHumanControlSlide';
import RavanOSAdaptabilitySlide from '../components/slides/ravanos/RavanOSAdaptabilitySlide';
import RavanOSEcosystemSlide from '../components/slides/ravanos/RavanOSEcosystemSlide';
import RavanOSCompetitiveAdvantageSlide from '../components/slides/ravanos/RavanOSCompetitiveAdvantageSlide';
import RavanOSImpactSlide from '../components/slides/ravanos/RavanOSImpactSlide';
import RavanOSConclusionSlide from '../components/slides/ravanos/RavanOSConclusionSlide';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

const RavanOS = () => {
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
        <RavanOSVisionSlide id={0} isActive={false} />
        <RavanOSProblemSlide id={1} isActive={false} />
        <RavanOSConnectedIntelligenceSlide id={2} isActive={false} />
        <RavanOSAIAgentsSlide id={3} isActive={false} />
        <RavanOSArchitectureSlide id={4} isActive={false} />
        <RavanOSHumanControlSlide id={5} isActive={false} />
        <RavanOSAdaptabilitySlide id={6} isActive={false} />
        <RavanOSEcosystemSlide id={7} isActive={false} />
        <RavanOSCompetitiveAdvantageSlide id={8} isActive={false} />
        <RavanOSImpactSlide id={9} isActive={false} />
        <RavanOSConclusionSlide id={10} isActive={false} />
      </PresentationLayout>
    </>
  );
};

export default RavanOS;
