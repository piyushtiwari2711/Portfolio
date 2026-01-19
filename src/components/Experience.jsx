import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Creating Dimensions',
      period: '05/2025 - 06/2025',
      location: 'Remote',
      description: 'Built a scalable EdTech platform with Firebase backend, implementing secure payment systems and content access control for educational content.',
      skills: ['React.js', 'Firebase', 'Payment Integration', 'Full-Stack Development'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'IBM Frontend Trainee',
      company: 'IBM',
      period: '07/2025 - 08/2025',
      location: 'Remote',
      description: 'Building responsive UIs using React and working with REST APIs. Collaborating with cross-functional teams to deliver high-quality frontend solutions.',
      skills: ['React.js', 'JavaScript', 'REST APIs', 'UI/UX', 'Team Collaboration'],
      color: 'from-blue-500 to-blue-600'
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-black`}></div>
                
                {/* Experience card */}
                <motion.div 
                  className="ml-16 glass-effect rounded-lg p-6 w-full hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;