import { motion } from 'framer-motion';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import ConnectedEcosystem from '../ConnectedEcosystem';
import { slideFromBottom } from '../../utils/animationUtils';

interface ConnectedEcosystemSlideProps {
  id: number;
  isActive: boolean;
}

const ConnectedEcosystemSlide = ({ id, isActive }: ConnectedEcosystemSlideProps) => {
  // Ecosystem nodes and connections for the visualization
  const ecosystemNodes = [
    { id: 'ravanos', label: 'RavanOS', x: 500, y: 200, color: '#8B5CF6' },
    { id: 'govos', label: 'GovOS', x: 300, y: 600, color: '#6D28D9' },
    { id: 'solve', label: 'Solve', x: 700, y: 600, color: '#4C1D95' },
  ];
  
  const ecosystemConnections = [
    { 
      id: 1, 
      from: 'ravanos', 
      to: 'govos', 
      label: 'Data Flow', 
      description: 'Secured data sharing between private businesses and government systems for compliance, verification, and streamlined services.' 
    },
    { 
      id: 2, 
      from: 'ravanos', 
      to: 'solve', 
      label: 'Integration', 
      description: 'Seamless connection between businesses and consumers, enabling direct service delivery and personalized experiences.' 
    },
    { 
      id: 3, 
      from: 'govos', 
      to: 'solve', 
      label: 'Insights', 
      description: 'Simplified government services directly accessible to citizens, reducing bureaucracy and improving public service delivery.' 
    },
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="The Connected Ecosystem" 
        subtitle="True Integration"
      />
      
      <ConnectedEcosystem 
        nodes={ecosystemNodes}
        connections={ecosystemConnections}
      />
      
      <div className="mt-12 text-center max-w-3xl">
        <motion.p 
          className="text-lg text-gray-300 mb-4"
          variants={slideFromBottom(0.3)}
          initial="hidden"
          animate="visible"
        >
          What makes Ravan revolutionary isn't just these individual components – it's how they work together. 
          When businesses, governments, and individuals operate on the same platform, with AI agents trained 
          on non-siloed data, the possibilities become endless.
        </motion.p>
       
      </div>
    </Slide>
  );
};

export default ConnectedEcosystemSlide;
