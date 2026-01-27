'use client';

import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/10 to-black">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8 inline-block" variants={itemVariants}>
          <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
            Frontend Developer & Smart Contract Dev
          </span>
        </motion.div>

        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" variants={itemVariants}>
          Building Clean UI for{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Web3 & Web2
          </span>
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          Frontend developer focused on building clean, user-friendly products. I work with blockchain-based applications, smart contract integration, and real-world solutions. Based in Nigeria.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
          <a
            href="#projects"
            className="px-8 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center justify-center gap-2 transition hover:scale-105 transform"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded border border-purple-500/50 hover:border-purple-400 text-white font-medium transition hover:scale-105 transform"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div className="flex justify-center gap-6" variants={itemVariants}>
          <motion.a
            href="https://github.com/martinvibes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/martin_tech21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/martinvibes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
