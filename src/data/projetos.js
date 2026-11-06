import vittaImage from '../assets/images/Site-Vitta.webp';
import artelliImage from '../assets/images/Site-Artelli.webp';
import landingInfoprodutoImage from '../assets/images/Capa-Landing-Infoproduto.svg';

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
  },
  {
    id: 3,
    titulo: "Landing Page de Infoproduto — WordPress + Elementor",
    descricao: "Landing page de venda para curso online, com 9 seções construídas para derrubar objeção por objeção. Template do Elementor gerado por script, child theme próprio, Pixel da Meta com eventos de conversão e remoção de 110KB do caminho crítico. Contraste da paleta medido pela fórmula da WCAG 2.1, não estimado.",
    descricaoCompleta: "Peça de demonstração que reproduz o pedido mais comum de quem contrata freelancer para WordPress: landing page de infoproduto para receber tráfego pago. A página tem 9 seções — título principal, benefícios, conteúdo do curso, instrutor, depoimentos, garantia, oferta, perguntas frequentes e fechamento —, e cada uma foi escrita para derrubar uma objeção específica de compra, na ordem em que ela aparece na cabeça de quem está decidindo. O diferencial do projeto está em três decisões de engenharia. A primeira: o template do Elementor é gerado por um script Node sem dependências, que separa o texto (um arquivo JSON de conteúdo) da estrutura (o gerador). Trocar o JSON e rodar o script produz a landing de outro cliente, com a mesma arquitetura. O gerador valida o que produz — IDs únicos, estrutura dos nós e chaves obrigatórias — e é determinístico: rodar duas vezes gera exatamente o mesmo arquivo. A segunda: os widgets carregam apenas classes semânticas, e todo o visual vive no CSS do child theme. O caminho comum no Elementor é gravar tipografia e espaçamento dentro das configurações de cada widget, o que produz um JSON enorme e faz o Elementor emitir um arquivo CSS por página. Com as classes, o template ficou em 51KB e o estilo em um único arquivo cacheável — e o cliente continua editando cada texto normalmente dentro do Elementor. A terceira: a página foi construída sem nenhum widget de ícone. Os check das listas e os seis ícones dos cards são SVG inline em background-image, e as estrelas dos depoimentos usam caractere unicode. Isso permitiu remover o Font Awesome com segurança no functions.php, junto com o script de emoji, o CSS do Gutenberg e o wp-embed: cerca de 110KB retirados do caminho crítico. A Inter é servida localmente e o carregamento de Google Fonts do Elementor fica desligado, eliminando duas conexões externas. A acessibilidade foi tratada com medição, não com estimativa: um script aplica a fórmula oficial de contraste da WCAG 2.1 em cada par de cor da paleta. Duas decisões saíram dele — o âmbar usado nos selos mede 2,15:1 sobre branco e foi restrito a fundo escuro, e o verde clássico do WhatsApp foi descartado porque ícone branco sobre ele mede 1,98:1, abaixo do mínimo de 3:1 que a norma exige para componente gráfico. O Pixel da Meta tem o ID fora do repositório, em constante do wp-config, e dispara os eventos de conversão por um listener delegado: qualquer link de checkout registra InitiateCheckout e qualquer link de WhatsApp registra Contact, inclusive em botões criados depois. O produto, o instrutor e os depoimentos são fictícios, e a própria página declara isso em aviso visível no rodapé e na seção de depoimentos.",
    tecnologias: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript", "Node.js", "Meta Pixel", "WCAG 2.1"],
    imagem: landingInfoprodutoImage,
    repo: "https://github.com/bbigelli/demo-landing-infoproduto",
    data: "2026"
  }
];