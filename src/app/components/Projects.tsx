import { motion } from 'motion/react';
import maizeGuardImg from 'figma:asset/6120334ce45a2b7b34d837a6386c12a1430e3df8.png';
import resumeBuilderImg from 'figma:asset/141ad1ed5fe0560d8b439f7c1810804bc099daa5.png';
import sentimentImg from 'figma:asset/b805986a3199aa9dcdc3af77c8cf418f1faed8da.png';

interface ProjectsProps {
  onProjectSelect: (projectId: string) => void;
}

export function Projects({ onProjectSelect }: ProjectsProps) {
  const projects = [
    {
      id: 'eskom',
      title: 'Eskom Electricity Demand Forecasting',
      category: 'Machine Learning · Forecasting · Capstone',
      description:
        'National-scale time series forecasting system delivering sub-1% MAPE on hourly electricity demand predictions using 50,000+ operational records.',
      tags: ['LightGBM', 'Time Series', 'Data Engineering', 'API Deployment'],
      image: '',
      accentColor: '#FF6B6B',
    },
    {
      id: 'maize-guard',
      title: 'Maize Guard',
      category: 'Computer Vision · Ethical AI · AgriTech',
      description:
        'AI-powered crop quality and disease detection system supporting agricultural quality control in South Africa\'s maize industry.',
      tags: ['Computer Vision', 'Teachable Machine', 'Image Classification'],
      image: maizeGuardImg,
      accentColor: '#4ECDC4',
    },
    {
      id: 'sentiment',
      title: 'Sentiment-O-Meter',
      category: 'NLP · Transformers · Deployment',
      description:
        'Real-time sentiment analysis application with confidence scoring, demonstrating practical deployment of transformer-based models.',
      tags: ['NLP', 'Transformers', 'Streamlit', 'Real-time Analysis'],
      image: sentimentImg,
      accentColor: '#FFD93D',
    },
    {
      id: 'resume-builder',
      title: 'AI Resume Builder Studio',
      category: 'Applied AI · Career Tech · Product Design',
      description:
        'Intelligent resume generation platform with ATS optimization, helping users create professional, recruiter-ready resumes.',
      tags: ['AI Generation', 'ATS Optimization', 'UX Design', 'PDF Export'],
      image: resumeBuilderImg,
      accentColor: '#FF6B6B',
    },
    {
      id: 'content-generator',
      title: 'Creative Writing Content Generator',
      category: 'Generative AI · Prompt Engineering · UX',
      description:
        'Generative AI system demonstrating how structured prompt engineering enhances creative output for writers and content creators.',
      tags: ['Generative AI', 'Prompt Engineering', 'Creative Tools'],
      image: '',
      accentColor: '#95E1D3',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#2A2A2A]">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Dark Panel */}
        <div className="lg:w-[40%] bg-[#2A2A2A] p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Featured
              <br />
              Projects
            </h2>
            
            <div className="w-24 h-1 bg-white/20 mb-8"></div>
            
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed mb-12">
              Case studies demonstrating technical authority, real-world problem solving, and ethical AI implementation
            </p>

            <div className="space-y-4 text-white/50">
              <p className="text-sm">Java Developer & Applied AI Engineer</p>
              <p className="text-sm">CAPACITI Tech Career Accelerator</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content Panel */}
        <div className="lg:w-[60%] bg-[#F5F5F5] p-8 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#2A2A2A] mb-2">Latest work</h3>
            <div className="w-16 h-0.5 bg-[#2A2A2A]/20"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => onProjectSelect(project.id)}
                className="cursor-pointer group"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-white rounded-sm overflow-hidden mb-4 shadow-sm">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white relative">
                      <div
                        className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20"
                        style={{ backgroundColor: project.accentColor }}
                      ></div>
                      <div
                        className="absolute bottom-8 left-8 w-24 h-24 rounded-sm opacity-10"
                        style={{ backgroundColor: project.accentColor }}
                      ></div>
                      <div className="text-center px-6">
                        <div 
                          className="w-12 h-12 mx-auto mb-3 rounded-sm"
                          style={{ backgroundColor: project.accentColor }}
                        ></div>
                        <p className="text-xs text-[#2A2A2A]/40 font-medium">
                          {project.tags[0]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div>
                  <h4 className="text-lg font-bold text-[#2A2A2A] mb-1 group-hover:text-[#FF6B6B] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#2A2A2A]/50 mb-3">
                    {project.category}
                  </p>
                  <p className="text-sm text-[#2A2A2A]/70 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-[#2A2A2A]/10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-[#4ECDC4] rounded-sm mb-4"></div>
                <h5 className="text-lg font-bold text-[#2A2A2A] mb-2">Technical Authority</h5>
                <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                  Production-ready systems with engineering maturity
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#FF6B6B] rounded-sm mb-4"></div>
                <h5 className="text-lg font-bold text-[#2A2A2A] mb-2">Real-World Impact</h5>
                <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                  Solving critical challenges in infrastructure and agriculture
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#FFD93D] rounded-sm mb-4"></div>
                <h5 className="text-lg font-bold text-[#2A2A2A] mb-2">Ethical AI</h5>
                <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                  Responsible development with bias awareness and privacy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
