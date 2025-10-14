import { Award, Trophy } from 'lucide-react';

export const rewards = [
  {
    id: 1,
    title: "O Projeto Manhattan",
    description: "Descubra a história e os cientistas envolvidos no desenvolvimento das primeiras armas nucleares.",
    content: "O Projeto Manhattan foi um esforço de pesquisa e desenvolvimento durante a Segunda Guerra Mundial que produziu as primeiras armas nucleares. Liderado pelos Estados Unidos com apoio do Reino Unido e Canadá, o projeto empregou mais de 130.000 pessoas e custou quase US$ 2 bilhões (equivalente a cerca de US$ 23 bilhões hoje). Cientistas renomados como J. Robert Oppenheimer, Enrico Fermi e Niels Bohr trabalharam no projeto. O primeiro teste nuclear, codinome 'Trinity', ocorreu em 16 de julho de 1945, no Novo México.",
    requiredPoints: 30,
    icon: Award
  },
  {
    id: 2,
    title: "Testemunhos dos Hibakusha",
    description: "Conheça os relatos impactantes dos sobreviventes dos bombardeios atômicos.",
    content: '"Eu vi um flash brilhante, como se mil sóis tivessem explodido ao mesmo tempo. Então, tudo ficou escuro. Quando recuperei a consciência, estava cercada por ruínas e pessoas feridas. O sofrimento era indescritível." - Testemunho de um sobrevivente de Hiroshima. Os Hibakusha enfrentaram não apenas as consequências físicas da radiação, mas também o estigma social e traumas psicológicos profundos que perduram até hoje.',
    requiredPoints: 60,
    icon: Trophy
  },
  {
    id: 3,
    title: "A Reconstrução das Cidades",
    description: "Veja como Hiroshima e Nagasaki se reergueram das cinzas e se tornaram símbolos de paz.",
    content: "Após a devastação, Hiroshima e Nagasaki iniciaram um processo de reconstrução notável. Hiroshima foi reconstruída como uma 'Cidade da Paz', com o Parque Memorial da Paz e o icônico Domo da Bomba Atômica (Genbaku Dome) preservado como lembrança. Hoje, ambas as cidades são prósperas e dedicam-se à promoção da paz mundial e ao desarmamento nuclear. A população de Hiroshima, que era de cerca de 350.000 antes do bombardeio, hoje ultrapassa 1,2 milhão de habitantes.",
    requiredPoints: 80,
    icon: Award
  },
  {
    id: 4,
    title: "O Debate Ético e o Legado Nuclear",
    description: "Explore as diferentes perspectivas sobre a justificação dos bombardeios e seu impacto na história.",
    content: "O uso de armas nucleares contra Hiroshima e Nagasaki permanece como um dos debates éticos mais controversos da história. Defensores argumentam que os bombardeios aceleraram o fim da guerra e salvaram vidas ao evitar uma invasão terrestre do Japão. Críticos condenam o uso de armas de destruição em massa contra civis e questionam a necessidade militar da ação. O evento catalisou o movimento anti-nuclear global e levou à criação do Tratado de Não Proliferação de Armas Nucleares. Até hoje, Hiroshima e Nagasaki são os únicos casos de uso de armas nucleares em conflito.",
    requiredPoints: 100,
    icon: Trophy
  }
];

