import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../hero.png'; // Sobe 1 nível até a pasta assets onde está a imagem
import './style.css'; 

export default function Home() {
  return (
    <div className="home-container">
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
        <div className="hero-image">
          <img src={heroImg} alt="Laboratório Hospitalar" />
        </div>
      </section>

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