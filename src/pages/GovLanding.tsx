import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animationUtils';
import { ArrowRight, Check, TrendingUp, Zap, BarChart, Globe, ArrowLeft, Users } from 'lucide-react';
import { scrollToTop } from '@/utils/navigationUtils';
import Vathsan from '../img/vathsan.png';

const GovLanding = () => {
  const navigate = useNavigate();

  const impactMetrics = [
    { title: "Digitized Public Sector", description: "40%+ increase in productivity", icon: Zap },
    { title: "GDP Increase", description: "At least 2% boost to national GDP", icon: TrendingUp },
    { title: "New Jobs", description: "200,000 new jobs created", icon: BarChart },
    { title: "Foreign Income", description: "$50 Million generated", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-sm font-medium text-white/80">Startup-Style Solution</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            SRI LANKA'S DISRUPTED ECONOMY NEEDS A DISRUPTIVE PLAN
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We can't wait years to change this, so here is a startup-style solution.
          </p>
          
          <div className="mt-6 inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
            <p className="text-lg md:text-xl font-bold text-white">THE GOOD NEWS IS! WE ALREADY HAVE IT, ONLY NEEDS IMPLEMENTATION.</p>
          </div>
        </motion.header>

        <motion.section 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <p className="text-gray-300 mb-6">
              We are a small team of patriots, who were lucky enough to benefit from free education and build a decent startup in Sri Lanka that has expanded to North America and Europe.
            </p>
            <p className="text-gray-300 mb-6">
              With the help of German's free education I had the opportunity to travel the world and see how advanced other nations are. My homeland and its hardworking citizens deserve the same or better quality of life. While my Sri Lankan passport is treated badly at every border as our politicians do monkey dancing with the economy, we have dedicated our entire revenue to building a solution that will fix Lanka in a way that's realistically achievable.
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">WHY</h2>
            <p className="text-gray-200">
              <strong>Sri Lanka and its citizens deserve a better life, Higher GDP, and GDP per capita.</strong>
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">HOW</h2>
            <p className="text-gray-200">
              <strong>By making Sri Lanka an AI-native Government and Business solution powerhouse in the next 5 years through Public-Private partnership.</strong>
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-600/30 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">WHAT</h2>
            <p className="text-gray-200">
              <strong>We have created a comprehensive solution that will revolutionize Sri Lanka's digital landscape.</strong>
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">We have created a comprehensive solution that will:</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "Digitize Sri Lankan Government, Business, and Society at a fraction of cost and in a faster timeline",
                "Eliminate inefficiency and corruption in all sectors and promote transparency",
                "Create foreign income by providing the same solution to Governments, Businesses, and people globally",
                "Bring in foreign direct investment to build more solutions",
                "Create 200,000 jobs in the next 2 years for Sri Lankan talent",
                "Empower Sri Lankan developers to benefit from our open ecosystem"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">WITHIN 2 YEARS OF IMPLEMENTATION:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{metric.title}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "Every inch of public sector will be digitalized, connected in real-time, powered by AI",
                "All SMEs from street fruit vendors to conglomerates will be powered by the same system at minimal cost",
                "Public will access all government and SME services through a single platform",
                "Digital payments, recycling, public transport, tax filing, and all interactions will be 100% digital",
                "Advanced R&D opportunities at state universities established",
                "Tax base broadened and compliance improved"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">PROGRESS TO DATE:</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "The solution is READY! Not conceptual — BUILT and FUNCTIONAL",
                "Developed using open source resources and startup grants from major companies",
                "Initiated institutional partnerships",
                "Established foundation for North American and European expansion",
                "Market-tested and proven viable",
                "Made solution open source and publicly auditable",
                "Secured interest from European incubators and VCs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">WHAT WE'RE ASKING:</h2>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 md:p-8 mb-8">
            <p className="text-white mb-6">
              We have everything needed to launch globally for businesses worldwide. We've bootstrapped, invested, and attracted potential investors. If we accept foreign funding, we'll become a German business, creating a billion-euro company paying taxes to the German government. Only 50,000 jobs will reach Sri Lanka. We'll be rich — end of story.
            </p>
            <p className="text-white font-bold mb-6">
              But we want our nation to take advantage of our innovation because that's where this idea was born.
            </p>
            <p className="text-white mb-6">
              We want the government to invest first through a Sovereign wealth fund — a new-age public-private partnership like Singapore, Dubai, and India are doing!
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">We need:</h3>
            <ul className="space-y-4 mb-6">
              {[
                "$1 Million in 3 stages (in LKR) as an investment (not grants, not tax cuts) for 17% non-controlling stake (just 10% of 2025 digitization budget, only 3% this year)",
                "Access to public sector human resources for implementation (utilize existing Development Officers)",
                "No interference from ICTA and other national IT agencies — if they could do it, they would have done it already"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-bold mb-4 text-white">BENEFITS TO SRI LANKA:</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <ul className="space-y-4">
                {[
                  "17% ownership in a potential future Fortune 500 company",
                  "Digitization of public sector at no extra cost",
                  "Private sector digitization and efficiency gains",
                  "Increased tax income from entire business operation",
                  "Reduced corruption and improved public satisfaction",
                  "Elevated global standing in Artificial Intelligence",
                  "Sustainable GDP and GDP per capita growth",
                  "Faster loan settlements and financial system efficiency"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">VISIONARY FOUNDING TEAM</h2>
          
          {/* CEO Card - Larger and more prominent */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">Pathurjan Wijeyasekara</h3>
                  <p className="text-xl font-semibold mb-4 text-pink-400">Founder & CEO</p>
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto md:mx-0 flex items-center justify-center">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58JOadz-EQlzsM7ImjQu3taRYypGq8pLExg&s" 
                      alt="Pathurjan Wijeyasekara" 
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 mb-4">
                    A survivor of Sri Lanka's civil war, tsunami, Easter attacks, and economic crisis, Pathurjan brings unmatched resilience and a global mindset to Ravan.
                  </p>
                  <p className="text-gray-300">
                    With experience across tech, branding, filmmaking, and management, he has founded three successful startups In Sri Lanka, Canada, and Germany —Quantum and Lightspeed, Ravana Industries, and Brandsitter.ca. Educated in filmmaking (Darmstadt University) and brand strategy (Miami Ad School), he leads Ravan with a human-centered, cross-cultural approach to innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CTO Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://www.joel.lk/_next/image?url=%2Fjoel.PNG&w=828&q=90" 
                    alt="Joel Jerushan" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-purple-400">Joel Jerushan</h3>
                  <p className="text-lg font-semibold mb-3 text-pink-400">Co-founder & CTO</p>
                  <p className="text-gray-300">
                    Joel is one of Sri Lanka's top engineering talents and a TechCrunch-featured software architect. Founder of app-dev.lk, he's built scalable systems for international clients. With a BEng in Software Engineering from London Metropolitan University, Joel ensures Ravan's tech vision is executed with precision and built to scale.
                  </p>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXF_W6dmOlpLQ59Pn4oq3aoBYP_M6ubsBHg&s" 
                    alt="Nithish Kumar Suresh" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-purple-400">Nithish Kumar Suresh</h3>
                  <p className="text-lg font-semibold mb-3 text-pink-400">Chief of User Experience</p>
                  <p className="text-gray-300">
                    A 3D artist and interactive designer from Hochschule Darmstadt, Nithish blends creativity with tech to craft intuitive and immersive user experiences. With a background in game development and visual design, he ensures Ravan's platform feels seamless, engaging, and human-centered.
                  </p>
                </div>
              </div>
            </div>

            {/* Chief of AI Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://bookface-images.s3.amazonaws.com/avatars/1c68ed727ecfe46e04c26bc98e133b017211bd98.jpg" 
                    alt="Andrew Costa" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-purple-400">Andrew Costa</h3>
                  <p className="text-lg font-semibold mb-3 text-pink-400">Chief of AI</p>
                  <p className="text-gray-300">
                    Born in China to an American father and Japanese mother, Andrew brings a truly global perspective to AI. With a Master's in AI from the University of Shanghai, his expertise in contextual intelligence and multi-agent systems powers Ravan's AI Agent First architecture—designed to work across languages, cultures, and business environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Chief of Marketing Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={Vathsan} 
                    alt="Vathsan Sharma" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-purple-400">Vathsan Sharma</h3>
                  <p className="text-lg font-semibold mb-3 text-pink-400">Chief of Marketing</p>
                  <p className="text-gray-300">
                    An engineer-turned-marketer, Vathsan holds a Mechatronics degree from SLTC and launched his own successful food brand before joining Ravan. He leads brand and marketing strategy with a mix of creative instinct and technical insight, helping Ravan connect meaningfully with diverse audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Other Team Members Section */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-blue-400">Our Extended Team</h3>
                <p className="text-gray-300">
                  And 16 other team members consist of developers, customer relation officers, creative heads, management, finance and HR staff
                </p>
              </div>
            </div>
          </div>

        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <p className="text-white mb-6">
              Our approach is inspired by South Korea and Singapore's economic growth strategies. It's Sri Lanka's time in the Artificial Intelligence Era. We aim to be the Samsung of Lanka (Samsung Group's assets represent about 22% of South Korea's GDP).
            </p>
            <p className="text-white font-bold mb-6">
              If this government is also skeptical and unwilling to take a 0.0012% of GDP investment opportunity (which most would seize), our fallback request is:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-200">A low-interest loan approval for 80 Million LKR (as Sri Lankan banks won't fund startups) with a 2-year grace period</span>
              </li>
            </ul>
            <p className="text-white/80 mt-6 italic">
              This flyer is our final resort after repeated failed attempts to reach decision-makers. If this also fails, we will make this public, accept German funding, and relocate our business.
            </p>
          </div>
        </motion.section>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="flex justify-center mb-8"
        >
          <Button 
            onClick={() => {
              navigate('/home');
              scrollToTop();
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 transition-opacity px-8 py-6 text-lg shadow-lg flex items-center justify-center gap-2"
          >
            <span>Click here to see the detailed pitch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        
        <motion.footer
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="text-center text-sm text-gray-500"
        >
          <p>Ravan Platform &copy; {new Date().getFullYear()} | Connecting the Digital Ecosystem</p>
        </motion.footer>

        <Button 
          onClick={() => {
            navigate('/home');
            scrollToTop();
          }}
          variant="ghost" 
          className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Button>
      </div>
    </div>
  );
};

export default GovLanding; 