import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          🔬 <span className="logo-text">LabSaúde</span>
        </div>
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