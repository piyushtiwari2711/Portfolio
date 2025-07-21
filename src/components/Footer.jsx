import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/piyushtiwari2711', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/piyushtiwari2711/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:piyush.2711tiwari@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Piyush Tiwari</h3>
            <p className="text-gray-400">Full Stack Developer & MERN Enthusiast</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="section-divider my-8"></div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400"
        >
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Piyush Tiwari</span>
          </p>
          <p className="mt-2 text-sm">
            © 2025 Piyush Tiwari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;