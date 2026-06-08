import React from 'react';
import styles from './Projetos.module.css';

const ProjetoCard = ({ projeto, onVerDetalhes }) => {
  // Verificação de segurança para tecnologias
  const tecnologias = projeto.tecnologias || [];
  
  return (
    <div className={styles.projetoCard}>
      <div className={styles.projetoImagem}>
        <img src={projeto.imagem} alt={projeto.titulo} loading="lazy" />
      </div>
      <div className={styles.projetoInfo}>
        <h3 className={styles.projetoTitulo}>{projeto.titulo}</h3>
        <p className={styles.projetoDescricao}>{projeto.descricao}</p>
        
        <div className={styles.projetoTechs}>
          {/* CORREÇÃO AQUI: usa a variável com fallback */}
          {tecnologias.slice(0, 3).map(tech => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
          {tecnologias.length > 3 && (
            <span className={styles.techBadge}>+{tecnologias.length - 3}</span>
          )}
        </div>
        
        <div className={styles.projetoAcoes}>
          <button 
            className={styles.btnDetalhes}
            onClick={onVerDetalhes}
          >
            Ver Detalhes
          </button>
          
          <div className={styles.projetoLinks}>
            <a 
              href={projeto.repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projetoLink}
              title="Ver código no GitHub"
            >
              <span role="img" aria-label="GitHub">📁</span>
            </a>
            {projeto.demo && (
              <a 
                href={projeto.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projetoLink}
                title="Ver demonstração ao vivo"
              >
                <span role="img" aria-label="Demo">🔗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;