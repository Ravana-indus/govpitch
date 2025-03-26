import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { slideUp } from '../utils/animationUtils';

interface SlideTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SlideTitle = ({ 
  title, 
  subtitle, 
  className,
  centered = true 
}: SlideTitleProps) => {
  return (
    <motion.div 
      className={cn(
        "w-full mb-8 sm:mb-10 md:mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
      variants={slideUp}
      initial="hidden"
      animate="visible"
    >
      {subtitle && (
        <h2 className="text-sm sm:text-base md:text-lg font-medium text-gray-400 mb-2">
          {subtitle}
        </h2>
      )}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 sm:mt-5 md:mt-6" 
        style={{ marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}
      />
    </motion.div>
  );
};

export default SlideTitle;
