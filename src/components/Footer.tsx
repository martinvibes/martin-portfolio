'use client';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 Martin. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/martinvibes" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              GitHub
            </a>
            <a href="https://x.com/martin_tech21" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/martinvibes/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
