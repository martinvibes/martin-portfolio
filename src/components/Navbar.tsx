'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-purple-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition">
            Martin
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-gray-300 hover:text-purple-400 transition">
              About
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-purple-400 transition">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition">
              Contact
            </Link>
          </div>

          <a
            href="/cv/martin-resume.pdf"
            className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white transition hidden md:block"
          >
            CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 md:hidden z-40 bg-black/95 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full gap-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition text-2xl"
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition text-2xl"
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition text-2xl"
                >
                  Skills
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition text-2xl"
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href="/cv/martin-resume.pdf"
                  className="text-gray-300 hover:text-purple-400 transition text-2xl"
                >
                  CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
