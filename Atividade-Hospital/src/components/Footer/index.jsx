import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <p>&copy; 2026 LabSaúde Análises Clínicas. Todos os direitos reservados.</p>
        <p className="footer-subtext">Horário de Atendimento: Segunda a Sexta das 06h às 18h | Sábado das 07h às 12h</p>
      </div>
    </footer>
  );
}