import { Layers, Users, Building, ExternalLink } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface RavanOSArchitectureSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSArchitectureSlide = ({ id, isActive }: RavanOSArchitectureSlideProps) => {
  const levels = [
    {
      icon: Users,
      title: "User Level",
      features: [
        "Personalized assistance tailored to individual roles",
        "Role-specific insights and recommendations",
        "Learning from user preferences and patterns"
      ]
    },
    {
      icon: Building,
      title: "Department Level",
      features: [
        "Specialized capabilities for each business function",
        "Cross-user collaboration and knowledge sharing",
        "Department-specific optimization and analytics"
      ]
    },
    {
      icon: Layers,
      title: "Executive Level",
      features: [
        "Organization-wide intelligence for leadership",
        "Strategic insights and forecasting",
        "Cross-departmental performance monitoring"
      ]
    },
    {
      icon: ExternalLink,
      title: "External Level",
      features: [
        "Secure connections to suppliers, customers, and partners",
        "Government interface for compliance and reporting",
        "Public-facing capabilities for customer engagement"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Multi-Level Intelligent Architecture" 
          subtitle="Layered Intelligence"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Multi-Level Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-white text-3xl font-bold mb-4">Layered Intelligence</h3>
                <p className="text-white/80 max-w-md">From individual tasks to strategic decisions, RavanOS provides intelligent assistance at every level of your organization.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <motion.div 
                  key={level.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-2">
                    <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold">{level.title}</h3>
                  </div>
                  <ul className="space-y-1 ml-12 text-sm text-gray-300">
                    {level.features.map((feature, i) => (
                      <li key={i} className="list-disc">{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default RavanOSArchitectureSlide;
