import React, { useState } from 'react';

function Contato() {
  // Estados para controlar os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagemEnvio, setMensagemEnvio] = useState('');
  
  // Estado para exibir o alerta de feedback
  const [alerta, setAlerta] = useState({ texto: '', tipo: '' });

  const handleEnviar = (e) => {
    e.preventDefault();

    // Validação de todos os campos (Nome incluído como obrigatório!)
    if (!nome.trim() || !email.trim() || !mensagemEnvio.trim()) {
      setAlerta({
        texto: '⚠️ Por favor, preencha todos os campos do formulário antes de enviar.',
        tipo: 'erro'
      });
      return;
    }

    // Feedback de sucesso personalizado com o nome preenchido
    setAlerta({
      texto: `✉️ Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso para a nossa equipe.`,
      tipo: 'sucesso'
    });

    // Limpa o formulário após o envio
    setNome('');
    setEmail('');
    setMensagemEnvio('');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
      
      {/* Cabeçalho da Página */}
      <div style={{ textAlign: 'left', borderBottom: '2px solid #aa3bff', paddingBottom: '10px', marginBottom: '30px' }}>
        <h2 style={{ color: '#08060d', margin: 0 }}>Fale Conosco</h2>
        <p style={{ color: '#6b6375', fontSize: '15px', marginTop: '5px' }}>
          Tem alguma dúvida, sugestão ou deseja saber mais sobre nossos cursos? Entre em contato conosco.
        </p>
      </div>

      {/* Alerta de feedback */}
      {alerta.texto && (
        <div style={{
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '25px',
          textAlign: 'left',
          fontWeight: '500',
          fontSize: '14px',
          background: alerta.tipo === 'erro' ? '#fdf2f2' : '#f3faf7',
          color: alerta.tipo === 'erro' ? '#9b1c1c' : '#03543f',
          border: `1px solid ${alerta.tipo === 'erro' ? '#f8b4b4' : '#def7ec'}`
        }}>
          {alerta.texto}
        </div>
      )}

      {/* Layout de Duas Colunas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* Coluna 1: Informações da Universidade */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div style={{ background: '#ffffff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e4e7' }}>
            <h3 style={{ color: '#08060d', marginTop: 0, marginBottom: '15px', fontSize: '18px', borderBottom: '1px solid #f4f3ec', paddingBottom: '8px' }}>
              Nossa Sede
            </h3>
            
            <p style={{ color: '#6b6375', fontSize: '15px', lineHeight: '160%', marginBottom: '15px' }}>
              🏢 <strong>Endereço:</strong><br />
             Rua dos Andradas, nº 1614 - Centro<br />
              Santa Maria - RS, CEP 97.010-491
            </p>

            <p style={{ color: '#6b6375', fontSize: '15px', lineHeight: '160%', marginBottom: '15px' }}>
              📞 <strong>Telefone:</strong><br />
              (55) 3220-8000
            </p>

            <p style={{ color: '#6b6375', fontSize: '15px', lineHeight: '160%', marginBottom: '15px' }}>
              ✉️ <strong>E-mail Institucional:</strong><br />
              <span style={{ color: '#aa3bff', fontWeight: '500' }}>contato@ufn.edu.br</span>
            </p>

            <p style={{ color: '#6b6375', fontSize: '14px', lineHeight: '160%', marginTop: '20px', fontStyle: 'italic', background: '#f4f3ec', padding: '10px', borderRadius: '4px' }}>
              🕒 <strong>Horário de Atendimento:</strong><br />
              Segunda a Sexta, das 08h às 22h.
            </p>
          </div>
        </div>

        {/* Coluna 2: Formulário de Mensagem */}
        <div style={{ background: '#ffffff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e4e7', textAlign: 'left' }}>
          <h3 style={{ color: '#08060d', marginTop: 0, marginBottom: '20px', fontSize: '18px', borderBottom: '1px solid #f4f3ec', paddingBottom: '8px' }}>
            Envie uma Mensagem
          </h3>

          <form onSubmit={handleEnviar} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Campo Nome (Obrigatório) */}
            <div style={containerInput}>
              <label style={estiloLabel}>Seu Nome <span style={{ color: '#e74c3c' }}>*</span></label>
              <input 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo" 
                style={estiloInput}
              />
            </div>

            {/* Campo E-mail (Obrigatório) */}
            <div style={containerInput}>
              <label style={estiloLabel}>Seu E-mail <span style={{ color: '#e74c3c' }}>*</span></label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com" 
                style={estiloInput}
              />
            </div>

            {/* Campo Mensagem (Obrigatório) */}
            <div style={containerInput}>
              <label style={estiloLabel}>Mensagem <span style={{ color: '#e74c3c' }}>*</span></label>
              <textarea 
                value={mensagemEnvio}
                onChange={(e) => setMensagemEnvio(e.target.value)}
                placeholder="Escreva detalhadamente a sua dúvida ou solicitação..." 
                rows="5"
                style={estiloTextArea}
              />
            </div>

            <button type="submit" style={botaoEnviar}>
              Enviar Mensagem
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

// Objetos de estilo para consistência visual
const containerInput = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
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

const estiloTextArea = {
  ...estiloInput,
  resize: 'vertical',
  fontFamily: 'inherit'
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
  boxShadow: '0 4px 12px rgba(170, 59, 255, 0.2)',
  textAlign: 'center'
};

export default Contato;