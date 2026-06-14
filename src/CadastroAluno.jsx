import React, { useState } from 'react';

function CadastroAluno() {
  // Estados para guardar os valores dos campos
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [curso, setCurso] = useState('Análise e Desenvolvimento de Sistemas');
  
  // Estado para controlar mensagens
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  const handleCadastro = (e) => {
    e.preventDefault();

    // Validação estrita dos campos obrigatórios
    if (!nome.trim() || !cpf.trim() || !endereco.trim()) {
      setMensagem({
        texto: '⚠️ Por favor, preencha todos os campos obrigatórios (*).',
        tipo: 'erro'
      });
      return;
    }

    // Se passou na validação, finge o envio com sucesso
    setMensagem({
      texto: `🎉 Aluno ${nome} cadastrado com sucesso no curso de ${curso}!`,
      tipo: 'sucesso'
    });

    // Limpa os campos após o cadastro
    setNome('');
    setCpf('');
    setRg('');
    setTelefone('');
    setEndereco('');
  };

  return (
    <div style={{ maxWidth: '650px', margin: '30px auto', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: '#08060d', marginBottom: '10px', textAlign: 'left', borderBottom: '2px solid #aa3bff', paddingBottom: '8px' }}>
        Cadastro de Aluno
      </h2>
      <p style={{ color: '#6b6375', fontSize: '14px', marginBottom: '25px', textAlign: 'left' }}>
        Os campos marcados com <span style={{ color: '#e74c3c' }}>*</span> são de preenchimento obrigatório.
      </p>

      {/* Exibição de Mensagens de Erro ou Sucesso */}
      {mensagem.texto && (
        <div style={{
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px',
          textAlign: 'left',
          fontWeight: '500',
          fontSize: '14px',
          background: getMensagemEstilo(mensagem.tipo).bg,
          color: getMensagemEstilo(mensagem.tipo).cor,
          border: `1px solid ${getMensagemEstilo(mensagem.tipo).borda}`
        }}>
          {mensagem.texto}
        </div>
      )}

      <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Campo Nome (Obrigatório) - Linha Inteira */}
        <div style={containerInput}>
          <label style={estiloLabel}>Nome Completo <span style={{ color: '#e74c3c' }}>*</span></label>
          <input 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo do aluno" 
            style={estiloInput} 
          />
        </div>

        {/* Linha Dupla: CPF e RG */}
        <div style={{ display: 'grid', gridTemplateColumns: '1px solid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={containerInput}>
            <label style={estiloLabel}>CPF <span style={{ color: '#e74c3c' }}>*</span></label>
            <input 
              type="text" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00" 
              style={estiloInput} 
            />
          </div>
          <div style={containerInput}>
            <label style={estiloLabel}>RG</label>
            <input 
              type="text" 
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              placeholder="Digite o RG" 
              style={estiloInput} 
            />
          </div>
        </div>

        {/* Linha Dupla: Telefone e Curso */}
        <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={containerInput}>
            <label style={estiloLabel}>Telefone</label>
            <input 
              type="tel" 
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(00) 00000-0000" 
              style={estiloInput} 
            />
          </div>
          <div style={containerInput}>
            <label style={estiloLabel}>Curso Pretendido</label>
            <select 
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              style={estiloSelect}
            >
              <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
              <option value="Sistemas de Informação">Sistemas de Informação</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Engenharia de Software">Engenharia de Software</option>
            </select>
          </div>
        </div>

        {/* Campo Endereço (Obrigatório) - Linha Inteira */}
        <div style={containerInput}>
          <label style={estiloLabel}>Endereço Residencial <span style={{ color: '#e74c3c' }}>*</span></label>
          <input 
            type="text" 
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Rua, número, bairro e cidade" 
            style={estiloInput} 
          />
        </div>

        {/* Botão Cadastrar */}
        <button type="submit" style={botaoEnviar}>
          Cadastrar Aluno
        </button>

      </form>
    </div>
  );
}

// Estilos em Objetos para manter o código limpo e elegante
const containerInput = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  textAlign: 'left'
};

const estiloLabel = {
  fontSize: '14px',
  fontWeight: '6px',
  color: '#08060d'
};

const estiloInput = {
  padding: '10px 12px',
  borderRadius: '6px',
  border: '1px solid #e5e4e7',
  fontSize: '15px',
  outline: 'none',
  background: '#fcfcfc',
  transition: '0.2s'
};

const estiloSelect = {
  ...estiloInput,
  background: '#fcfcfc',
  cursor: 'pointer'
};

const botaoEnviar = {
  background: '#aa3bff',
  color: 'white',
  border: 'none',
  padding: '12px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '10px',
  transition: '0.3s',
  boxShadow: '0 4px 12px rgba(170, 59, 255, 0.2)'
};

// Auxiliar para as cores do alerta
const getMensagemEstilo = (tipo) => {
  if (tipo === 'erro') {
    return { bg: '#fdf2f2', cor: '#9b1c1c', borda: '#f8b4b4' };
  }
  return { bg: '#f3faf7', cor: '#03543f', borda: '#def7ec' };
};

export default CadastroAluno;