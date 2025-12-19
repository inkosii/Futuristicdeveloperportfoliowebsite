import { motion } from 'motion/react';
import { Code, Brain, Shield, Target } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'Java Development', level: 85 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Engineering', level: 80 },
    { name: 'NLP & Computer Vision', level: 85 },
  ];

  return (
    <section className="relative min-h-screen bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-[#2A2A2A] mb-6">About</h2>
          <div className="w-24 h-1 bg-[#4ECDC4]"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2A2A2A] mb-6">My Journey</h3>
                <div className="space-y-4 text-lg text-[#2A2A2A]/70 leading-relaxed">
                  <p>
                    I'm Sinenhlahla Nkosi, a Java Developer trainee and Applied AI
                    Engineer passionate about building intelligent systems that solve
                    real-world problems.
                  </p>
                  <p>
                    Through the CAPACITI Tech Career Accelerator program, I've developed
                    expertise in machine learning, data engineering, and ethical AI
                    implementation from forecasting national electricity demand to
                    creating agricultural AI solutions.
                  </p>
                  <p>
                    My approach combines technical rigor with ethical awareness, ensuring
                    that every system I build is not only powerful but also responsible
                    and accessible.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="pt-8 border-t border-[#2A2A2A]/10">
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-6">Core Expertise</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-[#2A2A2A]">{skill.name}</span>
                        <span className="text-sm text-[#2A2A2A]/50">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-[#2A2A2A]/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-[#2A2A2A] rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-32">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-8">What Drives Me</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-sm border border-[#2A2A2A]/10">
                  <div className="w-10 h-10 bg-[#4ECDC4] rounded-sm mb-4"></div>
                  <h4 className="text-lg font-bold text-[#2A2A2A] mb-2">Technical Authority</h4>
                  <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                    Building production-ready systems with engineering maturity and best practices.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#2A2A2A]/10">
                  <div className="w-10 h-10 bg-[#FF6B6B] rounded-sm mb-4"></div>
                  <h4 className="text-lg font-bold text-[#2A2A2A] mb-2">Real-world Problem Solving</h4>
                  <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                    Tackling critical challenges in infrastructure, agriculture, and automation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#2A2A2A]/10">
                  <div className="w-10 h-10 bg-[#FFD93D] rounded-sm mb-4"></div>
                  <h4 className="text-lg font-bold text-[#2A2A2A] mb-2">Ethical AI</h4>
                  <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                    Committed to responsible AI development with bias awareness and privacy protection.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm border border-[#2A2A2A]/10">
                  <div className="w-10 h-10 bg-[#95E1D3] rounded-sm mb-4"></div>
                  <h4 className="text-lg font-bold text-[#2A2A2A] mb-2">Continuous Growth</h4>
                  <p className="text-sm text-[#2A2A2A]/60 leading-relaxed">
                    Always learning, always improving, always pushing boundaries.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Goals Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#2A2A2A]/10 pt-16"
        >
          <div className="bg-[#2A2A2A] p-12 lg:p-16 rounded-sm">
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Looking Forward
            </h3>
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
              I'm seeking opportunities to apply my skills in machine learning, data
              engineering, and AI development to create meaningful impact. Whether it's
              optimizing national infrastructure, advancing agricultural technology, or
              building intelligent automation tools, I'm ready to contribute to projects
              that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
