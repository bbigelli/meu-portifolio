import React, { useState } from 'react';
import styles from './Contato.module.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [status, setStatus] = useState({
    enviando: false,
    enviado: false,
    erro: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ enviando: true, enviado: false, erro: null });

    const FORM_ID = process.env.REACT_APP_FORM_ID;
    
    if (!FORM_ID) {
      setStatus({ 
        enviando: false, 
        enviado: false, 
        erro: 'Erro de configuração. Por favor, tente novamente mais tarde.' 
      });
      return;
    }
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Novo contato do portfólio: ${formData.assunto}`
        })
      });

      if (response.ok) {
        setStatus({ enviando: false, enviado: true, erro: null });
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, enviado: false }));
        }, 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus({ 
        enviando: false, 
        enviado: false, 
        erro: 'Ops! Algo deu errado. Por favor, tente novamente.' 
      });
    }
  };

  return (
    <section id="contato" className={styles.contato}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        
        <div className={styles.contatoContainer}>
          <p className={styles.contatoDescricao}>
            Tem um projeto em mente? Quer conversar sobre tecnologia? 
            Ou apenas trocar uma ideia? Preencha o formulário abaixo 
            e entrarei em contato o mais breve possível!
          </p>

          {status.enviado && (
            <div className={styles.mensagemSucesso}>
              <h3>✅ Mensagem enviada com sucesso!</h3>
              <p>Obrigado pelo contato! Responderei em breve.</p>
            </div>
          )}

          {status.erro && (
            <div className={styles.mensagemErro}>
              <p>{status.erro}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.contatoForm}>
            <div className={styles.formGrid}>
              <div className={styles.formGrupo}>
                <label htmlFor="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  disabled={status.enviando}
                />
              </div>

              <div className={styles.formGrupo}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  disabled={status.enviando}
                />
              </div>
            </div>

            <div className={styles.formGrupo}>
              <label htmlFor="assunto">Assunto *</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                placeholder="Assunto da mensagem"
                disabled={status.enviando}
              />
            </div>

            <div className={styles.formGrupo}>
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Escreva sua mensagem aqui..."
                disabled={status.enviando}
              />
            </div>

            <button 
              type="submit" 
              className={styles.btnEnviar}
              disabled={status.enviando}
            >
              {status.enviando ? 'Enviando...' : 'Enviar Mensagem ✉️'}
            </button>
          </form>

          <div className={styles.redesSociais}>
            <h3>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/bbigelli" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span role="img" aria-label="GitHub">🐙</span> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/brunobigelli" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span role="img" aria-label="LinkedIn">🔗</span> LinkedIn
              </a>
              <a 
                href="mailto:bbigelli@hotmail.com" 
                className={styles.socialLink}
              >
                <span role="img" aria-label="Email">📧</span> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;