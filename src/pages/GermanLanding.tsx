import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/animationUtils';
import { ArrowRight, Check, TrendingUp, Zap, BarChart, Globe, ArrowLeft, Building2, Network, Users, Target } from 'lucide-react';
import { scrollToTop } from '@/utils/navigationUtils';
import Vathsan from '../img/vathsan.png';

const GermanLanding = () => {
  const navigate = useNavigate();

  const impactMetrics = [
    { title: "German Jobs", description: "75+ high-skilled AI jobs", icon: Users },
    { title: "Revenue Target", description: "€8M (€3M German + €5M International)", icon: BarChart },
    { title: "Sri Lankan Jobs", description: "200+ technical positions", icon: Building2 },
    { title: "Export Channel", description: "€2.5M annual technology export", icon: Globe },
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
            <p className="text-sm font-medium text-white/80">A Vision Born of Resilience</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            RAVAN PLATFORM: BRIDGING WORLDS THROUGH AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A Vision Born of Resilience, Powered by German Innovation
          </p>
        </motion.header>

        <motion.section 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <p className="text-gray-300 mb-6">
              As a Sri Lankan who survived a three-decade civil war, the 2004 tsunami, the 2019 Easter attacks, and a devastating economic meltdown, I've learned that resilience isn't just about surviving - it's about creating opportunity from chaos. When I lost my successful business during Sri Lanka's economic collapse, Germany offered me not just free education, but a second chance.
            </p>
            <p className="text-gray-300 mb-6">
              I call Sri Lanka my Motherland and Germany my Fatherland - and through Ravan Platform, I aim to bring prosperity to both by empowering business, government and individuals worldwide.
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
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">WHY WE DO THIS</h2>
            <p className="text-gray-200">
              <strong>The global digital landscape remains fragmented and inefficient.</strong> Businesses, governments, and individuals operate in isolated systems that prevent true optimization.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">HOW WE DO THIS</h2>
            <p className="text-gray-200">
              <strong>We're creating the world's first truly connected ecosystem</strong> through three interlocking platforms: RavanOS, GovOS, and Solve.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-600/30 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">WHAT WE DO</h2>
            <p className="text-gray-200">
              <strong>The Ravan Platform revolutionizes how organizations operate</strong> by replacing fragmented systems with a unified environment where AI agents optimize across traditional boundaries.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach:</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "Connects typically siloed systems across businesses, governments, and individuals",
                "Democratizes access to enterprise-grade AI for organizations of all sizes",
                "Creates unprecedented optimization opportunities through non-siloed data",
                "Builds a vibrant developer ecosystem where innovation is rewarded",
                "Establishes German leadership in the platform economy"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
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
          <h2 className="text-3xl font-bold mb-8 text-center">2-YEAR IMPACT TARGETS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{metric.title}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">For Germany:</h3>
              <ul className="space-y-4">
                {[
                  "Create 75+ high-skilled jobs in AI development and business operations",
                  "Establish Germany's first globally-adopted AI platform ecosystem",
                  "Generate €3M in revenue from German businesses and €5M from international markets",
                  "Position German technology as the ethical alternative to Silicon Valley and Chinese platforms",
                  "Develop cutting-edge AI research partnerships with German universities"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">For Sri Lanka:</h3>
              <ul className="space-y-4">
                {[
                  "Create 200+ technical jobs with German-level professional development",
                  "Establish a technology export channel worth €2.5M annually",
                  "Build capacity for local innovation through knowledge transfer",
                  "Showcase Sri Lankan talent on the global technology stage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
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
          custom={0.5}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">PROGRESS TO DATE:</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "MVP development: Core platform architecture completed, with first modules functioning",
                "Early customer interest: 10+ German SMEs expressing interest in beta program",
                "Technical validation: Architecture review completed by AI experts from TU Berlin",
                "Initial team: 6-person core team spanning Germany and Sri Lanka with combined 45+ years in software development",
                "Strategic partnerships: Discussions with two German industry associations for pilot programs"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
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
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">€100,000 initial funding</h3>
            <p className="text-white mb-6">
              (part of a €1M seed round) to accelerate:
            </p>
            <ul className="space-y-4">
              {[
                "Complete MVP development and launch beta program with German businesses",
                "Expand German team with key technical and business development hires",
                "Establish legal framework for Sri Lankan R&D operations",
                "Develop go-to-market strategy for German and EU markets"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Workshops & Networking</h3>
            <p className="text-white mb-6">
              To connect with:
            </p>
            <ul className="space-y-4">
              {[
                "Potential enterprise customers in German manufacturing and logistics sectors",
                "Technical partners for specialized AI capabilities",
                "Government stakeholders for GovOS development input"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Mentorship</h3>
            <p className="text-white mb-6">
              In:
            </p>
            <ul className="space-y-4">
              {[
                "Navigating German B2B and public sector sales cycles",
                "EU funding opportunities for open-source technology",
                "Building an effective dual-country operation"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
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
          custom={0.7}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">INVESTMENT BENEFITS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Global Market Potential",
                description: "Addressing combined markets worth over €900B (Enterprise Software, Government Digitization, Super-App Ecosystem)"
              },
              {
                title: "Dual-Market Advantage",
                description: "Leveraging German quality standards and innovation with Sri Lankan technical talent and cost efficiency"
              },
              {
                title: "Platform Economics",
                description: "Strong network effects as each new participant increases value for all others"
              },
              {
                title: "Open-Source Sustainability",
                description: "Core platform drives adoption while marketplace and premium services create sustainable revenue"
              },
              {
                title: "ESG Impact",
                description: "Democratizing access to AI for developing nations while establishing ethical standards led by German values"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
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
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">Pathurjan Wijeyasekara</h3>
                  <p className="text-xl font-semibold mb-4 text-purple-400">Founder & CEO</p>
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto md:mx-0 flex items-center justify-center">
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
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://www.joel.lk/_next/image?url=%2Fjoel.PNG&w=828&q=90" 
                    alt="Joel Jerushan" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-blue-400">Joel Jerushan</h3>
                  <p className="text-lg font-semibold mb-3 text-purple-400">Co-founder & CTO</p>
                  <p className="text-gray-300">
                    Joel is one of Sri Lanka's top engineering talents and a TechCrunch-featured software architect. Founder of app-dev.lk, he's built scalable systems for international clients. With a BEng in Software Engineering from London Metropolitan University, Joel ensures Ravan's tech vision is executed with precision and built to scale.
                  </p>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXF_W6dmOlpLQ59Pn4oq3aoBYP_M6ubsBHg&s" 
                    alt="Nithish Kumar Suresh" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-blue-400">Nithish Kumar Suresh</h3>
                  <p className="text-lg font-semibold mb-3 text-purple-400">Chief of User Experience</p>
                  <p className="text-gray-300">
                  A 3D artist and interactive designer from Hochschule Darmstadt, Nithish blends creativity with tech to craft intuitive and immersive user experiences. With a background in game development and visual design, he ensures Ravan's platform feels seamless, engaging, and human-centered.
                  </p>
                </div>
              </div>
            </div>

            {/* Chief of AI Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://bookface-images.s3.amazonaws.com/avatars/1c68ed727ecfe46e04c26bc98e133b017211bd98.jpg" 
                    alt="Andrew Costa" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-blue-400">Andrew Costa</h3>
                  <p className="text-lg font-semibold mb-3 text-purple-400">Chief of AI</p>
                  <p className="text-gray-300">
                    Born in China to an American father and Japanese mother, Andrew brings a truly global perspective to AI. With a Master's in AI from the University of Shanghai, his expertise in contextual intelligence and multi-agent systems powers Ravan's AI Agent First architecture—designed to work across languages, cultures, and business environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Chief of Marketing Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={Vathsan} 
                    alt="Vathsan Sharma" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-blue-400">Vathsan Sharma</h3>
                  <p className="text-lg font-semibold mb-3 text-purple-400">Chief of Marketing</p>
                  <p className="text-gray-300">
                    An engineer-turned-marketer, Vathsan holds a Mechatronics degree from SLTC and launched his own successful food brand before joining Ravan. He leads brand and marketing strategy with a mix of creative instinct and technical insight, helping Ravan connect meaningfully with diverse audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-600/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 md:p-8">
            <p className="text-white mb-6">
              As someone who has experienced both devastation and rebirth, I bring a unique perspective to building technology that truly serves humanity. With Germany's innovation ecosystem and Sri Lanka's technical talent, Ravan Platform can establish a new paradigm of inclusive digital transformation - with Germany leading the way into the AI era.
            </p>
            <div className="text-white/80">
              <p className="font-bold">Pathurjan Wijeyasekara | Founder & CEO</p>
              <p>Contact: patu@ravanaindustries.com | +49 174 9570 945</p>
            </div>
          </div>
        </motion.section>

      
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.9}
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
          custom={1.0}
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

export default GermanLanding; 