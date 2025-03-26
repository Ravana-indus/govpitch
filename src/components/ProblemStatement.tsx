import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { slideFromBottom } from '../utils/animationUtils';

interface ProblemStatementProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

const ProblemStatement = ({
  icon: Icon,
  title,
  description,
  index,
  className
}: ProblemStatementProps) => {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5 flex items-start space-x-4",
        className
      )}
      variants={slideFromBottom(index * 0.2)}
      initial="hidden"
      animate="visible"
    >
      <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProblemStatement;
