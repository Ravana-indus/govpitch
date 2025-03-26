import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { slideVariants } from '../utils/animationUtils';

interface SlideProps {
  id: number;
  isActive: boolean;
  children: ReactNode;
  className?: string;
}

const Slide = ({ id, isActive, children, className }: SlideProps) => {
  return (
    <motion.div
      className={cn(
        "slide w-full min-h-screen flex flex-col items-center",
        isActive ? 'slide-active' : 'slide-inactive',
        className
      )}
      key={id}
      initial={isActive ? 'initial' : 'exit'}
      animate={isActive ? 'animate' : 'exit'}
      exit="exit"
      variants={slideVariants}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center gap-8">
        {children}
      </div>
    </motion.div>
  );
};

export default Slide;
