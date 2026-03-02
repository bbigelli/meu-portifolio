import React, { useState } from 'react';
import ProjetoCard from './ProjetoCard';
import ModalProjeto from './ModalProjeto';
import { projetos } from '../../data/projetos';
import styles from './Projetos.module.css';

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <section id="projetos" className={styles.projetos}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Meus Projetos</h2>
        <p className={styles.sectionSubtitle}>
          Conheça alguns dos projetos que desenvolvi durante minha jornada
        </p>
        
        <div className={styles.projetosGrid}>
          {projetos.map(projeto => (
            <ProjetoCard 
              key={projeto.id}
              projeto={projeto}
              onVerDetalhes={() => setProjetoSelecionado(projeto)}
            />
          ))}
        </div>
      </div>

      <ModalProjeto 
        projeto={projetoSelecionado}
        onFechar={() => setProjetoSelecionado(null)}
      />
    </section>
  );
};

export default Projetos;