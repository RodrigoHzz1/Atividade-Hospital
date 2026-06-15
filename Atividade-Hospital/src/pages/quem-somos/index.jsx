import React from 'react';
import './style.css';

export default function QuemSomos() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Quem Somos</h1>
        <p className="lead">
          No LabSaúde, nossa missão é cuidar da sua vida através de diagnósticos precisos e atendimento humanizado.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Nossa História</h2>
          <p>
            Fundado com o objetivo de democratizar o acesso a exames laboratoriais de alta complexidade, 
            o LabSaúde consolidou-se como referência em análises clínicas. Combinamos tecnologia de ponta 
            com uma equipe médica altamente qualificada para oferecer resultados rápidos e indiscutíveis.
          </p>
          <p>
            Acreditamos que por trás de cada tubo de ensaio existe uma vida que merece respeito, dedicação 
            e o melhor cuidado possível.
          </p>
        </div>

        <div className="about-metrics">
          <div className="metric-card">
            <h3>+10 Anos</h3>
            <p>Cuidando da sua saúde</p>
          </div>
          <div className="metric-card">
            <h3>99.8%</h3>
            <p>De precisão nos laudos</p>
          </div>
          <div className="metric-card">
            <h3>500k+</h3>
            <p>Pacientes atendidos</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Nossos Valores</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>Integridade</h4>
            <p>Trabalhamos com ética absoluta e transparência em todos os processos laboratoriais.</p>
          </div>
          <div className="value-item">
            <h4>Inovação</h4>
            <p>Investimos continuamente nos robôs e softwares de análises mais modernos do mercado.</p>
          </div>
          <div className="value-item">
            <h4>Humanização</h4>
            <p>Entendemos que um ambiente acolhedor faz toda a diferença na hora da coleta.</p>
          </div>
        </div>
      </section>
    </div>
  );
}