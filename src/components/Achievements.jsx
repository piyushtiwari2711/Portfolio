import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Target, Code, Award, Shield, Star, Link as LinkIcon } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const achievements = [
    {
      title: 'JEE Mains 2022',
      description: '92.4 percentile',
      icon: Target,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'SSB-Indian Army',
      description: 'Selected for TES-48',
      icon: Shield,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'GeeksforGeeks',
      description: '160-day POTD streak',
      icon: Code,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Smart India Hackathon',
      description: '2024 prequalifier',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Deutsche Bank Hackathon',
      description: 'Winner',
      icon: Trophy,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'LeetCode',
      description: '250+ problems solved',
      icon: Star,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const certificates = [
    {
      title: 'Java DSA',
      provider: 'Apna College',
      year: '2024',
      link: 'https://drive.google.com/file/d/14T8p6SWS1B6v6HVH-6N5pqCyXgPBUUdE/view?usp=sharing'
    },
    {
      title: 'MERN Stack Web Development',
      provider: 'Delta Course',
      year: '2024',
      link: 'https://drive.google.com/file/d/1Uyheuf1ub-tA4mn_LYFK9wtIm7v-pLDK/view?usp=sharing'
    },
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

  return (
    <section id="achievements" className="py-20 bg-gray-900">
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
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Certificates</span>
          </motion.h2>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="achievement-card rounded-lg p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
                <motion.div 
                  className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Certificates Section */}
          <motion.div 
            variants={itemVariants}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certificates</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-400 underline hover:text-blue-500 flex items-center gap-1">
                          {cert.title}
                          <LinkIcon size={16} className="inline-block" />
                        </a>
                      ) : (
                        <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                      )}
                      <p className="text-blue-400">{cert.provider}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{cert.year}</div>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center mt-2">
                        <Award size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;