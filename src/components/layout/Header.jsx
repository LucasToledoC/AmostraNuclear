import { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, Gift } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-colors duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <a href="#hero" className="text-2xl font-bold text-white hover:text-orange-400 transition-colors text-center md:text-left">
          Hiroshima & Nagasaki
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 ${isMobileMenuOpen ? "flex flex-col absolute top-full left-0 w-full bg-slate-900/80 py-4 space-y-2 items-center" : "hidden"}`}>
          <li className="px-4 py-2">
            <a href="#educational-content" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conteúdo
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="#quiz-section" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Quiz
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="#rewards-section" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Recompensas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

