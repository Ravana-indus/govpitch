import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animationUtils';
import { scrollToTop } from '@/utils/navigationUtils';
import { Layers, Building2, BarChart4, Presentation, Rocket, ArrowRight, FileText, BuildingIcon } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const presentations = [
    {
      title: "Dear Government",
      description: "A Letter From Patriotic Citizen",
      route: "/gov",
      gradient: "from-pink-500 to-rose-600",
      icon: BuildingIcon
    },
    {
      title: "Ravan Platform Pitch",
      description: "The Complete Platform Overview",
      route: "/presentation",
      gradient: "from-pink-500 to-rose-600",
      icon: Presentation
    },
    {
      title: "RavanOS",
      description: "The Intelligent Business Operating System",
      route: "/ravanos",
      gradient: "from-purple-500 to-indigo-600",
      icon: Layers
    },
    {
      title: "GovOS",
      description: "Transforming Public Sector Operations",
      route: "/govos",
      gradient: "from-blue-500 to-cyan-600",
      icon: Building2
    },
    {
      title: "Solve",
      description: "Your Life, Simplified",
      route: "/solve",
      gradient: "from-green-500 to-emerald-600",
      icon: BarChart4
    },
    {
      title: "Vision & Business",
      description: "The Open Connected Future",
      route: "/vision",
      gradient: "from-orange-500 to-red-600",
      icon: Rocket
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              variants={slideUp}
              custom={0.1}
            >
              <p className="text-xs sm:text-sm font-medium text-white/80">Explore Our Vision</p>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              variants={slideUp}
              custom={0.2}
            >
              Ravan Platform
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              variants={slideUp}
              custom={0.3}
            >
              Choose a presentation to explore our revolutionary ecosystem connecting businesses, governments, and individuals
            </motion.p>
          </header>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {presentations.map((pres, index) => (
              <motion.div
                key={pres.route}
                variants={slideUp}
                custom={index * 0.1 + 0.4}
                initial="hidden"
                animate="visible"
                className="h-full"
              >
                <Card className="bg-black/30 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group h-full hover:shadow-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:transform hover:scale-[1.02]">
                  <CardHeader className="pb-2 sm:pb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${pres.gradient} text-white shadow-md`}>
                        <pres.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <CardTitle className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${pres.gradient} bg-clip-text text-transparent`}>
                        {pres.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-400 mt-1 sm:mt-2">
                      {pres.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => {
                        navigate(pres.route);
                        scrollToTop();
                      }}
                      className={`w-full bg-gradient-to-r ${pres.gradient} hover:opacity-90 transition-opacity shadow-md group-hover:shadow-lg flex items-center justify-center gap-2`}
                    >
                      <span>Start Presentation</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.footer
            className="mt-10 sm:mt-12 md:mt-16 pb-6 text-center text-xs sm:text-sm text-gray-500"
            variants={fadeIn}
            custom={1.2}
          >
            <p>Ravan Platform &copy; {new Date().getFullYear()} | Connecting the Digital Ecosystem</p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
