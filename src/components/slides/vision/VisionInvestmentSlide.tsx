import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Code, TrendingUp, Shield, PieChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface VisionInvestmentSlideProps {
  id: number;
  isActive: boolean;
}

const VisionInvestmentSlide = ({ id, isActive }: VisionInvestmentSlideProps) => {
  const fundingAllocation = [
    { 
      name: "Product Modification", 
      percentage: 45, 
      amount: "€450K",
      details: [
        "Complete core platform modification for each use case",
        "Build developer tools and marketplace infrastructure",
        "Enhance AI agent capabilities"
      ]
    },
    { 
      name: "Go-to-Market", 
      percentage: 30, 
      amount: "€300K",
      details: [
        "Initial sales team for business customer acquisition",
        "Government relationship development",
        "Marketing and awareness campaigns"
      ]
    },
    { 
      name: "Operations & Infrastructure", 
      percentage: 15, 
      amount: "€150K",
      details: [
        "Cloud infrastructure and scaling capabilities",
        "Security and compliance frameworks",
        "Operational team expansion"
      ]
    },
    { 
      name: "Reserves", 
      percentage: 10, 
      amount: "€100K",
      details: [
        "Working capital",
        "Contingency planning",
        "Opportunity fund for strategic moves"
      ]
    }
  ];

  const valueProps = [
    {
      icon: TrendingUp,
      title: "Multiple Exit Pathways",
      points: [
        "Strategic acquisition by enterprise software companies",
        "IPO potential as platform achieves scale",
        "Secondary market opportunities as valuation increases"
      ]
    },
    {
      icon: Shield,
      title: "Sustainable Competitive Advantage",
      points: [
        "Network effects: Each new entity increases value for all",
        "Data advantage: Non-siloed approach creates optimization opportunities",
        "Open ecosystem: Attracts developers and creates innovation flywheel"
      ]
    },
    {
      icon: PieChart,
      title: "Massive Market Potential",
      points: [
        "Addressing multiple billion-dollar markets simultaneously",
        "Platform approach creates exponential rather than linear growth",
        "Subscription and transaction-based revenue provides predictable scaling"
      ]
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Investment Opportunity" 
          subtitle="€1 Million Seed Round"
        />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-4">Funding Allocation</h3>
            
            <div className="space-y-5">
              {fundingAllocation.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  variants={slideFromBottom(index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{item.name}</h4>
                    <div className="flex items-center">
                      <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mr-2">{item.percentage}%</span>
                      <span className="text-sm text-gray-300">{item.amount}</span>
                    </div>
                  </div>
                  
                  <Progress value={item.percentage} className="h-2 mb-3 bg-white/10" />
                  
                  <ul className="space-y-1 text-sm text-gray-300">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-purple-400">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Investor Value Proposition</h3>
            
            <div className="space-y-4">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                    variants={slideFromBottom(index * 0.1 + 0.3)}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex items-center mb-3">
                      <div className="rounded-full p-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-3">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold">{prop.title}</h4>
                    </div>
                    
                    <ul className="space-y-1 text-sm text-gray-300 ml-11">
                      {prop.points.map((point, i) => (
                        <li key={i} className="list-disc">{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
              
              <motion.div 
                className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 mt-5"
                variants={slideFromBottom(0.6)}
                initial="hidden"
                animate="visible"
              >
                <h4 className="font-semibold mb-2">Expected Returns</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span>
                    Target valuation at Series A: €25-30M (12-18 months)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span>
                    5-year projected valuation: €500M-€1B
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-400">•</span>
                    Potential ROI for seed investors: 20-40x
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default VisionInvestmentSlide;
