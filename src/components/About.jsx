import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center p-1">
                <div className="w-72 h-72 bg-gray-800 rounded-full overflow-hidden">
                  <img 
                    src="./piyushpic.png" 
                    alt="Piyush Tiwari" 
                    className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="text-left">
              <motion.div variants={itemVariants} className="glass-effect rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with experience in React, Node.js, Firebase,
                  and Express.js. I love building scalable, secure, and responsive applications that
                  solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Currently pursuing B.Tech in Computer Science Engineering at GGSIPU, New Delhi,
                  graduating in 2026. I'm always eager to learn new technologies and take on
                  challenging projects.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="glass-effect rounded-lg p-4">
                    <div className="text-blue-400 font-semibold">Education</div>
                    <div className="text-gray-300">B.Tech CSE</div>
                    <div className="text-gray-400">GGSIPU, New Delhi</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4">
                    <div className="text-purple-400 font-semibold">Graduation</div>
                    <div className="text-gray-300">2026</div>
                    <div className="text-gray-400">Final Year</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
