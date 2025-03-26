import React, { ReactNode, isValidElement, cloneElement, ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationControls from '../components/NavigationControls';
import ProgressIndicator from '../components/ProgressIndicator';
import { useSlideNavigation } from '../utils/navigationUtils';

interface PresentationLayoutProps {
  children: ReactNode;
  totalSlides: number;
  initialSlide?: number;
}

// Define a type for the props we'll pass to each slide
interface SlideProps {
  isActive: boolean;
  id: number;
  className?: string;
  [key: string]: any; // Allow any other props
}

const PresentationLayout = ({
  children,
  totalSlides,
  initialSlide = 0
}: PresentationLayoutProps) => {
  const {
    currentSlide,
    goToSlide,
    goToNextSlide,
    goToPrevSlide
  } = useSlideNavigation(totalSlides, initialSlide);

  // Clone and enhance each child with its active state
  const enhancedChildren = React.Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<SlideProps>, {
        isActive: index === currentSlide,
        id: index
      });
    }
    return child;
  });

  return (
    <div className="relative bg-gradient-to-br from-black to-gray-900 min-h-screen w-full overflow-x-hidden">
      <div className="slide-container w-full h-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          {enhancedChildren}
        </AnimatePresence>
      </div>
      
      <NavigationControls
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
        canGoNext={currentSlide < totalSlides - 1}
        canGoPrev={currentSlide > 0}
      />
      
      <ProgressIndicator
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
      />
    </div>
  );
};

export default PresentationLayout;
