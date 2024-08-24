import React, { useState } from 'react';
import AgentsList from './components/AgentsList';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    if (page === 'home') {
      return null; 
    } else if (page === 'agents') {
      return <AgentsList />; 
    }
  };

  return (
    <div className="App imagem-fundo-inicio">
      <header className="cabecalho">
        <nav className="links">
          <a href="/" id="home" onClick={(e) => {e.preventDefault(); setPage('home');}}>Início</a>
          <a href="/" id="agents-link" onClick={(e) => {e.preventDefault(); setPage('agents');}}>Agentes</a>
        </nav>
      </header>
      <main className="main-content">
        {renderPage()} {}
      </main>
      <footer className="rodape-index">
        <p>Desenvolvido por Anderson Max</p>
      </footer>
    </div>
  );
}

export default App;