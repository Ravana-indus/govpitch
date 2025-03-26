import { Network, Database, Globe } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface RavanOSEcosystemSlideProps {
  id: number;
  isActive: boolean;
}

const RavanOSEcosystemSlide = ({ id, isActive }: RavanOSEcosystemSlideProps) => {
  const ecosystemAdvantages = [
    {
      title: "Seamless Integration with GovOS and Solve",
      icon: Network,
      features: [
        "Direct connections to government services through GovOS",
        "Customer interactions via the Solve super-app",
        "End-to-end visibility across business, government, and consumer touchpoints"
      ]
    },
    {
      title: "Non-Siloed Data Ecosystem",
      icon: Database,
      features: [
        "AI agents with unprecedented access to cross-platform data",
        "Supply chain optimization with visibility beyond your organization",
        "Contextual intelligence informed by the broader business environment",
        "Regulatory compliance facilitated by direct government connections"
      ]
    },
    {
      title: "Connected Business Network",
      icon: Globe,
      features: [
        "Frictionless collaboration with other businesses on the Ravan platform",
        "Streamlined supplier and customer relationships",
        "Community-driven innovation and shared improvements",
        "Ecosystem-wide optimization opportunities"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Ravan Platform Advantage" 
          subtitle="Beyond Standalone Solutions"
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
              As part of the comprehensive Ravan ecosystem, RavanOS offers unique benefits impossible with standalone solutions.
            </motion.p>
            
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Ecosystem Advantage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-white text-3xl font-bold mb-4">Integrated Ecosystem</h3>
                <p className="text-white/80 max-w-xs">When business, government, and consumer systems connect, entirely new possibilities emerge</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {ecosystemAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
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
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-12 text-gray-300">
                    {advantage.features.map((feature, i) => (
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

export default RavanOSEcosystemSlide;
