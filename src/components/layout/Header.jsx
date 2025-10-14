import { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, Gift } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // When active, use the theme primary background so the header follows the site's palette
  const activeBg = null; // we will use Tailwind's bg-primary class dynamically instead of inline values

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-colors duration-300 ${isScrolled ? "backdrop-blur-sm" : ""}`}
    >
      <nav
        className={`container mx-auto px-4 py-4 flex justify-between items-center relative transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-primary' : 'bg-transparent'}`}
      >
        <a href="#hero" className="text-2xl font-bold text-orange-400 hover:text-white transition-colors text-center md:text-left header-highlight">
          Hiroshima & Nagasaki
        </a>
        <div className="">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-orange-400 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Nav links para desktop - mesmas cores do menu mobile */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a href="#educational-content" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              Conteúdo
            </a>
          </li>
          <li>
            <a href="#quiz-section" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              Quiz
            </a>
          </li>
          <li>
            <a href="#rewards-section" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
              Recompensas
            </a>
          </li>
        </ul>
  <ul
    className={`flex flex-col space-x-6 absolute top-full left-0 w-full py-4 space-y-2 items-center ${isMobileMenuOpen ? 'bg-primary' : 'hidden'}`}
    // keep the transition for smooth open/close
  >
          <li className="px-4 py-2">
            <a href="#educational-content" onClick={( ) => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
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
