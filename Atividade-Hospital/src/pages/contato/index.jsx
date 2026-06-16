import { useState } from 'react';
import './style.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Agendamento',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui simularia o envio dos dados
    alert(`Obrigado pelo contato, ${formData.nome}! Sua mensagem sobre "${formData.assunto}" foi enviada com sucesso.`);
    setFormData({ nome: '', email: '', telefone: '', assunto: 'Agendamento', mensagem: '' });
  };

  return (
    <div className="contato-container">
      <div className="contato-content">
        
        {/* Coluna de Informações Institucionais */}
        <div className="contato-info">
          <h2>Fale Conosco</h2>
          <p className="subtitle">Estamos prontos para atender você e sua família com precisão e cuidado.</p>
          
          <div className="info-block">
            <h3>📍 Endereço</h3>
            <p>Av. da Saúde, 123 — Setor Médico Hospitalar</p>
            <p>Salvador - BA, CEP: 41000-000</p>
          </div>

          <div className="info-block">
            <h3>📞 Central de Atendimento</h3>
            <p>Telefone: (71) 3333-4444</p>
            <p>WhatsApp: (71) 99999-8888</p>
          </div>

          <div className="info-block">
            <h3>⏰ Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 06h às 18h</p>
            <p>Sábado: 07h às 12h</p>
          </div>
        </div>

        {/* Coluna do Formulário */}
        <div className="contato-form-box">
          <h3>Envie uma Mensagem</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input 
                type="text" id="nome" name="nome" required 
                value={formData.nome} onChange={handleChange} 
                placeholder="Digite seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" id="email" name="email" required 
                value={formData.email} onChange={handleChange} 
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input 
                type="tel" id="telefone" name="telefone" required 
                value={formData.telefone} onChange={handleChange} 
                placeholder="(71) 99999-9999"
              />
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" name="assunto" value={formData.assunto} onChange={handleChange}>
                <option value="Agendamento">Agendamento de Exames</option>
                <option value="Dúvidas">Dúvidas gerais</option>
                <option value="Sugestões">Sugestões e Elogios</option>
                <option value="Reclamações">Reclamações</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea 
                id="mensagem" name="mensagem" rows="4" required 
                value={formData.mensagem} onChange={handleChange} 
                placeholder="Como podemos te ajudar?"
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensagem</button>
          </form>
        </div>

      </div>
    </div>
  );
}