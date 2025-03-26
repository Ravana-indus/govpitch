import { Check, Star, Users, Building } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';

interface SolveBusinessModelSlideProps {
  id: number;
  isActive: boolean;
}

const SolveBusinessModelSlide = ({ id, isActive }: SolveBusinessModelSlideProps) => {
  const tiers = [
    {
      icon: Check,
      title: "Essential",
      price: "Free",
      description: "Core functionalities for everyone",
      featured: false
    },
    {
      icon: Star,
      title: "Premium",
      price: "$0.99/month",
      description: "Enhanced features and capabilities",
      featured: true
    },
    {
      icon: Users,
      title: "Family",
      price: "$4.99/month",
      description: "Comprehensive household management",
      featured: false
    },
    {
      icon: Building,
      title: "Students",
      price: "Free",
      description: "With enhanced features and capabilities",
      featured: false
    }
  ];

  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Business Model" 
          subtitle="Balancing Accessibility with Sustainability"
        />
        
        <motion.p 
          className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          Solve offers a tiered approach to ensure everyone can benefit while supporting continued development.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div 
                key={index}
                className={`rounded-lg p-6 ${tier.featured ? 'bg-purple-400/20 border border-purple-400/40' : 'bg-white/5 backdrop-blur-sm border border-white/10'}`}
                variants={slideFromBottom(index * 0.1)}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center mb-4">
                  <div className={`rounded-full p-2 mr-3 ${tier.featured ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{tier.title}</h3>
                </div>
                
                <div className="mb-4">
                  <p className={`text-2xl font-bold ${tier.featured ? 'text-purple-300' : 'text-gray-200'}`}>{tier.price}</p>
                  <p className="text-sm text-gray-400">{tier.description}</p>
                </div>
                
                {tier.featured && (
                  <motion.div 
                    className="mt-4 text-center"
                    variants={slideFromBottom(0.4)}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full">
                      Most Popular
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-8 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-400/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-center">Value-First Philosophy</h3>
          <p className="text-gray-300 text-center">
            Solve believes in a robust free tier that provides genuine value, with premium features that enhance rather than restrict the experience.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolveBusinessModelSlide;
