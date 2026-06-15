import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Nova Logo Estilizada em SVG */}
        <Link to="/" className="logo">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="logo-icon"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            <path d="M5 14h4v-4H5z" fill="currentColor" stroke="none" opacity="0.3" />
          </svg>
          <span className="logo-text">Lab<span className="logo-highlight">Saúde</span></span>
        </Link>

        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/servicos">Exames</Link></li>
            <li><Link to="/corpo-clinico">Corpo Clínico</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}   