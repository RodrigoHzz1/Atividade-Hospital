import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Banner Principal */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Precisão e Confiança em Análises Clínicas</h1>
          <p>
            Resultados rápidos, seguros e tecnologia de ponta para cuidar da sua saúde e de quem você ama.
          </p>
          <Link to="/servicos" className="cta-button">
            Ver Exames e Preparos
          </Link>
        </div>

        {/* Ilustração Hospitalar Avançada em SVG no lugar da imagem antiga */}
        <div className="hero-image-container">
          <svg 
            viewBox="0 0 500 400" 
            className="lab-illustration"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Círculos de Fundo Modernos */}
            <circle cx="250" cy="200" r="160" fill="#f0fdfa" />
            <circle cx="380" cy="120" r="50" fill="#ccfbf1" opacity="0.6" />
            
            {/* Base do Laboratório */}
            <rect x="100" y="300" width="300" height="12" rx="6" fill="#1e293b" />
            
            {/* O Microscópio */}
            <path d="M180 300 V180 h30" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M210 160 l30 40" stroke="#0d9488" strokeWidth="16" strokeLinecap="round" fill="none" />
            <circle cx="180" cy="220" r="16" fill="#0d9488" />
            <rect x="230" y="210" width="20" height="40" rx="4" fill="#0f766e" transform="rotate(-30 230 210)" />
            <rect x="150" y="280" width="80" height="8" rx="2" fill="#94a3b8" />
            
            {/* Prato de Amostras */}
            <line x1="200" y1="260" x2="250" y2="260" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
            <circle cx="225" cy="254" r="4" fill="#0d9488" />

            {/* Suporte de Tubos de Ensaio */}
            <rect x="300" y="240" width="80" height="60" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            <line x1="300" y1="260" x2="380" y2="260" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Tubo de Ensaio 1 (Com Sangue/Líquido Reagente) */}
            <rect x="315" y="210" width="16" height="60" rx="8" fill="#ffffff" stroke="#1e293b" strokeWidth="4" />
            <rect x="319" y="235" width="8" height="30" rx="4" fill="#ef4444" /> {/* Líquido Vermelho */}
            
            {/* Tubo de Ensaio 2 (Com Líquido Plasma/Verde) */}
            <rect x="345" y="195" width="16" height="75" rx="8" fill="#ffffff" stroke="#1e293b" strokeWidth="4" />
            <rect x="349" y="220" width="8" height="45" rx="4" fill="#0d9488" /> {/* Líquido Verde Hospital */}

            {/* Elementos Flutuantes / Átomos / Moléculas */}
            <g className="floating-elements">
              <circle cx="320" cy="110" r="8" fill="#0d9488" />
              <line x1="320" y1="110" x2="350" y2="140" stroke="#0d9488" strokeWidth="3" />
              <circle cx="350" cy="140" r="14" fill="#0f766e" />
              <circle cx="350" cy="140" r="6" fill="#ffffff" />
              
              <circle cx="120" cy="150" r="10" fill="#ccfbf1" stroke="#0d9488" strokeWidth="3" />
              <circle cx="140" cy="110" r="6" fill="#0d9488" />
            </g>

            {/* Gráfico de DNA ou ondas de batimento */}
            <path d="M120 240 q15 -20 30 0 t30 0" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6,6" />
          </svg>
        </div>
      </section>

      {/* Cartões de Diferenciais */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="icon">🧪</div>
          <h3>Coleta Humanizada</h3>
          <p>Atendimento especializado focado no conforto de crianças, adultos e idosos.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Resultados Rápidos</h3>
          <p>Acesse seus laudos e resultados online de forma prática e 100% segura.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🏅</div>
          <h3>Certificação de Qualidade</h3>
          <p>Processos rigorosos que garantem a exatidão de cada diagnóstico.</p>
        </div>
      </section>
    </div>
  );
}