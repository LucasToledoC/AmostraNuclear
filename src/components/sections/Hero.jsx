import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [hideTitle, setHideTitle] = useState(false);

  useEffect(() => {
    // usar largura da viewport para detectar telas de computador
    function checkWidth() {
      const isWide = window.innerWidth >= 1024;
      setHideTitle(isWide);
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ backgroundImage: `url('https://files.manuscdn.com/search-media/2025/10/14/DNXNsRqnvBb6EVrvsKaevC.jpg' )` }}
    >
  {/* Camada de escurecimento maior para reforçar contraste do texto */}
  <div className="absolute inset-0 hero-overlay bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
      <div className="relative z-10 text-white space-y-6">
        <h1
          className={`hero-title text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight ${hideTitle ? 'hidden' : ''}`}
          style={hideTitle ? { display: 'none' } : undefined}
        >
          Hiroshima e Nagasaki:

          Uma Lição Inesquecível
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Explore a história, compreenda o impacto e reflita sobre o legado dos bombardeios atômicos que mudaram o mundo.
        </p>
          {/* names: visible on small, hidden on md+ (moved to footer on larger screens) */}
          <div className="text-base font-semibold mt-6 block md:hidden">
            <p className="mb-2">Trabalho Escolar de:</p>
            <div className="max-w-3xl mx-auto grid grid-cols-1 gap-2 text-center justify-items-center">
              <span className="text-sm">Ana Carolliny Camargo</span>
              <span className="text-sm">Arthur Inada</span>
              <span className="text-sm">Beatriz Araújo</span>
              <span className="text-sm">Felipe Lima</span>
              <span className="text-sm">Luca Testa</span>
              <span className="text-sm">Lucas Soares</span>
              <span className="text-sm">Luiza Dias</span>
              <span className="text-sm">Maria Clara Paiva</span>
              <span className="text-sm">Maria Luiza Motta</span>
            </div>
          </div>
        <a href="#educational-content">
          <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300">
            Começar a Aprender
          </Button>
        </a>
      </div>
    </section>
  );
}
