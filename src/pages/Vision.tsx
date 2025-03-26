import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PresentationLayout from '../layouts/PresentationLayout';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';
import VisionOpenEcosystemSlide from '../components/slides/vision/VisionOpenEcosystemSlide';
import VisionMarketplaceSlide from '../components/slides/vision/VisionMarketplaceSlide';
import VisionMarketOpportunitySlide from '../components/slides/vision/VisionMarketOpportunitySlide';
import VisionRevenueStreamsSlide from '../components/slides/vision/VisionRevenueStreamsSlide';
import VisionInvestmentSlide from '../components/slides/vision/VisionInvestmentSlide';
import VisionConclusionSlide from '../components/slides/vision/VisionConclusionSlide';

const Vision = () => {
  const navigate = useNavigate();
  const TOTAL_SLIDES = 6;
  
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
        <VisionOpenEcosystemSlide id={0} isActive={false} />
        <VisionMarketplaceSlide id={1} isActive={false} />
        <VisionMarketOpportunitySlide id={2} isActive={false} />
        <VisionRevenueStreamsSlide id={3} isActive={false} />
        <VisionInvestmentSlide id={4} isActive={false} />
        <VisionConclusionSlide id={5} isActive={false} />
      </PresentationLayout>
    </>
  );
};

export default Vision;
