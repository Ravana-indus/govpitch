import { motion } from 'framer-motion';
import Slide from '../Slide';
import SlideTitle from '../SlideTitle';
import { slideFromBottom } from '../../utils/animationUtils';

interface TractionSlideProps {
  id: number;
  isActive: boolean;
}

const TractionSlide = ({ id, isActive }: TractionSlideProps) => {
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <SlideTitle 
        title="Traction & Validation" 
        subtitle="Market Progress"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
          variants={slideFromBottom(0)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold mb-4">Current Partners & Users</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
              <span>10+ active beta customers across Sri Lanka and Canada</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
              <span>In discussions with Sri Lanka's Ministry of Digital Economy</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
              <span>Founders with proven track records in digital products</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5"
          variants={slideFromBottom(0.2)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold mb-4">Development Roadmap</h3>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-purple-400/30"></div>
            
            <div className="mb-4 relative">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-purple-400"></div>
              <h4 className="font-medium">Q2 2025: RavanOS Full Release</h4>
              <p className="text-sm text-gray-300">Complete platform launch with all core features</p>
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-purple-300"></div>
              <h4 className="font-medium">Q3 2025: GovOS Beta</h4>
              <p className="text-sm text-gray-300">Limited release with key government partners</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-purple-400/50"></div>
              <h4 className="font-medium">Q1 2026: Solve Launch</h4>
              <p className="text-sm text-gray-300">AI optimization tools for all platform users</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5 max-w-6xl w-full md:col-span-2"
          variants={slideFromBottom(0.4)}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold mb-4">Business Model</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/5">
              <h4 className="font-medium text-purple-400 mb-2">Open-Source Core</h4>
              <p className="text-sm text-gray-300">
                With premium features, commissions from transactions, and API usage fees
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5">
              <h4 className="font-medium text-purple-400 mb-2">Enterprise Services</h4>
              <p className="text-sm text-gray-300">
                Hosting, support, and customization packages for large organizations
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-white/5">
              <h4 className="font-medium text-purple-400 mb-2">Government Partnerships</h4>
              <p className="text-sm text-gray-300">
                Digital transformation initiatives and public sector modernization
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default TractionSlide;
