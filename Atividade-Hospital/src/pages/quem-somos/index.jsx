import React from 'react';
import './style.css';

export default function QuemSomos() {
  return (
    <div className="about-container">
      {/* Banner Principal Padronizado */}
      <section className="about-hero">
        <div className="hero-text-content">
          <h1>Quem Somos</h1>
          <p className="lead">
            No LabSaúde, nossa missão é cuidar da sua vida através de diagnósticos precisos e atendimento humanizado.
          </p>
        </div>
        
        {/* Ilustração Temática para Quem Somos */}
        <div className="about-image-container">
          <svg viewBox="0 0 500 400" className="about-illustration" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="200" r="160" fill="#f0fdfa" />
            <circle cx="150" cy="120" r="40" fill="#ccfbf1" opacity="0.6" />
            
            {/* Prontuário / Prancheta Médica */}
            <rect x="160" y="100" width="180" height="230" rx="12" fill="#ffffff" stroke="#1e293b" strokeWidth="6" />
            <rect x="210" y="85" width="80" height="25" rx="6" fill="#94a3b8" />
            
            {/* Linhas de Check-up Médico */}
            <line x1="200" y1="150" x2="300" y2="150" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
            <line x1="200" y1="190" x2="280" y2="190" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <line x1="200" y1="220" x2="290" y2="220" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <line x1="200" y1="250" x2="250" y2="250" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            
            {/* Ícones de Coração / Batimento */}
            <path d="M210 285 c-10-10-25 0-25 15 c0 15 25 30 25 30 s25-15 25-30 c0-15-15-25-25-15Z" fill="#ef4444" />
            <path d="M250 295 h20 l5-15 l10 25 l5-15 h20" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Nossa História</h2>
          <p>
            Fundado com o objetivo de democratizar o acesso a exames laboratoriais de alta complexidade, 
            o LabSaúde consolidou-se como referência em análises clínicas. Combinamos tecnologia de ponta 
            com uma equipe médica altamente qualificada para oferecer resultados rápidos e indiscutíveis.
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
        </div>
      </section>
    </div>
  );
}