import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn } from '../utils/animationUtils';

interface NavigationControlsProps {
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  className?: string;
}

const NavigationControls = ({
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  className
}: NavigationControlsProps) => {
  return (
    <motion.div 
      className={cn(
        "fixed z-50 flex items-center space-x-3 sm:space-x-4",
        "bottom-8 right-4 sm:right-6 md:right-8",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300",
          canGoPrev 
            ? "bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white cursor-pointer shadow-lg transform hover:scale-105" 
            : "bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-50"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300",
          canGoNext 
            ? "bg-gradient-to-r from-ravan-dark to-ravan hover:opacity-90 text-white cursor-pointer shadow-lg transform hover:scale-105" 
            : "bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-50"
        )}
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:h-6 sm:w-6" />
      </button>
    </motion.div>
  );
};

export default NavigationControls;
