import './style.css';

export default function CorpoClinico() {
  // Lista de profissionais fictícios do laboratório
  const medicos = [
    {
      id: 1,
      nome: "Dra. Mariana Silva",
      especialidade: "Hematologia e Clínico Geral",
      crm: "CRM-BA 12345",
      avatar: "👩‍⚕️",
      descricao: "Especialista em análise de distúrbios sanguíneos e coordenadora da equipe de coleta humanizada."
    },
    {
      id: 2,
      nome: "Dr. Carlos Eduardo",
      especialidade: "Patologia Clínica",
      crm: "CRM-BA 67890",
      avatar: "👨‍⚕️",
      descricao: "Responsável técnico pela validação de laudos complexos e análises de bioquímica avançada."
    },
    {
      id: 3,
      nome: "Dra. Beatriz Costa",
      especialidade: "Genética Médica",
      crm: "CRM-BA 54321",
      avatar: "🔬",
      descricao: "Especialista em sequenciamento de DNA, exames moleculares e aconselhamento genético."
    },
    {
      id: 4,
      nome: "Dr. Roberto Nunes",
      especialidade: "Imunologia e Alergologia",
      crm: "CRM-BA 98765",
      avatar: "👨‍⚕️",
      descricao: "Focado em testes diagnósticos de alergias, intolerâncias e mapeamento do sistema imune."
    }
  ];

  return (
    <div className="clinico-container">
      <div className="clinico-header">
        <h2>Nosso Corpo Clínico</h2>
        <p>Conheça a equipe de especialistas renomados responsável pela precisão e segurança dos seus diagnósticos.</p>
      </div>

      <div className="clinico-grid">
        {medicos.map((medico) => (
          <div key={medico.id} className="clinico-card">
            <div className="clinico-avatar">{medico.avatar}</div>
            <h3>{medico.nome}</h3>
            <span className="badge-especialidade">{medico.especialidade}</span>
            <p className="medico-crm">{medico.crm}</p>
            <p className="medico-desc">{medico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}