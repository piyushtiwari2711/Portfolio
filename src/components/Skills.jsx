import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind', 'Material UI', 'Bootstrap'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Firebase', 'SQL'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Vercel', 'Microsoft Azure Board'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'AI Tools',
      skills: ['ChatGPT', 'Bolt', 'Cursor AI', 'Vercel V0', 'Google AI Gemini'],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-effect rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      className="skill-tag px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400 hover:text-blue-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Progress Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: 'React.js', level: 90 },
                { skill: 'Node.js', level: 85 },
                { skill: 'JavaScript', level: 90 },
                { skill: 'MongoDB', level: 80 },
                { skill: 'Express.js', level: 85 },
                { skill: 'Firebase', level: 75 }
              ].map((item, index) => (
                <div key={item.skill} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.skill}</span>
                    <span className="text-blue-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="progress-bar h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ '--progress': `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;