import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const FloatingResumeButton = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/13s34FbS9E4kOn1iKgcajJCtRgJCU1KVu/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Download size={20} />
    </motion.a>
  );
};

export default FloatingResumeButton;