import vittaImage from '../assets/images/Site-Vitta.webp';
import artelliImage from '../assets/images/Site-Artelli.webp';

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
    titulo: "Artelli Artesanato — E-commerce Full Stack",
    descricao: "Plataforma completa de e-commerce para artesanato personalizado com autenticação JWT, painel admin e checkout via WhatsApp.",
    descricaoCompleta: "Projeto full stack desenvolvido do zero para a Artelli Artesanato, uma marca de peças artesanais feitas à mão. O backend foi construído com FastAPI e PostgreSQL, contando com autenticação JWT, CRUD completo de produtos e categorias, gerenciamento de usuários com níveis de permissão (admin/cliente) e seed automático de dados. O frontend em React 18 com TypeScript entrega uma landing page premium com hero section, depoimentos, FAQ e seção de benefícios. O catálogo conta com filtros por categoria, página de detalhe com galeria de imagens e campo de personalização por produto. O fluxo de checkout redireciona o cliente ao WhatsApp com o pedido já formatado. O painel administrativo permite criar, editar e excluir produtos e gerenciar usuários em tempo real. O projeto é totalmente responsivo, orquestrado com Docker Compose e preparado para deploy no Render.",
    tecnologias: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "Vite", "Axios"],
    imagem: artelliImage,
    repo: "https://github.com/bbigelli/artelli-artesatano",
    demo: "https://artelli-frontend.onrender.com/",
    data: "2026"
  }
];