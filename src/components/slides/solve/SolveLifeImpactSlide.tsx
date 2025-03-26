import { Clock, BarChart, TrendingUp, Sparkles, Bell } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveLifeImpactSlideProps {
  id: number;
  isActive: boolean;
}

const SolveLifeImpactSlide = ({ id, isActive }: SolveLifeImpactSlideProps) => {
  const impacts = [
    {
      icon: Clock,
      title: "Reclaiming 5+ hours weekly",
      description: "By eliminating app switching and administrative tasks"
    },
    {
      icon: BarChart,
      title: "Reducing digital stress by 45%",
      description: "Through simplified interfaces and proactive management"
    },
    {
      icon: TrendingUp,
      title: "Improving financial outcomes by 30%",
      description: "With comprehensive visibility and optimization"
    },
    {
      icon: Sparkles,
      title: "Enhancing work-life balance",
      description: "By seamlessly integrating personal and professional domains"
    },
    {
      icon: Bell,
      title: "Never missing opportunities",
      description: "With intelligent, proactive alerts for deadlines and opportunities"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Life Impact" 
          subtitle="Tangible Benefits"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2"
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
              Solve transforms daily life with measurable improvements across multiple dimensions.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Life Impact" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Measurable Improvements</h3>
                <p className="text-white/80">Real-world benefits that enhance your quality of life</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 flex items-start"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="rounded-full p-2 mr-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white flex-shrink-0 mt-1">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">{impact.title}</h3>
                    <p className="text-gray-300 text-sm">{impact.description}</p>
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div 
              className="mt-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-lg p-5"
              variants={slideFromBottom(0.6)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-white/90">
                Beyond metrics, Solve creates a sense of control and calm in your digital life, replacing chaos with clarity and intention.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolveLifeImpactSlide;
