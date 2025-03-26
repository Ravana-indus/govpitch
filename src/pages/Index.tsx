
import PresentationLayout from '../layouts/PresentationLayout';
import TitleSlide from '../components/slides/TitleSlide';
import ProblemSlide from '../components/slides/ProblemSlide';
import SolutionSlide from '../components/slides/SolutionSlide';
import RavanOSSlide from '../components/slides/RavanOSSlide';
import GovOSSlide from '../components/slides/GovOSSlide';
import SolveSlide from '../components/slides/SolveSlide';
import ConnectedEcosystemSlide from '../components/slides/ConnectedEcosystemSlide';
import AIArchitectureSlide from '../components/slides/AIArchitectureSlide';
import VisionSlide from '../components/slides/VisionSlide';
import TractionSlide from '../components/slides/TractionSlide';
import CallToActionSlide from '../components/slides/CallToActionSlide';

const Index = () => {
  // Define total slides
  const TOTAL_SLIDES = 11;
  
  return (
    <PresentationLayout totalSlides={TOTAL_SLIDES}>
      <TitleSlide id={0} isActive={false} />
      <ProblemSlide id={1} isActive={false} />
      <SolutionSlide id={2} isActive={false} />
      <RavanOSSlide id={3} isActive={false} />
      <GovOSSlide id={4} isActive={false} />
      <SolveSlide id={5} isActive={false} />
      <ConnectedEcosystemSlide id={6} isActive={false} />
      <AIArchitectureSlide id={7} isActive={false} />
      <VisionSlide id={8} isActive={false} />
      <TractionSlide id={9} isActive={false} />
      <CallToActionSlide id={10} isActive={false} />
    </PresentationLayout>
  );
};

export default Index;
