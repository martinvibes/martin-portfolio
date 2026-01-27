'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <section id="skills" className="py-20 bg-black border-t border-purple-500/10">
      <motion.div className="max-w-4xl mx-auto px-6" ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.h2 className="text-4xl font-bold text-white mb-12" variants={itemVariants}>Tech Stack</motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-purple-400 mb-6">Frontend</h3>
            <ul className="space-y-3">
              {['React/Typescript', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'Component Architecture'].map(
                (skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                    {skill}
                  </li>
                )
              )}
            </ul>
            </motion.div>

          {/* Web3 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Web3 & Blockchain</h3>
            <ul className="space-y-3">
              {['Starknet', 'Solidity', 'Smart Contracts', 'Wallet Integration', 'On-chain Data'].map(
                (skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span>
                    {skill}
                  </li>
                )
              )}
            </ul>
            </motion.div>

          {/* Tools & Workflow */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-emerald-400 mb-6">Tools & Workflow</h3>
            <ul className="space-y-3">
              {['Git & GitHub', 'Figma', 'TypeScript', 'Testing', 'Vercel'].map((skill) => (
                <li key={skill} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
            </motion.div>
        </div>

        {/* Design Philosophy */}
        <motion.div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-white mb-4">Design Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="mb-4">
                <strong className="text-purple-400">Simplicity First:</strong> Complex systems require simple interfaces. I prioritize usability over flashiness.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-cyan-400">Performance Matters:</strong> Clean code and optimized UI ensure fast, responsive applications that users love.
              </p>
            </div>
            <div>
              <p className="mb-4">
                <strong className="text-emerald-400">User-Centric:</strong> Real users drive design decisions. I ship practical solutions that solve actual problems.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-purple-400">Builder Mindset:</strong> I thrive on making things work, learning fast from real-world feedback, and iterating quickly.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
