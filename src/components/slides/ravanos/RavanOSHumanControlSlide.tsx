import { Shield, Eye, Cog, FileCheck, Users } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface RavanOSHumanControlSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSHumanControlSlide = ({ id, isActive }: RavanOSHumanControlSlideProps) => {
  const controls = [
    {
      icon: Cog,
      title: "Switch seamlessly between AI assistance and manual operation",
      description: "Maintain control while leveraging AI capabilities when needed"
    },
    {
      icon: Eye,
      title: "Maintain oversight and approval of automated processes",
      description: "Critical decisions always remain in human hands"
    },
    {
      icon: Users,
      title: "Intuitive interfaces designed for humans first",
      description: "Technology that adapts to your needs, not the other way around"
    },
    {
      icon: Shield,
      title: "Progressive automation that builds trust through transparency",
      description: "Understand exactly what AI is doing and why"
    },
    {
      icon: FileCheck,
      title: "Full audit trails of all system actions",
      description: "Complete visibility and accountability for all operations"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Human-Centered Control" 
          subtitle="People First, Technology Second"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
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
              RavanOS ensures that humans remain firmly in control while AI handles repetitive tasks and provides intelligent assistance.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.independent.co.uk/2023/08/11/16/2048x1536.png" 
                alt="Human-Centered Control" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Human-AI Partnership</h3>
                <p className="text-white/80">Augmenting human capabilities without replacing human judgment</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="rounded-full p-2 mr-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white self-start mt-1">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{control.title}</h3>
                    <p className="text-sm text-gray-300">{control.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default RavanOSHumanControlSlide;
