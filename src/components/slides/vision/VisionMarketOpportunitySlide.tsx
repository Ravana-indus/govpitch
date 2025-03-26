import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { BarChart3, TrendingUp } from 'lucide-react';

interface VisionMarketOpportunitySlideProps {
  id: number;
  isActive: boolean;
}

const VisionMarketOpportunitySlide = ({ id, isActive }: VisionMarketOpportunitySlideProps) => {
  const markets = [
    {
      name: "Enterprise Software",
      value: "€545 Billion",
      segments: [
        { name: "Business management software", value: "€247B", growth: "11.8% CAGR" },
        { name: "Supply chain management", value: "€28B", growth: "11.2% CAGR" },
        { name: "ERP systems", value: "€50B", growth: "9.7% CAGR" }
      ]
    },
    {
      name: "Government Digitization",
      value: "€132 Billion",
      segments: [
        { name: "E-government solutions", value: "€57B", growth: "14.2% CAGR" },
        { name: "Digital public services", value: "€75B", growth: "12.8% CAGR" }
      ]
    },
    {
      name: "Super-App Ecosystem",
      value: "€310 Billion",
      segments: [
        { name: "Digital wallets and payments", value: "€143B", growth: "23.5% CAGR" },
        { name: "Personal digital assistants", value: "€7.3B", growth: "32.1% CAGR" },
        { name: "App marketplaces", value: "€160B", growth: "15.4% CAGR" }
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Market Opportunity" 
          subtitle="Multi-Trillion Dollar Addressable Market"
        />
        
        <motion.p 
          className="text-lg text-gray-200 mb-6 text-center"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          The total addressable market for the Ravan Platform spans multiple high-growth segments.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {markets.map((market, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
              variants={slideFromBottom(index * 0.1)}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-gradient-to-r from-purple-400/30 to-pink-500/30 p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{market.name}</h3>
                  <BarChart3 className="text-purple-400" size={20} />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{market.value}</div>
              </div>
              
              <div className="p-4 space-y-3">
                {market.segments.map((segment, i) => (
                  <div key={i} className="border-b border-white/10 last:border-0 pb-2 last:pb-0">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{segment.name}</span>
                      <span className="font-medium">{segment.value}</span>
                    </div>
                    <div className="flex items-center text-xs text-purple-400">
                      <TrendingUp size={12} className="mr-1" />
                      {segment.growth}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
          variants={slideFromBottom(0.5)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Our Addressable Segments</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Initial Focus</h4>
              <p className="text-sm text-gray-300">Small to medium businesses and local government agencies</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Expansion</h4>
              <p className="text-sm text-gray-300">Enterprise customers and national government agencies</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Long-term</h4>
              <p className="text-sm text-gray-300">Mass consumer adoption of the Solve super-app</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default VisionMarketOpportunitySlide;
