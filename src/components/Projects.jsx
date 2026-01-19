import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Video, ShoppingCart, GraduationCap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      title: 'Apna Video Call',
      description: 'MERN video conferencing app with WebRTC and Socket.IO for real-time communication. Features include screen sharing, chat, and room management.',
      tech: ['React.js', 'Node.js', 'Socket.IO', 'WebRTC', 'MongoDB'],
      icon: Video,
      gradient: 'from-blue-500 to-purple-600',
      demoLink: 'https://apna-video-call0.onrender.com',
      githubLink: 'https://github.com/piyushtiwari2711',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce website with secure payment integration using Stripe & Razorpay. Features product management, cart, and user authentication.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Razorpay'],
      icon: ShoppingCart,
      gradient: 'from-green-500 to-emerald-600',
      demoLink: 'https://forever-bay.vercel.app/',
      githubLink: 'https://github.com/piyushtiwari2711',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Creating Dimensions',
      description: 'EdTech platform built for freelance client with Firebase backend, secure payment integration, and content access control system.',
      tech: ['React.js', 'Firebase', 'Material UI', 'Payment Gateway'],
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-600',
      demoLink: 'https://creatingdimensions.vercel.app/',
      githubLink: 'https://github.com/piyushtiwari2711',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                variants={itemVariants}
                className="project-card glass-effect rounded-lg overflow-hidden group block cursor-pointer no-underline"
                href={project.title === 'E-Commerce Platform' ? 'https://forever-bay.vercel.app/' : project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  

                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;