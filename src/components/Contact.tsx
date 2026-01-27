'use client';

import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <section id="contact" className="py-20 bg-black border-t border-purple-500/10">
      <motion.div className="max-w-4xl mx-auto px-6" ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.h2 className="text-4xl font-bold text-white mb-8 text-center" variants={itemVariants}>Get in Touch</motion.h2>

        <motion.p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          I'm always interested in talking about Web3 projects, frontend challenges, or exploring new opportunities. Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.a
            variants={itemVariants}
            href="mailto:martinmachiebe21@gmail.com"
            className="p-6 rounded-lg bg-purple-500/5 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition flex items-center gap-4"
          >
            <Mail className="text-purple-400" size={28} />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-semibold">Get in touch</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://x.com/martin_tech21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition flex items-center gap-4"
          >
            <Twitter className="text-cyan-400" size={28} />
            <div>
              <p className="text-sm text-gray-400">Twitter / X</p>
              <p className="text-white font-semibold">@martin_tech21</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://github.com/martinvibes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-emerald-500/5 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition flex items-center gap-4"
          >
            <Github className="text-emerald-400" size={28} />
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-white font-semibold">martinvibes</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/martinvibes/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-purple-500/5 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition flex items-center gap-4"
          >
            <Linkedin className="text-purple-400" size={28} />
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-white font-semibold">martinvibes</p>
            </div>
          </motion.a>
        </div>

        <motion.div className="mt-16 p-8 rounded-lg bg-black border border-purple-500/20 text-center" variants={itemVariants}>
          <p className="text-gray-300 mb-4">Also check out my CV:</p>
          <a
            href="/cv/martin-resume.pdf"
            className="inline-block px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
