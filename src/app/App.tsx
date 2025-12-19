import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Contact } from './components/Contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />

      {/* Sections */}
      <div id="home">
        <Hero onNavigate={scrollToSection} />
      </div>

      <div id="projects">
        <Projects onProjectSelect={setSelectedProject} />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative bg-[#2A2A2A] border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Sinenhlahla Nkosi. Designed and built with passion.
            </p>
            <p className="text-white/40 text-sm">
              Java Developer & Applied AI Engineer
            </p>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            projectId={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}