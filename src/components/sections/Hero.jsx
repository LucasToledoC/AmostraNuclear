import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ backgroundImage: `url('https://tse2.mm.bing.net/th/id/OIP.QizVDoLo03IC1KejdIw3nQHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
      <div className="relative z-10 text-white space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Hiroshima e Nagasaki:<br />
          Uma Lição Inesquecível
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Explore a história, compreenda o impacto e reflita sobre o legado dos bombardeios atômicos que mudaram o mundo.
        </p>
        <div className="text-lg font-semibold mt-8">
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

