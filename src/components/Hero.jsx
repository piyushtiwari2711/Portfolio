import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const texts = [
    'Full Stack Developer',
    'MERN Enthusiast',
    'Coding Addict',
    'Problem Solver'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setTypedText(currentText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Piyush Tiwari</span>
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 h-8"
        >
          <span className="text-gray-300">I'm a </span>
          <span className="text-blue-400 font-semibold">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
        >
          B.Tech CSE Student at GGSIPU, passionate about building scalable web applications 
          and solving complex problems with innovative solutions.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://drive.google.com/file/d/1tFVLcias-zvtLlx7BGP_cwl024UoksJ1/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/piyushtiwari2711/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/piyushtiwari2711" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;