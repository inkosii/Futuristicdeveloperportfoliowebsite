import { motion } from 'motion/react';
import { Mail, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen bg-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Let's Build
            <br />
            Something Meaningful
          </h2>
          <div className="w-24 h-1 bg-[#FF6B6B] mb-8"></div>
          <p className="text-xl text-white/60 max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>
              
              {/* Email */}
              <a
                href="mailto:Sinenhlahla.nkosi@capaciti.org.za"
                className="group flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-sm hover:border-[#FF6B6B]/50 transition-all"
              >
                <div className="w-12 h-12 bg-[#FF6B6B]/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Email</div>
                  <div className="text-white group-hover:text-[#FF6B6B] transition-colors">
                    Sinenhlahla.nkosi@capaciti.org.za
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/inkosii"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-sm hover:border-[#4ECDC4]/50 transition-all"
              >
                <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5 text-[#4ECDC4]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">GitHub</div>
                  <div className="text-white group-hover:text-[#4ECDC4] transition-colors">
                    github.com/inkosii
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-12 h-12 bg-[#FFD93D]/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFD93D]" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1">Location</div>
                  <div className="text-white">South Africa</div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <h4 className="text-xl font-bold text-white mb-4">Open to Opportunities</h4>
              <p className="text-white/60 mb-6 leading-relaxed">
                I'm actively seeking roles in machine learning engineering, data
                science, and AI development. Let's create something impactful together.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-sm rounded-sm">
                  Full-time
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-sm rounded-sm">
                  Contract
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-sm rounded-sm">
                  Remote
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-sm p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:border-[#FF6B6B]/50 focus:outline-none transition-colors text-white placeholder-white/30"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:border-[#FF6B6B]/50 focus:outline-none transition-colors text-white placeholder-white/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/60 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm focus:border-[#FF6B6B]/50 focus:outline-none transition-colors text-white placeholder-white/30 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-[#2A2A2A] rounded-sm hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
