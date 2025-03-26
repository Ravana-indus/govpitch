import { Sun, Landmark, Stethoscope, FileSpreadsheet, Building2 } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveRealLifeScenariosSlideProps {
  id: number;
  isActive: boolean;
}

const SolveRealLifeScenariosSlide = ({ id, isActive }: SolveRealLifeScenariosSlideProps) => {
  const scenarios = [
    {
      icon: Sun,
      title: "Morning Routine",
      description: "Wake up to a personalized brief of your day: weather, calendar, news, health insights, and traffic—all tailored to your preferences. Your coffee machine starts automatically while Solve reads out your schedule and priorities."
    },
    {
      icon: Landmark,
      title: "Financial Management",
      description: "Instead of juggling multiple banking apps, Solve provides a unified view of all accounts, automatically categorizes expenses, and offers optimization opportunities: \"You could save $50 monthly by switching these subscriptions.\""
    },
    {
      icon: Stethoscope,
      title: "Healthcare Navigation",
      description: "Solve manages appointments, medication reminders, and insurance claims in one place. Need to see a specialist? Solve finds in-network providers, checks availability against your calendar, and books the appointment with one confirmation."
    },
    {
      icon: FileSpreadsheet,
      title: "Government Interactions",
      description: "Passport renewals, tax filings, license updates—Solve guides you through each process, prepares necessary documents, and submits applications directly through secure GovOS integration."
    },
    {
      icon: Building2,
      title: "Business Interactions",
      description: "Customer service issues are handled through a single interface regardless of the company. Need to return an item? Solve initiates the process, schedules pickup, and tracks your refund—all without downloading another app."
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Real-Life Scenarios" 
          subtitle="Practical Applications"
        />
        
        <motion.p 
          className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          See how Solve transforms everyday experiences into something extraordinary.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.slice(0, 4).map((scenario, index) => {
            const Icon = scenario.icon;
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
                  <h3 className="text-lg font-semibold">{scenario.title}</h3>
                </div>
                <p className="text-sm text-gray-300 ml-11">{scenario.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-lg p-5"
          variants={slideFromBottom(0.5)}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-start">
            <div className="rounded-full p-2 mr-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mt-1">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{scenarios[4].title}</h3>
              <p className="text-sm text-gray-300">{scenarios[4].description}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-center text-gray-400 mt-8 italic"
          variants={slideFromBottom(0.6)}
          initial="hidden"
          animate="visible"
        >
          These scenarios represent just a small sample of how Solve simplifies complex processes across your entire life.
        </motion.p>
      </div>
    </Slide>
  );
};

export default SolveRealLifeScenariosSlide;
