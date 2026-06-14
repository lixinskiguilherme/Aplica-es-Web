import React from 'react';

function CursosOfertados() {
  // Matriz de dados contendo as informações completas dos cursos da universidade
  const cursos = [
    {
      id: 1,
      nome: 'Análise e Desenvolvimento de Sistemas',
      duracao: '2.5 Anos',
      preRequisitos: 'Ensino Médio Completo',
      professor: 'Prof. Dr. Alexandre Silva',
      disciplinas: 'Programação Web, Estrutura de Dados, Engenharia de Software'
    },
    {
      id: 2,
      nome: 'Sistemas de Informação',
      duracao: '4 Anos',
      preRequisitos: 'Ensino Médio Completo',
      professor: 'Profa. Msc. Mariana Costa',
      disciplinas: 'Banco de Dados, Governança de TI, Desenvolvimento Mobile'
    },
    {
      id: 3,
      nome: 'Ciência da Computação',
      duracao: '4 Anos',
      preRequisitos: 'Matemática Básica Avançada',
      professor: 'Prof. Dr. Carlos Eduardo',
      disciplinas: 'Inteligência Artificial, Teoria da Computação, Compiladores'
    },
    {
      id: 4,
      nome: 'Engenharia de Software',
      duracao: '4 Anos',
      preRequisitos: 'Lógica de Programação',
      professor: 'Profa. Dra. Juliana Mendes',
      disciplinas: 'Arquitetura de Software, Testes e Qualidade, DevOps'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
      {/* Cabeçalho da Página */}
      <div style={{ textAlign: 'left', borderBottom: '2px solid #aa3bff', paddingBottom: '10px', marginBottom: '30px' }}>
        <h2 style={{ color: '#08060d', margin: 0 }}>Nossos Cursos Ofertados</h2>
        <p style={{ color: '#6b6375', fontSize: '15px', marginTop: '5px' }}>
          Explore a estrutura dos nossos cursos superiores e encontre a formação ideal para a sua carreira tecnológica.
        </p>
      </div>

      {/* Grid Container para posicionar os Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        marginTop: '20px'
      }}>
        {cursos.map((curso) => (
          <div key={curso.id} style={cardEstilo}>
            
            {/* Título do Card */}
            <div style={cardHeaderEstilo}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{curso.nome}</h3>
            </div>

            {/* Conteúdo com Tabela de Informações */}
            <div style={{ padding: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <tbody>
                  <tr style={linhaTabelaEstilo}>
                    <td style={colunaTituloEstilo}><strong>Duração:</strong></td>
                    <td style={colunaValorEstilo}>{curso.duracao}</td>
                  </tr>
                  <tr style={linhaTabelaEstilo}>
                    <td style={colunaTituloEstilo}><strong>Pré-requisitos:</strong></td>
                    <td style={colunaValorEstilo}>{curso.preRequisitos}</td>
                  </tr>
                  <tr style={linhaTabelaEstilo}>
                    <td style={colunaTituloEstilo}><strong>Professor Res.:</strong></td>
                    <td style={colunaValorEstilo}>{curso.professor}</td>
                  </tr>
                  <tr>
                    <td style={{ ...colunaTituloEstilo, verticalAlign: 'top', paddingTop: '10px' }}><strong>Disciplinas:</strong></td>
                    <td style={{ ...colunaValorEstilo, paddingTop: '10px', color: '#aa3bff', fontWeight: '500' }}>{curso.disciplinas}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

// Obejto de Estilização dos Cards Inteligentes
const cardEstilo = {
  background: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  border: '1px solid #e5e4e7',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.2s, boxShadow 0.2s',
};

const cardHeaderEstilo = {
  background: 'rgba(170, 59, 255, 0.08)',
  color: '#08060d',
  padding: '18px 20px',
  borderBottom: '1px solid rgba(170, 59, 255, 0.15)',
  minHeight: '45px',
  display: 'flex',
  alignItems: 'center'
};

const linhaTabelaEstilo = {
  borderBottom: '1px solid #f4f3ec'
};

const colunaTituloEstilo = {
  padding: '10px 0',
  fontSize: '14px',
  color: '#08060d',
  width: '110px'
};

const colunaValorEstilo = {
  padding: '10px 0 10px 10px',
  fontSize: '14px',
  color: '#6b6375'
};

export default CursosOfertados;