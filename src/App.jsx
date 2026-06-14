import React, { useState } from 'react';
import Home from './Home.jsx';
import CadastroAluno from './CadastroAluno.jsx';
import CadastroProfessor from './CadastroProfessor.jsx';
import Contato from './Contato.jsx';
import CursosOfertados from './CursosOfertados.jsx';

function App() {
  // Estado para controlar qual página exibir
  const [paginaAtual, setPaginaAtual] = useState('HOME');

  // Função para renderizar a página escolhida
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'HOME':
        return <Home />;
      case 'CADASTRODEALUNO':
        return <CadastroAluno />;
      case 'CADASTRODEPROFESSOR':
        return <CadastroProfessor />;
      case 'CONTATO':
        return <Contato />;
      case 'CURSOSOFERTADOS':
        return <CursosOfertados />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Menu de Navegação Superior */}
      <nav style={{ background: '#2c3e50', padding: '15px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={() => setPaginaAtual('HOME')} style={estiloBotao}>HOME</button>
        <button onClick={() => setPaginaAtual('CADASTRODEALUNO')} style={estiloBotao}>CADASTRO DE ALUNO</button>
        <button onClick={() => setPaginaAtual('CADASTRODEPROFESSOR')} style={estiloBotao}>CADASTRO DE PROFESSOR</button>
        <button onClick={() => setPaginaAtual('CURSOSOFERTADOS')} style={estiloBotao}>CURSOS OFERTADOS</button>
        <button onClick={() => setPaginaAtual('CONTATO')} style={estiloBotao}>CONTATO</button>
      </nav>

      {/* Conteúdo Principal da Página */}
      <main style={{ padding: '20px', minHeight: '80vh', background: '#ecf0f1' }}>
        {renderizarPagina()}
      </main>
    </div>
  );
}

// Estilo dos botões do menu
const estiloBotao = {
  background: '#3498db',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '4px',
  transition: '0.3s'
};

export default App;