import vittaImage from '../assets/images/Site-Vitta.webp';

export const projetos = [
  {
    id: 1,
    titulo: "Web site para Vitta Terapias",
    descricao: "Site profissional desenvolvido para um negócio de massagens terapêuticas, focado em conversão via WhatsApp. Conta com catálogo de serviços com filtros, carrossel de depoimentos, FAQ interativo, mapa de localização, feed do Instagram integrado e botão flutuante de contato. Totalmente responsivo, construído com React 18 + Vite e implantado na Vercel.",
    descricaoCompleta: "Vitta Terapias é um site profissional desenvolvido para uma cliente do segmento de massagens terapêuticas, com foco em conversão de visitantes em agendamentos. O projeto foi construído do zero com React 18 + Vite, priorizando performance, responsividade e uma experiência de usuário fluida em todos os dispositivos. A principal estratégia de negócio do site é o agendamento via WhatsApp: botões estrategicamente posicionados em diferentes seções abrem uma conversa direta com mensagens pré-personalizadas de acordo com o serviço de interesse, reduzindo a fricção no processo de contato. O site conta com um catálogo de serviços com cards interativos e sistema de filtros (todos/destaque), permitindo que a cliente destaque os tratamentos prioritários. Depoimentos de clientes reais são exibidos em carrossel, reforçando a credibilidade do negócio. Uma seção de FAQ com accordion interativo responde as dúvidas mais comuns, e um formulário de contato também direciona o usuário ao WhatsApp. A localização é apresentada via Google Maps Embed, facilitando a chegada de novos clientes. O feed do Instagram da clínica é incorporado diretamente no site, mantendo o conteúdo sempre atualizado sem intervenção no código. Um botão flutuante de WhatsApp garante que o canal de contato esteja acessível em qualquer ponto da navegação, e o header fixo mantém a navegação sempre visível durante o scroll. O projeto foi implantado na Vercel, garantindo deploy contínuo, alta disponibilidade e carregamento rápido. A estilização foi feita com CSS Modules, garantindo isolamento de estilos e organização escalável do código.",
    tecnologias: ["React 18", "Vite", "CSS Modules", "Lucide React", "Google Maps Embed", "Instagram Embed", "Vercel", "WhatsApp API"],
    imagem: vittaImage,
    repo: "https://github.com/bbigelli/vitta-terapias",
    demo: "https://vitta-terapias.vercel.app/",
    data: "2026"
  },
  {
    id: 2,
    titulo: "Micro Frontends - Sistema de Pedidos",
    descricao: "Implementação prática de Micro Frontends utilizando Webpack Module Federation",
    descricaoCompleta: "Este projeto demonstra a implementação de Micro Frontends utilizando Webpack Module Federation. A aplicação é dividida em três partes independentes que funcionam juntas como um sistema de pedidos completo.",
    tecnologias: ["React", "Webpack", "Module Federation", "Babel"],
    imagem: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Micro+Frontends",
    repo: "https://github.com/bbigelli/projeto-micro-frontend",
    demo: "",
    data: "2026"
  },
  {
    id: 3,
    titulo: "Otimização de Performance Web",
    descricao: "Projeto desenvolvido para demonstrar técnicas de otimização de performance",
    descricaoCompleta: "O projeto foi propositalmente desenvolvido com más práticas de performance para depois ser otimizado, demonstrando o impacto real de cada técnica de otimização.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Lighthouse"],
    imagem: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Performance+Web",
    repo: "https://github.com/bbigelli/projeto-otimizacao-performance",
    demo: "",
    data: "2026"
  },
];