import { motion } from 'motion/react';
import { Github, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-[#2A2A2A]/10 rounded-sm">
            <div className="w-2 h-2 bg-[#4ECDC4] rounded-full"></div>
            <span className="text-sm text-[#2A2A2A]/60">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-xl lg:text-2xl text-[#2A2A2A]/50 mb-6">Hi, I'm</p>
          
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-[#2A2A2A] leading-none mb-8">
            Sinenhlahla
            <br />
            Nkosi
          </h1>

          <div className="w-24 h-1 bg-[#FF6B6B] mb-8"></div>

          <h2 className="text-2xl lg:text-4xl text-[#2A2A2A] font-light leading-relaxed max-w-3xl">
            Java Developer & Applied AI Engineer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20"
        >
          <div>
            <p className="text-lg lg:text-xl text-[#2A2A2A]/70 leading-relaxed">
              I design and build intelligent systems from national electricity
              demand forecasting to ethical AI tools in agriculture, NLP, and
              automation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#4ECDC4] rounded-sm flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-1">Technical Authority</h3>
                <p className="text-sm text-[#2A2A2A]/60">Production-ready systems with engineering maturity</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B6B] rounded-sm flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-1">Real-World Impact</h3>
                <p className="text-sm text-[#2A2A2A]/60">Solving critical challenges in infrastructure</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FFD93D] rounded-sm flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-1">Ethical AI</h3>
                <p className="text-sm text-[#2A2A2A]/60">Responsible development with bias awareness</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start gap-6 mb-32"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2A2A2A] text-white rounded-sm hover:bg-[#1A1A1A] transition-colors"
          >
            <span className="font-medium">View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#2A2A2A]/10 text-[#2A2A2A] rounded-sm hover:border-[#2A2A2A]/30 transition-colors"
          >
            <span className="font-medium">Get in Touch</span>
          </button>
        </motion.div>

        {/* Featured Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-[#2A2A2A]/10 pt-16"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold text-[#2A2A2A]/50 mb-4 uppercase tracking-wider">
                Latest Project
              </h3>
              <h4 className="text-2xl font-bold text-[#2A2A2A] mb-3">
                Eskom Electricity Demand Forecasting
              </h4>
              <p className="text-[#2A2A2A]/60 mb-4">
                National-scale time series forecasting system delivering sub-1% MAPE on hourly electricity demand predictions
              </p>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2A2A2A] hover:text-[#FF6B6B] transition-colors"
              >
                <span>View case study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-sm border border-[#2A2A2A]/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#2A2A2A] mb-1">50K+</div>
                    <div className="text-sm text-[#2A2A2A]/60">Data Records</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2A2A2A] mb-1">&lt;1%</div>
                    <div className="text-sm text-[#2A2A2A]/60">MAPE</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2A2A2A] mb-1">4yr</div>
                    <div className="text-sm text-[#2A2A2A]/60">Time Span</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2A2A2A] mb-1">API</div>
                    <div className="text-sm text-[#2A2A2A]/60">Deployment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 pt-12 border-t border-[#2A2A2A]/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-sm text-[#2A2A2A]/50 mb-2">Connect</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/inkosii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2A2A2A] hover:text-[#FF6B6B] transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <span className="text-[#2A2A2A]/20">·</span>
                <a
                  href="mailto:Sinenhlahla.nkosi@capaciti.org.za"
                  className="inline-flex items-center gap-2 text-[#2A2A2A] hover:text-[#FF6B6B] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-[#2A2A2A]/50 mb-1">CAPACITI Tech Career Accelerator</p>
              <p className="text-sm text-[#2A2A2A]/50">Java Developer Trainee</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accent Elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-[#4ECDC4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
