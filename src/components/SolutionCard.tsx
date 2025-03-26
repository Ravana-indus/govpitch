import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { slideFromBottom } from '../utils/animationUtils';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  index: number;
  className?: string;
}

const SolutionCard = ({
  icon: Icon,
  title,
  description,
  details,
  index,
  className
}: SolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={cn(
        "rounded-xl overflow-hidden backdrop-blur-md border border-white/10 bg-white/5 transition-all duration-300",
        isExpanded ? "shadow-lg" : "shadow",
        className
      )}
      variants={slideFromBottom(index * 0.2)}
      initial="hidden"
      animate="visible"
      layout
    >
      <motion.div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        layout
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
        <p className="text-sm text-gray-200">{description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="mt-4 pt-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm leading-relaxed">{details}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SolutionCard;
