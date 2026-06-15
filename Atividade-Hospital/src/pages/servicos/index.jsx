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
      nome: "Perfil Lipídico (Colesterol e Triglicerídeos)",
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
      nome: "Creatinina e Ureia (Função Renal)",
      tempo: "24 horas",
      preparo: "Jejum de 3 horas recomendável. Informar uso de medicamentos de uso contínuo."
    },
    {
      id: 5,
      nome: "TSH e T4 Livre (Tireoide)",
      tempo: "2 dias úteis",
      preparo: "Não requer jejum obrigatório. Coletar preferencialmente pela manhã antes de tomar a medicação da tireoide."
    },
    {
      id: 6,
      nome: "Exame de Urina Tipo 1 (EAS)",
      tempo: "12 horas",
      preparo: "Coletar preferencialmente a primeira urina da manhã. Realizar higiene íntima prévia e desprezar o primeiro jato."
    }
  ];

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Nossos Exames e Serviços</h1>
        <p>
          Consulte nossa lista de análises clínicas, prazos de entrega dos laudos e as orientações necessárias para o seu preparo.
        </p>
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

      <section className="services-info">
        <h3>Importante para o dia da coleta:</h3>
        <ul>
          <li>Sempre traga um documento oficial com foto e a sua carteirinha do convênio (se aplicável).</li>
          <li>O pedido médico original dentro do prazo de validade é obrigatório para a maioria dos exames.</li>
          <li>Caso tenha dúvidas específicas sobre algum preparo, entre em contato conosco antes do dia do exame.</li>
        </ul>
      </section>
    </div>
  );
}