import { Shield, FileCheck, EyeOff, Fingerprint, Scale } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSControlSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSControlSlide = ({ id, isActive }: GovOSControlSlideProps) => {
  const controls = [
    {
      icon: Shield,
      title: "Complete oversight of automated processes by authorized officials",
      description: "Every AI-driven process can be monitored and controlled by authorized personnel, ensuring accountability and proper use."
    },
    {
      icon: FileCheck,
      title: "Clear audit trails for accountability and transparency",
      description: "Comprehensive logging of all system actions for full transparency, compliance, and historical reference."
    },
    {
      icon: Scale,
      title: "Progressive automation with appropriate checks and balances",
      description: "Gradual implementation of automation with safeguards in place to ensure proper operation and human oversight."
    },
    {
      icon: EyeOff,
      title: "Privacy-preserving data management",
      description: "Strong data protection measures that ensure citizen information is handled with the highest level of security and privacy."
    },
    {
      icon: Fingerprint,
      title: "Compliance with all relevant regulations and laws",
      description: "Built-in regulatory compliance features that adapt to the legal requirements of each jurisdiction."
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Human-Centered Control" 
          subtitle="Governance and Accountability"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {controls.map((control, index) => {
            const Icon = control.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-3 mt-1">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{control.title}</h3>
                    <p className="text-gray-400 text-sm">{control.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 rounded-lg p-6 bg-white/5 backdrop-blur-sm border border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">Trust Through Transparency</h3>
          <p className="text-gray-300">
            GovOS balances advanced AI capabilities with robust human oversight, ensuring that digital government remains accountable, transparent, and trusted by citizens.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSControlSlide;
