import { MessageSquare, Bot, GitBranch } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSAIServiceSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSAIServiceSlide = ({ id, isActive }: GovOSAIServiceSlideProps) => {
  const modes = [
    {
      icon: MessageSquare,
      title: "Chat Mode",
      description: "Natural language interface for government information",
      features: [
        "Natural language queries for instant information access",
        "Citizens and officials can easily find regulations and procedures",
        "Contextual awareness of user role and authorization level",
        "Simplified access to complex government information"
      ]
    },
    {
      icon: GitBranch,
      title: "Com Mode",
      description: "AI-assisted collaboration",
      features: [
        "AI-facilitated communication between departments and agencies",
        "Collaborative workspaces for cross-department initiatives",
        "Intelligent routing of citizen inquiries to appropriate departments",
        "Automated documentation of decisions and processes"
      ]
    },
    {
      icon: Bot,
      title: "Agent Mode",
      description: "Autonomous task execution",
      features: [
        "Delegate routine tasks to AI agents that execute across systems",
        "Automate workflows spanning multiple government entities",
        "Proactive alerts for compliance deadlines and requirements",
        "Service optimization with proper human oversight"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="AI-Powered Public Service" 
          subtitle="Intuitive Interface with Specialized Modes"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
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
                  <div>
                    <h3 className="text-xl font-semibold">{mode.title}</h3>
                    <p className="text-sm text-gray-400">{mode.description}</p>
                  </div>
                </div>
                
                <motion.ul 
                  className="space-y-2 ml-4"
                  variants={staggerChildren(0.05)}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {mode.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-300 flex items-start"
                      variants={slideUp}
                    >
                      <div className="rounded-full bg-purple-400/20 p-1 mr-2 mt-0.5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 rounded-lg p-6 bg-white/5 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center text-gray-300">
            GovOS features an interface inspired by modern developer tools, enabling both citizens and government officials to interact with public services through natural language and intelligent assistance.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSAIServiceSlide;
