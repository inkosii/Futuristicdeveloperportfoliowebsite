import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  onClick: () => void;
  delay?: number;
  accentColor?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
  onClick,
  delay = 0,
  accentColor = '#FF6B6B',
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] bg-white rounded-sm overflow-hidden mb-4 shadow-sm">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white relative">
            <div
              className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20"
              style={{ backgroundColor: accentColor }}
            ></div>
            <div
              className="absolute bottom-8 left-8 w-24 h-24 rounded-sm opacity-10"
              style={{ backgroundColor: accentColor }}
            ></div>
            <div className="text-center px-6">
              <div 
                className="w-12 h-12 mx-auto mb-3 rounded-sm"
                style={{ backgroundColor: accentColor }}
              ></div>
              <p className="text-xs text-[#2A2A2A]/40 font-medium">
                {tags[0]}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div>
        <h4 className="text-lg font-bold text-[#2A2A2A] mb-1 group-hover:text-[#FF6B6B] transition-colors">
          {title}
        </h4>
        <p className="text-sm text-[#2A2A2A]/50 mb-3">
          {category}
        </p>
        <p className="text-sm text-[#2A2A2A]/70 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
