import { motion } from 'framer-motion';
import { LucideIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { slideUp, staggerChildren } from '../utils/animationUtils';

interface Feature {
  id: number;
  text: string;
}

interface PlatformComponentProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: Feature[];
  image?: string;
  color: string;
  className?: string;
}

const PlatformComponent = ({
  icon: Icon,
  title,
  description,
  features,
  image,
  color,
  className
}: PlatformComponentProps) => {
  return (
    <div className={cn("flex flex-col md:flex-row items-center md:items-start w-full gap-8", className)}>
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <div className={cn(
          "inline-flex items-center mb-4 px-4 py-2 rounded-full", 
          color === "purple" 
            ? "bg-purple-400/20 text-purple-400" 
            : `bg-${color}-100 text-${color}-800`
        )}>
          <Icon size={20} className="mr-2" />
          <span className="font-medium">{title}</span>
        </div>
        
        <h3 className={cn(
          "text-2xl md:text-3xl font-bold mb-4",
          color === "purple" && "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        )}>{description}</h3>
        
        <motion.ul 
          className="space-y-3 text-left list-none mt-6"
          variants={staggerChildren(0.1)}
        >
          {features.map((feature) => (
            <motion.li 
              key={feature.id}
              className="flex items-start"
              variants={slideUp}
            >
              <div className={cn(
                "rounded-full p-1 mr-3 mt-0.5", 
                color === "purple" 
                  ? "bg-purple-400/20 text-purple-400" 
                  : `bg-${color}-100 text-${color}-800`
              )}>
                <Check size={16} />
              </div>
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      
      {image && (
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative w-full max-w-md p-4">
            <div className={cn(
              "absolute inset-0 rounded-2xl filter blur-xl opacity-30", 
              color === "purple" 
                ? "bg-gradient-to-br from-purple-900/30 to-pink-600/30" 
                : `bg-${color}-500`
            )} />
            <img 
              src={image} 
              alt={title} 
              className="relative z-10 w-full h-auto rounded-xl shadow-xl" 
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PlatformComponent;
