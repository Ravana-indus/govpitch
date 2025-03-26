import { useCallback, useEffect, useState } from 'react';

export type SlideDirection = 'next' | 'prev' | 'none';

// Helper function to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const useSlideNavigation = (totalSlides: number, initialSlide = 0) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState<SlideDirection>('none');
  const [transitioning, setTransitioning] = useState(false);

  const goToSlide = useCallback((slideIndex: number) => {
    if (transitioning || slideIndex === currentSlide) return;
    if (slideIndex < 0 || slideIndex >= totalSlides) return;
    
    setTransitioning(true);
    setDirection(slideIndex > currentSlide ? 'next' : 'prev');
    
    // Small delay to allow animation to complete
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setTransitioning(false);
    }, 500);
  }, [currentSlide, transitioning, totalSlides]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case ' ':
        e.preventDefault();
        goToNextSlide();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        goToPrevSlide();
        break;
      case 'Escape':
        e.preventDefault();
        goToSlide(0);
        break;
      default:
        // Check if key is a number and within range
        const numKey = parseInt(e.key);
        if (!isNaN(numKey) && numKey >= 1 && numKey <= totalSlides) {
          goToSlide(numKey - 1);
        }
        break;
    }
  }, [goToNextSlide, goToPrevSlide, goToSlide, totalSlides]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Set up touch navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX - touchStartX > 100) {
        // Swiped right
        goToPrevSlide();
      } else if (touchStartX - touchEndX > 100) {
        // Swiped left
        goToNextSlide();
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return {
    currentSlide,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    direction,
    transitioning
  };
};
