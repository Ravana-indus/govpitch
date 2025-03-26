import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { ShoppingBag, BookOpen, DollarSign, Users } from 'lucide-react';

interface VisionMarketplaceSlideProps {
  id: number;
  isActive: boolean;
}

const VisionMarketplaceSlide = ({ id, isActive }: VisionMarketplaceSlideProps) => {
  const marketplaceFeatures = [
    {
      icon: BookOpen,
      title: "Build",
      description: "Specialized modules for specific industries"
    },
    {
      icon: Users,
      title: "Share",
      description: "Open source extensions that benefit the community"
    },
    {
      icon: DollarSign,
      title: "Sell",
      description: "Premium features and specialized integrations"
    },
    {
      icon: ShoppingBag,
      title: "Connect",
      description: "Directly with customers seeking custom solutions"
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="The Marketplace" 
          subtitle="Innovation Ecosystem"
        />
        
        <motion.p 
          className="text-xl text-gray-200 mb-6 text-center max-w-4xl mx-auto"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          The Ravan Marketplace will serve as a vibrant hub where developers can create, share, and monetize innovations.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {marketplaceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                variants={slideFromBottom(index * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center mb-3">
                  <div className="rounded-full p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 ml-16">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          variants={slideFromBottom(0.5)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Inter-Platform Commerce</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">B2B Transactions</h4>
              <p className="text-sm text-gray-300">Between companies using RavanOS</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">G2B Interactions</h4>
              <p className="text-sm text-gray-300">Between government agencies and businesses</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-semibold mb-2">C2B/C2G Relationships</h4>
              <p className="text-sm text-gray-300">Between individuals and organizations</p>
            </div>
          </div>
          
          <p className="text-center text-gray-300 mt-4">
            Each transaction generates value for all participants while contributing sustainably to platform maintenance and growth.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default VisionMarketplaceSlide;
