import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SobreMim from './components/SobreMim/SobreMim';
import Projetos from './components/Projetos/Projetos';
import Habilidades from './components/Habilidades/Habilidades';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <SobreMim />
        <Projetos />
        <Habilidades />
        <Contato />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;