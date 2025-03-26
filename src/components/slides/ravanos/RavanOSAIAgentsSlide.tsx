import { MessageSquare, GitBranch, Bot } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import ais from '../../../img/ai.jpg';

interface RavanOSAIAgentsSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSAIAgentsSlide = ({ id, isActive }: RavanOSAIAgentsSlideProps) => {
  const modes = [
    {
      icon: MessageSquare,
      title: "Chat Mode",
      description: "Natural language interface for business data",
      features: [
        "Natural language queries for instant information access",
        "\"Ask anything\" approach to business data",
        "Contextual awareness of user role and needs",
        "Simplified data retrieval without complex search parameters"
      ]
    },
    {
      icon: GitBranch,
      title: "Com Mode",
      description: "AI-assisted collaboration",
      features: [
        "AI-facilitated communication between teams and departments",
        "Collaborative workspaces with intelligent assistance",
        "Context-aware suggestions during discussions",
        "Automated documentation and knowledge capture"
      ]
    },
    {
      icon: Bot,
      title: "Agent Mode",
      description: "Autonomous task execution",
      features: [
        "Delegate tasks to AI agents that execute across systems",
        "Automate complex workflows spanning multiple departments",
        "Proactive alerts and recommendations",
        "AI-powered process optimization with human oversight"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="AI Agents Working Alongside Humans" 
          subtitle="Interface Inspired by Modern Developer Tools"
        />
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://media.freemalaysiatoday.com/wp-content/uploads/2023/08/c682c4ca-ai-chatgpt-freepik.jpg" 
                alt="AI Agents Interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">AI-First Interface</h3>
                <p className="text-white/80">Intelligent assistants that understand your business context</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {modes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <motion.div 
                  key={mode.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-4 last:mb-0"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-2">
                    <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{mode.title}</h3>
                      <p className="text-sm text-gray-300">{mode.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1 ml-12 text-sm text-gray-300">
                    {mode.features.map((feature, i) => (
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

export default RavanOSAIAgentsSlide;
