import React from 'react';
import CategoriaHabilidade from './CategoriaHabilidade';
import BarraProficiencia from './BarraProficiencia';
import { habilidades, niveisProficiencia } from '../../data/habilidades';
import styles from './Habilidades.module.css';

const Habilidades = () => {
  return (
    <section id="habilidades" className={styles.habilidades}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Minhas Habilidades</h2>
        <p className={styles.sectionSubtitle}>
          Tecnologias e ferramentas que domino
        </p>
        
        <div className={styles.habilidadesCategorias}>
          {habilidades.map((categoria, index) => (
            <CategoriaHabilidade 
              key={index}
              categoria={categoria.categoria}
              itens={categoria.items}
            />
          ))}
        </div>

        <div className={styles.niveisContainer}>
          <h3 className={styles.niveisTitulo}>Níveis de Proficiência</h3>
          <div className={styles.niveisGrid}>
            {niveisProficiencia.map((item, index) => (
              <BarraProficiencia 
                key={index}
                nome={item.nome}
                nivel={item.nivel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;