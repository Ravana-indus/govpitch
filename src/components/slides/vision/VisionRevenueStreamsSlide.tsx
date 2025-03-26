import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Store, Headset, Server, Code, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface VisionRevenueStreamsSlideProps {
  id: number;
  isActive: boolean;
}

const VisionRevenueStreamsSlide = ({ id, isActive }: VisionRevenueStreamsSlideProps) => {
  const isMobile = useIsMobile();
  
  const revenueStreams = [
    {
      icon: Store,
      name: "Marketplace Commissions",
      percentage: "35%",
      details: [
        "15-30% commission on paid apps/modules",
        "Transaction fees on inter-platform commerce (0.5-2%)",
        "Listing fees for premium placement"
      ]
    },
    {
      icon: Headset,
      name: "Premium Services",
      percentage: "25%",
      details: [
        "Enterprise support packages",
        "Service level agreements",
        "Custom implementation services",
        "Training and certification programs"
      ]
    },
    {
      icon: Server,
      name: "Hosting & Infrastructure",
      percentage: "20%",
      details: [
        "Cloud hosting for platform components",
        "High-availability deployment options",
        "Data management and backup services",
        "Performance optimization services"
      ]
    },
    {
      icon: Code,
      name: "API & Usage-Based Pricing",
      percentage: "15%",
      details: [
        "Tiered API access beyond free allocations",
        "Computing resources for AI agent operations",
        "Advanced analytics and reporting capabilities",
        "Integration services with legacy systems"
      ]
    },
    {
      icon: Layers,
      name: "Consumer Subscriptions",
      percentage: "5%",
      details: [
        "Freemium model for Solve super-app",
        "Premium features and enhanced capabilities",
        "Family plans and business accounts",
        "White-label opportunities"
      ],
      highlight: true,
      note: "Growing"
    }
  ];

  const projections = [
    { year: 1, revenue: "€1.2M", growth: "-", milestone: "Platform Launch, 100+ businesses onboarded" },
    { year: 2, revenue: "€4.8M", growth: "300%", milestone: "Government agency adoption, 1,000+ businesses" },
    { year: 3, revenue: "€12M", growth: "150%", milestone: "Marketplace launch, 10,000+ businesses" },
    { year: 4, revenue: "€35M", growth: "192%", milestone: "International expansion, 100,000+ businesses" },
    { year: 5, revenue: "€85M", growth: "143%", milestone: "Mass consumer adoption, 1M+ Solve users" }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full px-4 md:px-6 overflow-y-auto max-h-[calc(100vh-150px)]">
        <SlideTitle 
          title="Revenue Streams" 
          subtitle="Sustainable Growth Model"
          className="mb-6 md:mb-8"
        />
        
        <motion.p 
          className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 text-center"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          The Ravan Platform's business model creates multiple, complementary revenue streams.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <motion.div 
                key={index}
                className={cn(
                  "rounded-lg overflow-hidden border backdrop-blur-sm", 
                  stream.highlight ? "border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-pink-600/30" : "border-white/10 bg-white/5"
                )}
                variants={slideFromBottom(index * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className={cn(
                  "p-2 md:p-4 flex items-center",
                  stream.highlight ? "bg-gradient-to-r from-purple-400/30 to-pink-500/30" : "bg-white/5"
                )}>
                  <div className={cn(
                    "rounded-full p-1 md:p-2 mr-2 md:mr-3",
                    stream.highlight ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white" : "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                  )}>
                    <Icon size={isMobile ? 16 : 20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base md:text-lg font-semibold">{stream.name}</h3>
                    <div className="flex items-center">
                      <span className={cn(
                        "text-lg md:text-xl font-bold",
                        stream.highlight ? "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" : "text-gray-200"
                      )}>{stream.percentage}</span>
                      {stream.note && (
                        <span className="text-xs ml-2 px-2 py-0.5 bg-purple-400/20 text-purple-400 rounded-full">
                          {stream.note}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-2 md:p-4">
                  <ul className="space-y-1">
                    {stream.details.map((detail, i) => (
                      <li key={i} className="text-xs md:text-sm text-gray-300 flex items-start">
                        <span className="mr-2 text-purple-400">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20"
          variants={slideFromBottom(0.6)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-lg md:text-xl font-bold p-2 md:p-4 bg-black/30">Revenue Projections</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-black/40">
                <tr>
                  <th className="p-2 md:p-3 text-left">Year</th>
                  <th className="p-2 md:p-3 text-left">Annual Revenue</th>
                  <th className="p-2 md:p-3 text-left">Growth</th>
                  <th className="p-2 md:p-3 text-left">Key Milestone</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-black/20" : "bg-black/10"}>
                    <td className="p-2 md:p-3 font-medium">{row.year}</td>
                    <td className="p-2 md:p-3 text-purple-400 font-bold">{row.revenue}</td>
                    <td className="p-2 md:p-3">{row.growth}</td>
                    <td className="p-2 md:p-3 text-gray-300">{row.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default VisionRevenueStreamsSlide;
