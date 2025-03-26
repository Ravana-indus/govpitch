import { AlertTriangle, Layers, Shield } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, staggerChildren } from '../../../utils/animationUtils';

interface GovOSChallengeSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSChallengeSlide = ({ id, isActive }: GovOSChallengeSlideProps) => {
  const challenges = [
    { id: 1, text: "Siloed departments creating fragmented citizen experiences" },
    { id: 2, text: "Legacy systems resistant to modernization and integration" },
    { id: 3, text: "Complex regulatory requirements causing process bottlenecks" },
    { id: 4, text: "Limited resources struggling to meet increasing service demands" },
    { id: 5, text: "Paper-based processes causing delays and errors" },
    { id: 6, text: "Lack of real-time data for informed policy decisions" },
    { id: 7, text: "Difficulty adapting to rapidly changing public needs" },
    { id: 8, text: "Limited accessibility for citizens with varying technical abilities" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Challenge" 
          subtitle="Government Operational Challenges"
        />
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-start justify-center mb-10"
          variants={staggerChildren(0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full md:w-1/2"
            variants={slideUp}
          >
            <motion.p className="text-xl text-gray-200 mb-6">
              Governments worldwide face critical operational challenges that impact effectiveness at all levels—from local municipalities to national institutions—resulting in citizen frustration and operational inefficiency.
            </motion.p>
            
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Government Complexity" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm">Legacy systems and processes create unnecessary bureaucracy and inefficiency</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            variants={slideUp}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle size={20} className="mr-2 text-purple-400" />
              Key Challenges
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildren(0.05)}
            >
              {challenges.map((challenge) => (
                <motion.li 
                  key={challenge.id}
                  className="flex items-start"
                  variants={slideUp}
                >
                  <div className="rounded-full bg-purple-400/20 p-1 mr-3 mt-0.5">
                    <AlertTriangle size={12} className="text-purple-400" />
                  </div>
                  <span className="text-gray-200">{challenge.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default GovOSChallengeSlide;
