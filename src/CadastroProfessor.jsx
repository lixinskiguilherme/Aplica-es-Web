import React, { useState } from 'react';

function CadastroProfessor() {
  // Estados para gerenciar os valores dos campos
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [area, setArea] = useState('Programação Web');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  
  // Estado para controle de notificações (sucesso/erro)
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  const handleCadastro = (e) => {
    e.preventDefault();

    // Validação estrita dos campos obrigatórios
    if (!nome.trim() || !cpf.trim() || !email.trim()) {
      setMensagem({
        texto: '⚠️ Por favor, preencha todos os campos obrigatórios (*).',
        tipo: 'erro'
      });
      return;
    }

    // Feedback visual positivo
    setMensagem({
      texto: `🎉 Professor(a) ${nome} cadastrado(a) com sucesso na área de ${area}!`,
      tipo: 'sucesso'
    });

    // Limpeza dos campos após o sucesso
    setNome('');
    setCpf('');
    setTelefone('');
    setEmail('');
  };

  return (
    <div style={{ maxWidth: '650px', margin: '30px auto', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: '#08060d', marginBottom: '10px', textAlign: 'left', borderBottom: '2px solid #aa3bff', paddingBottom: '8px' }}>
        Cadastro de Professor
      </h2>
      <p style={{ color: '#6b6375', fontSize: '14px', marginBottom: '25px', textAlign: 'left' }}>
        Os campos marcados com <span style={{ color: '#e74c3c' }}>*</span> são de preenchimento obrigatório.
      </p>

      {/* Alertas de Feedback */}
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
            placeholder="Digite o nome completo do docente" 
            style={estiloInput} 
          />
        </div>

        {/* Linha Dupla: CPF e Área de Atuação */}
        <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
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
            <label style={estiloLabel}>Área de Atuação</label>
            <select 
              value={area}
              onChange={(e) => setArea(e.target.value)}
              style={estiloSelect}
            >
              <option value="Programação Web">Programação Web</option>
              <option value="Banco de Dados">Banco de Dados</option>
              <option value="Engenharia de Software">Engenharia de Software</option>
              <option value="Redes e Segurança">Redes e Segurança</option>
              <option value="Inteligência Artificial">Inteligência Artificial</option>
            </select>
          </div>
        </div>

        {/* Linha Dupla: Telefone e Email */}
        <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
          <div style={containerInput}>
            <label style={estiloLabel}>Telefone de Contato</label>
            <input 
              type="tel" 
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(00) 00000-0000" 
              style={estiloInput} 
            />
          </div>
          <div style={containerInput}>
            <label style={estiloLabel}>E-mail Institucional <span style={{ color: '#e74c3c' }}>*</span></label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="docente@instituicao.com" 
              style={estiloInput} 
            />
          </div>
        </div>

        {/* Botão de Envio */}
        <button type="submit" style={botaoEnviar}>
          Cadastrar Professor
        </button>

      </form>
    </div>
  );
}

// Objetos de Estilo
const containerInput = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  textAlign: 'left'
};

const estiloLabel = {
  fontSize: '14px',
  fontWeight: 'bold',
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

const getMensagemEstilo = (tipo) => {
  if (tipo === 'erro') {
    return { bg: '#fdf2f2', cor: '#9b1c1c', borda: '#f8b4b4' };
  }
  return { bg: '#f3faf7', cor: '#03543f', borda: '#def7ec' };
};

export default CadastroProfessor;