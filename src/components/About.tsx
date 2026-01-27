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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section id="about" className="py-20 bg-black border-t border-purple-500/10">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="text-4xl font-bold text-white mb-8" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a frontend developer and smart contract dev focused on building clean, user-friendly web2 and Web3 products. With high level production experience, I specialize in creating intuitive interfaces for complex blockchain systems.
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              My approach prioritizes <strong>simplicity over complexity</strong>. I love solving UX problems around intricate systems and shipping practical solutions that work for real users especially in payment systems, DeFi, and fundraising.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm based in Nigeria and passionate about building products that address real-world challenges in Web3, particularly for communities and teams.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div className="p-6 rounded bg-purple-500/5 border border-purple-500/20" variants={itemVariants}>
              <h3 className="text-purple-400 font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• React & Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
                <li>• Component-driven UI</li>
              </ul>
            </motion.div>

            <motion.div className="p-6 rounded bg-cyan-500/5 border border-cyan-500/20" variants={itemVariants}>
              <h3 className="text-cyan-400 font-semibold mb-3">Web3 & Blockchain</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Smart Contract Integration</li>
                <li>• Starknet & Solidity</li>
                <li>• Wallet Connections</li>
                <li>• On-chain Data Handling</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
