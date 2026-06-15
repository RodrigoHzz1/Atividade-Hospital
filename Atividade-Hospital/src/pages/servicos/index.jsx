import React from 'react';
import './style.css';

export default function Servicos() {
  const listaExames = [
    { 
      id: 1, 
      nome: "Hemograma Completo", 
      tempo: "24 horas", 
      preparo: "Jejum opcional de 3 a 4 horas. Evitar bebidas alcoólicas nas 72 horas que antecedem o exame." 
    },
    { 
      id: 2, 
      nome: "Perfil Lipídico", 
      tempo: "24 horas", 
      preparo: "Jejum recomendável de 12 horas ou conforme orientação médica. Manter dieta habitual." 
    },
    { 
      id: 3, 
      nome: "Glicemia de Jejum", 
      tempo: "12 horas", 
      preparo: "Jejum obrigatório de 8 a 12 horas. Não realizar atividade física antes da coleta." 
    },
    { 
      id: 4, 
      nome: "Exame Parasitológico de Fezes (EPF)", 
      tempo: "24 horas", 
      preparo: "Coletar uma pequena amostra no frasco apropriado. Não usar laxantes ou supositórios antes da coleta." 
    },
    { 
      id: 5, 
      nome: "Dosagem de Vitamina D (25-Hidroxivitamina D)", 
      tempo: "2 dias úteis", 
      preparo: "Não requer jejum obrigatório. Informar se faz uso de suplementação de Vitamina D ou Biotina." 
    },
    { 
      id: 6, 
      nome: "Preventivo (Papanicolau)", 
      tempo: "5 dias úteis", 
      preparo: "Não estar no período menstrual. Evitar relações sexuais e o uso de duchas ou cremes vaginais nas 48 horas anteriores." 
    }
  ];

  return (
    <div className="services-container">
      <section className="services-hero">
        <div className="hero-text-content">
          <h1>Nossos Exames e Serviços</h1>
          <p>
            Consulte nossa lista de análises clínicas, prazos de entrega dos laudos e as orientações necessárias para o seu preparo.
          </p>
        </div>

        <div className="services-image-container">
          <svg viewBox="0 0 500 400" className="services-illustration" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="200" r="160" fill="#f0fdfa" />
            <circle cx="360" cy="260" r="45" fill="#ccfbf1" opacity="0.6" />
            
            <path d="M250 90 c60 0 110 20 110 20 v90 c0 60-50 100-110 120 c-60-20-110-60-110-120 v-90 s50-20 110-20Z" fill="#ffffff" stroke="#1e293b" strokeWidth="6" />
            
            <rect x="235" y="140" width="30" height="100" rx="4" fill="#0d9488" />
            <rect x="200" y="175" width="100" height="30" rx="4" fill="#0d9488" />
          </svg>
        </div>
      </section>

      <section className="services-list">
        <h2>Exames Disponíveis</h2>
        <div className="services-grid">
          {listaExames.map((exame) => (
            <div key={exame.id} className="exam-card">
              <div className="exam-header">
                <h3>{exame.nome}</h3>
                <span className="exam-time">⏱️ {exame.tempo}</span>
              </div>
              <div className="exam-body">
                <h4>Preparo Necessário:</h4>
                <p>{exame.preparo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}