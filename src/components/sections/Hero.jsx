import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ backgroundImage: `url('https://files.manuscdn.com/search-media/2025/10/14/DNXNsRqnvBb6EVrvsKaevC.jpg' )` }}
    >
      {/* Camada de escurecimento maior para reforçar contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
      <div className="relative z-10 text-white space-y-6">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hiroshima e Nagasaki:

          Uma Lição Inesquecível
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Explore a história, compreenda o impacto e reflita sobre o legado dos bombardeios atômicos que mudaram o mundo.
        </p>
        <div className="text-base font-semibold mt-6">
          <p>Trabalho Escolar de:</p>
          <p>Exemplo1, Exemplo2, Exemplo3, Exemplo4</p>
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
