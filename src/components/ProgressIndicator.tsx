import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick?: (index: number) => void;
  className?: string;
}

const ProgressIndicator = ({
  totalSlides,
  currentSlide,
  onSlideClick,
  className
}: ProgressIndicatorProps) => {
  return (
    <motion.div 
      className={cn(
        "fixed bottom-8 left-0 right-0 mx-auto z-50 flex items-center justify-center",
        "w-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%]",
        "px-4 py-2 rounded-full bg-black/30 backdrop-blur-md",
        className
      )}
      style={{ width: 'fit-content' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.25 }}
    >
      <div className="flex items-center justify-center space-x-2 overflow-x-auto px-1 py-1 scrollbar-hide">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideClick?.(index)}
            className={cn(
              "transition-all duration-300 rounded-full border flex-shrink-0",
              index === currentSlide
                ? "w-10 h-3 bg-gradient-to-r from-purple-500 to-ravan border-white/30"
                : "w-3 h-3 bg-white/30 hover:bg-white/50 border-white/20 hover:scale-110"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProgressIndicator;
