import { Lock, Network, Shield, ArrowRight } from 'lucide-react';
import Slide from '../../Slide';
import SlideTitle from '../../SlideTitle';
import { motion } from 'framer-motion';
import { slideUp, slideFromBottom } from '../../../utils/animationUtils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/navigationUtils';

interface GovOSConclusionSlideProps {
  id: number;
  isActive: boolean;
}

const GovOSConclusionSlide = ({ id, isActive }: GovOSConclusionSlideProps) => {
  const navigate = useNavigate();
  
  return (
    <Slide id={id} isActive={isActive} className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl w-full">
        <SlideTitle 
          title="Digital Government Transformation" 
          subtitle="The Future of Public Service"
        />
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-base md:text-xl text-gray-200 mb-4 md:mb-6"
              variants={slideUp}
              initial="hidden"
              animate="visible"
            >
              GovOS reimagines public administration by creating an intelligent operating system where government officials and AI work together to serve citizens more effectively.
            </motion.p>
            
            <motion.p 
              className="text-sm md:text-lg text-gray-300 mb-4 md:mb-6"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              What truly sets GovOS apart is its place within the broader Ravan ecosystem. While powerful as a standalone solution, GovOS reaches its full potential as part of this connected platform.
            </motion.p>
            
            <motion.p 
              className="text-sm md:text-lg text-gray-300"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              From small local authorities to national agencies, GovOS provides the collaborative, intelligent tools needed to transform public service delivery—all while ensuring human oversight, accountability, and transparency remain at the heart of governance.
            </motion.p>
            
            <motion.div
              className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4"
              variants={slideFromBottom(0.4)}
              initial="hidden"
              animate="visible"
            >
              <Button
                onClick={() => {
                  navigate('/solve');
                  scrollToTop();
                }}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white px-6 md:px-8"
              >
                <span>Explore Solve</span>
                <ArrowRight className="ml-2" size={16} />
              </Button>
              
              <Button
                onClick={() => {
                  navigate('/ravanos');
                  scrollToTop();
                }}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-6 md:px-8"
              >
                <span>Explore RavanOS</span>
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="relative w-full h-[200px] md:h-[300px]">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Government_Building_%28183900715%29.jpeg" 
                  alt="Government Transformation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white text-base md:text-xl font-bold">Digital Public Services</h3>
                  <p className="text-white/70 text-xs md:text-sm">Intelligent, accessible, and responsive government</p>
                </div>
              </div>
              
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <Network className="text-purple-400 mr-2 md:mr-3 mt-1 w-4 h-4 md:w-5 md:h-5" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold">Connected Ecosystem</h4>
                    <p className="text-xs md:text-sm text-gray-400">Seamless integration between government, business, and citizens</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="text-purple-400 mr-2 md:mr-3 mt-1 w-4 h-4 md:w-5 md:h-5" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold">Human-Centered Control</h4>
                    <p className="text-xs md:text-sm text-gray-400">AI assistance with proper oversight and accountability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default GovOSConclusionSlide;
