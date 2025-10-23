export default function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center text-slate-400 border-t border-slate-700">
      <p>&copy; {new Date().getFullYear()} Hiroshima & Nagasaki Quiz. Todos os direitos reservados.</p>
      <p>Desenvolvido para fins educacionais.</p>
      {/* On larger screens show the integrantes to keep the hero clean */}
      <div className="hidden md:block mt-4">
        <p className="font-semibold text-white mb-2">Trabalho Escolar de:</p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-2 text-center text-sm text-slate-300">
          <span>Ana Carolliny Camargo</span>
          <span>Arthur Inada</span>
          <span>Beatriz Araújo</span>
          <span>Felipe Lima</span>
          <span>Luca Testa</span>
          <span>Lucas Soares</span>
          <span>Luiza Dias</span>
          <span>Maria Clara Paiva</span>
          <span>Maria Luiza Motta</span>
        </div>
      </div>
    </footer>
  );
}

