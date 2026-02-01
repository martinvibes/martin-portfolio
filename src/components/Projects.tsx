'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
  color: 'purple' | 'cyan' | 'emerald';
}

const projects: Project[] = [
  {
    id: 'paymesh',
    name: 'Paymesh',
    description:
      'A Web3 payment, pooling, and fundraising platform on Starknet. Automates group payment distribution using smart contracts. Create a group address, assign wallets with percentages, and funds split instantly with full on-chain transparency.',
    featured: true,
    tags: ['Next.js', 'React', 'Starknet', 'Smart Contracts', 'Tailwind'],
    github: 'https://github.com/Web3Novalabs/PayMesh',
    live: 'https://paymesh.app/',
    color: 'purple',
  },
  {
    id: 'nixo',
    name: 'Nixo',
    description:
      'Privacy and DeFi on Starknet made simple. Combines Typhoon Protocol for anonymity with AVNU for DeFi into a conversational AI interface. Makes privacy accessible to non-technical users.',
    featured: true,
    tags: ['React', 'Starknet', 'AI', 'Privacy', 'DeFi'],
    github: 'https://github.com/martinvibes/Nixo',
    live: 'https://nixo-privacy.vercel.app/',
    color: 'cyan',
  },
  {
    id: 'segun-portfolio',
    name: 'Segun Aribido Portfolio',
    description:
      'A personal portfolio website showcasing UX and interaction design work. Built with focus on clean design and smooth interactions.',
    tags: ['Next.js', 'React', 'Tailwind', 'Design'],
    github: 'https://github.com/martinvibes/segun-aribido-portfolio',
    live: 'https://segun-aribido.vercel.app/',
    color: 'purple',
  },
  {
    id: 'studly',
    name: 'useStudly',
    description:
      'A unified learning platform making studying deeply interactive, personalized, and effective. Features that transform traditional learning into an engaging experience.',
    tags: ['Next.js', 'React', 'Tailwind', 'EdTech'],
    live: 'https://studly-web.vercel.app/',
    color: 'emerald',
  },
  {
    id: 'nir-finance',
    name: 'Nir Finance',
    description:
      'Clarity-first strategy tooling for DeFi. A clean space to compose, backtest, and publish strategies. Designed for clarity, built for collaboration.',
    tags: ['React', 'DeFi', 'Blockchain', 'Strategy Tools'],
    github: 'https://github.com/Nir-Finance/Nir-frontend',
    live: 'https://nir-finance.vercel.app/',
    color: 'purple',
  },
  {
    id: 'yield-vault',
    name: 'Yield Vault',
    description:
      'Autonomous yield optimization agents on AO/EVM compatible chains. Users discover LP pools, get AI recommendations, and spawn independent agents to execute swap + LP strategies.',
    tags: ['AO', 'EVM', 'Smart Agents', 'Yield Optimization'],
    github: 'https://github.com/Yield-Vault-AO/yield_vault',
    live: 'https://yieldvault.ar.io/',
    color: 'cyan',
  },
  {
    id: 'predifi',
    name: 'PrediFi',
    description:
      'Decentralized outcome prediction protocol on StarkNet. Allows users to predict future outcomes across sports, finance, and global events with on-chain verification.',
    tags: ['Starknet', 'Predictions', 'DeFi', 'Smart Contracts'],
    github: 'https://github.com/Web3Novalabs/predifi',
    color: 'purple',
  },
];

const colorClasses = {
  purple: 'border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10',
  cyan: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10',
  emerald: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10',
};

const tagColors = {
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

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

  return (
    <section id="projects" className="py-20 bg-black border-t border-purple-500/10">
      <motion.div className="max-w-6xl mx-auto px-6" ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.h2 className="text-4xl font-bold text-white mb-12" variants={itemVariants}>Featured Work</motion.h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              className={`p-8 rounded-lg bg-black border transition ${colorClasses[project.color]}`}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${tagColors[project.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                  >
                    <Github size={18} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-20">
          <motion.h3 className="text-2xl font-bold text-white mb-8" variants={itemVariants}>
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <motion.div
                key={project.id}
                className={`p-6 rounded-lg bg-black border transition ${colorClasses[project.color]}`}
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded text-xs font-medium border ${tagColors[project.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-white hover:text-purple-400 transition"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-white hover:text-purple-400 transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
