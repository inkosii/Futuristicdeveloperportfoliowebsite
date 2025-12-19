import { motion } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import maizeGuardImg from 'figma:asset/6120334ce45a2b7b34d837a6386c12a1430e3df8.png';
import resumeBuilderImg from 'figma:asset/141ad1ed5fe0560d8b439f7c1810804bc099daa5.png';
import sentimentImg from 'figma:asset/b805986a3199aa9dcdc3af77c8cf418f1faed8da.png';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const projectData: Record<string, any> = {
    'eskom': {
      title: 'Eskom Electricity Demand Forecasting',
      subtitle: 'National-Scale Time Series Forecasting System',
      category: 'Data Engineering · Machine Learning · Forecasting',
      timeline: 'Capstone Project',
      overview: 'An end-to-end AI forecasting system answering a critical national infrastructure question: How much electricity must Eskom generate every hour and can we forecast it accurately using real data?',
      problem: 'Accurate electricity demand forecasting is essential for grid stability, cost efficiency, and load-shedding prevention. Traditional forecasting methods struggle to adapt to complex temporal patterns and external variability.',
      solution: 'A robust forecasting pipeline that transforms raw operational data into actionable demand predictions using advanced machine learning techniques.',
      technical: [
        'Over 50,000 hourly demand records (2018–2022)',
        'Extensive data cleaning and validation',
        'Time-based feature engineering (hour, day, seasonality)',
        'LightGBM forecasting model',
        'Sub-1% Mean Absolute Percentage Error (MAPE)',
        'Model auditing and performance evaluation',
        'API-ready deployment architecture'
      ],
      impact: [
        'Improved forecasting accuracy for grid operations',
        'Support for operational planning and resource allocation',
        'Potential reduction in load-shedding risk',
        'Demonstrates production-grade ML thinking'
      ],
      tags: ['LightGBM', 'Time Series', 'Python', 'Data Engineering', 'API Deployment'],
      image: '',
    },
    'maize-guard': {
      title: 'Maize Guard',
      subtitle: 'AI-Powered Crop Quality & Disease Detection System',
      category: 'Computer Vision · Ethical AI · Agriculture Tech',
      timeline: 'Early Bootcamp Project (Week 2)',
      overview: 'Maize Guard is an AI-powered computer vision prototype designed to assist farmers, inspectors, and agricultural stakeholders in identifying maize kernel quality and potential crop disease patterns.',
      problem: 'Traditional crop inspection relies heavily on human judgment, which introduces inconsistency, fatigue, and bias. In regions where access to expert agricultural inspectors is limited, early-stage crop defects or disease indicators are often missed, leading to reduced yields and financial loss.',
      solution: 'Maize Guard uses image-based AI classification to analyze maize kernels and categorize them into healthy, broken, or defective classes. The system simulates a real-world AI pipeline from data ingestion to inference and output interpretation.',
      technical: [
        'Image classification using Teachable Machine',
        'Dataset creation and labeling for maize kernel conditions',
        'Confidence score outputs to support decision-making',
        'Structured inference flow: image input → model evaluation → classification result',
        'Prototype dashboard concept for scalable deployment'
      ],
      ethical: [
        'Analysis of bias in region-specific training data',
        'POPIA-aligned data handling and image privacy',
        'Risks of over-automation in farming decisions',
        'Accessibility for rural and low-connectivity environments',
        'Environmental considerations of AI model training'
      ],
      tags: ['Computer Vision', 'Teachable Machine', 'Image Classification', 'Ethical AI'],
      image: maizeGuardImg,
    },
    'sentiment': {
      title: 'Sentiment-O-Meter',
      subtitle: 'Real-Time NLP Sentiment Analysis Application',
      category: 'NLP · Transformers · Model Deployment',
      timeline: 'Week 5',
      overview: 'A lightweight natural language processing application that classifies text sentiment in real time, demonstrating practical deployment of transformer-based models for everyday analytical use cases.',
      problem: 'Understanding sentiment at scale is critical for feedback analysis, customer engagement, and social monitoring, yet many solutions are either overly complex or inaccessible.',
      solution: 'A simple, responsive interface that allows users to input text and receive instant sentiment classification along with confidence scores.',
      technical: [
        'Transformer-based sentiment classification',
        'Clean inference pipeline',
        'Confidence score interpretation',
        'Streamlit-based deployment',
        'UI optimized for clarity and speed'
      ],
      focus: [
        'Model inference efficiency',
        'User-friendly ML deployment',
        'Interpretable AI outputs',
        'Real-time processing capabilities'
      ],
      tags: ['NLP', 'Transformers', 'Streamlit', 'Sentiment Analysis', 'Python'],
      image: sentimentImg,
    },
    'resume-builder': {
      title: 'AI Resume Builder Studio',
      subtitle: 'Intelligent Resume Generation & ATS Optimization Platform',
      category: 'Applied AI · Career Tech · Product Design',
      timeline: 'Week 4',
      overview: 'An AI-driven platform designed to help users create professional, ATS-optimized resumes tailored to specific job roles, focusing on real-world hiring constraints and recruiter screening systems.',
      problem: 'Many qualified candidates are filtered out by automated Applicant Tracking Systems due to poorly structured resumes, weak keyword alignment, or unclear achievement descriptions.',
      solution: 'This system guides users through structured resume creation while leveraging AI to generate professional summaries, quantify achievements, and align content with job descriptions.',
      technical: [
        'AI-generated summaries and bullet points',
        'Job description keyword matching',
        'ATS-aware formatting logic',
        'Multi-template resume system',
        'Export functionality (PDF, DOCX, HTML)'
      ],
      ux: [
        'Step-by-step resume construction',
        'Real-time preview and feedback',
        'User data privacy considerations',
        'Professional template library'
      ],
      tags: ['AI Generation', 'ATS Optimization', 'React', 'UX Design', 'Career Tech'],
      image: resumeBuilderImg,
    },
    'content-generator': {
      title: 'Creative Writing Content Generator',
      subtitle: 'Generative AI System for Structured Creative Output',
      category: 'Generative AI · Prompt Engineering · UX Design',
      timeline: 'Week 3',
      overview: 'A generative AI application that demonstrates how structured prompt engineering can enhance creative output rather than replace it, helping users generate short stories, poetry, and experimental narratives.',
      problem: 'Many generative writing tools produce outputs that feel generic, unstructured, or overly verbose. Without thoughtful prompt design, creativity often degrades into randomness.',
      solution: 'A modular prompt-engineering system where users define tone, genre, narrative structure, and length. The AI acts as a creative collaborator rather than a replacement for human authorship.',
      technical: [
        'Prompt templates structured by genre and narrative intent',
        'Parameterized controls for tone, length, and style',
        'Input validation and output refinement logic',
        'Performance considerations such as response time and token efficiency',
        'Exportable content formats (text and document-ready output)'
      ],
      focus: [
        'Prompt abstraction and reuse',
        'Human-in-the-loop AI design',
        'Controlled creativity through constraints',
        'Balancing structure with imagination'
      ],
      tags: ['Generative AI', 'Prompt Engineering', 'Creative Tools', 'NLP'],
      image: '',
    },
  };

  const project = projectData[projectId];

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="min-h-screen py-20 px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-5xl mx-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="bg-gradient-to-br from-black/40 to-purple-900/20 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
            {/* Header Image */}
            {project.image && (
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Category */}
              <div className="mb-4">
                <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {project.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                {project.subtitle}
              </p>

              {/* Timeline */}
              <p className="text-purple-400 mb-8">{project.timeline}</p>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-red-500/20">
                  <h3 className="text-xl font-bold mb-3 text-red-400">Problem</h3>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Technical Implementation */}
              {project.technical && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Technical Implementation</h3>
                  <ul className="space-y-2">
                    {project.technical.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ethical Considerations or Impact */}
              {project.ethical && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ethical Considerations</h3>
                  <ul className="space-y-2">
                    {project.ethical.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-pink-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.impact && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Impact</h3>
                  <ul className="space-y-2">
                    {project.impact.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.focus && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">Engineering Focus</h3>
                  <ul className="space-y-2">
                    {project.focus.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.ux && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">UX & Design Focus</h3>
                  <ul className="space-y-2">
                    {project.ux.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-pink-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}