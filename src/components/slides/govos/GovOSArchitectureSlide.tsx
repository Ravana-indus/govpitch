import { Users, Building2, Award, User } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSArchitectureSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSArchitectureSlide = ({ id, isActive }: GovOSArchitectureSlideProps) => {
  const levels = [
    {
      icon: User,
      title: "Civil Servant Level",
      features: [
        "Role-specific tools for government employees",
        "Simplified processing of forms and requests",
        "AI assistance for regulatory compliance"
      ]
    },
    {
      icon: Users,
      title: "Department Level",
      features: [
        "Specialized capabilities for each government function",
        "Cross-agency collaboration and knowledge sharing",
        "Department-specific analytics and performance metrics"
      ]
    },
    {
      icon: Award,
      title: "Leadership Level",
      features: [
        "Organization-wide intelligence for policy makers",
        "Data-driven insights for strategic planning",
        "Cross-departmental performance monitoring"
      ]
    },
    {
      icon: Building2,
      title: "Citizen Level",
      features: [
        "Secure connections to citizens through Solve app",
        "Business interface for regulatory compliance",
        "Transparent, accessible government services"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Multi-Level Intelligent Architecture" 
          subtitle="Specialized Capabilities for All Stakeholders"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-3">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{level.title}</h3>
                </div>
                
                <motion.ul 
                  className="space-y-2"
                  variants={staggerChildren(0.05)}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {level.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-300 flex items-start"
                      variants={slideUp}
                    >
                      <div className="rounded-full bg-purple-400/20 p-1 mr-2 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="GovOS Architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Layered Intelligence</h3>
              <p className="text-white/80">GovOS provides specialized capabilities at every level of government operations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSArchitectureSlide;
