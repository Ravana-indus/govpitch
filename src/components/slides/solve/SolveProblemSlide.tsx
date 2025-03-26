import { AlertTriangle, Smartphone, Clock } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveProblemSlideProps {
  id: number;
  isActive: boolean;
}

const SolveProblemSlide = ({ id, isActive }: SolveProblemSlideProps) => {
  const problems = [
    {
      icon: Smartphone,
      title: "Digital Fragmentation",
      description: "The average person uses over 30 apps monthly, juggling multiple interfaces while constantly switching contexts."
    },
    {
      icon: AlertTriangle,
      title: "Cognitive Overload",
      description: "Managing separate apps for finances, health, communication, and government services creates overwhelming mental load."
    },
    {
      icon: Clock,
      title: "Time Drain",
      description: "Switching between apps, remembering multiple passwords, and navigating inconsistent interfaces wastes precious time."
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Problem" 
          subtitle="Digital Life Fragmentation"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              In today's digital world, we're drowning in apps, passwords, and notifications.
            </motion.p>
            
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Digital Overwhelm" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-white text-2xl font-bold mb-4">App Overload</h3>
                <p className="text-white/80">This isn't just inconvenient—it's robbing us of our most valuable resource: time.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-3">
                    <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{problem.title}</h3>
                  </div>
                  <p className="ml-12 text-gray-300">{problem.description}</p>
                </motion.div>
              );
            })}
            
            <motion.div 
              className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-5 border border-purple-500/20"
              variants={slideFromBottom(0.4)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-white/90">
                We manage our finances in one app, health in another, communicate through five different platforms, and navigate government services through frustrating, outdated portals. When we need to interact with businesses, each has its own app or website requiring yet another account.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolveProblemSlide;
