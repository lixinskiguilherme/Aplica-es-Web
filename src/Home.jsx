import React from 'react';
// Importa a imagem local da pasta assets
import bannerUniversidade from './assets/Universit_SM.png.png';

function Home() {
  return (
    <div style={{ padding: '20px 20px 40px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      
      {/* Banner Principal utilizando a Imagem Gerada */}
      <div style={{
        borderRadius: '12px',
        overflow: 'hidden',
        width: '100%',
        height: 'auto',
        maxHeight: '380px',
        marginBottom: '35px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
        display: 'flex'
      }}>
        <img 
          src={bannerUniversidade} 
          alt="Fachada Principal Universit SM" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' // Garante o enquadramento perfeito sem distorcer as letras do letreiro
          }}
        />
      </div>

      {/* Conteúdo Institucional */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#08060d', fontSize: '32px', marginBottom: '15px', fontWeight: 'bold' }}>
          Bem-vindo à Universit SM
        </h1>
        
        <p style={{ fontSize: '18px', lineHeight: '160%', color: '#6b6375', marginBottom: '30px' }}>
          Um espaço dedicado à excelência acadêmica, inovação e transformação profissional. 
          Aqui na <strong>Universit SM</strong>, unimos a teoria essencial à prática de mercado, 
          fornecendo a estrutura e o suporte necessários para você alcançar seus maiores objetivos na área de tecnologia.
        </p>

        {/* Caixa de Destaque das Matrículas */}
        <div style={{ background: 'rgba(0, 86, 179, 0.08)', padding: '20px', borderRadius: '8px', border: '1px dashed #0056b3' }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#0056b3', margin: 0 }}>
            🚀 As matrículas estão abertas para o novo ciclo! Explore o nosso menu superior, 
            conheça os nossos Cursos Ofertados e dê o próximo passo na sua jornada acadêmica.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;