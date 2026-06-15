import './style.css';

export default function Blog() {
  // Dados fictícios das postagens do blog do laboratório
  const posts = [
    {
      id: 1,
      title: "A Importância do Check-up Anual: Prevenir é o Melhor Remédio",
      category: "Prevenção",
      date: "15 Jun, 2026",
      summary: "Descubra quais são os exames laboratoriais essenciais que você deve realizar todos os anos para monitorar sua saúde e detectar doenças precocemente.",
      image: "🧪",
      readTime: "5 min de leitura"
    },
    {
      id: 2,
      title: "Como se Preparar Corretamente para o seu Exame de Sangue",
      category: "Dicas Úteis",
      date: "10 Jun, 2026",
      summary: "O jejum ainda é obrigatório? Posso beber água? Tiramos as principais dúvidas sobre o que você pode ou não fazer antes de realizar a sua coleta.",
      image: "🩸",
      readTime: "4 min de leitura"
    },
    {
      id: 3,
      title: "Mitos e Verdades Sobre a Alimentação e o Colesterol Alto",
      category: "Nutrição",
      date: "02 Jun, 2026",
      summary: "Será que o ovo é mesmo o grande vilão? Entenda como as análises clínicas ajudam a mapear o seu perfil lipídico e o papel real da dieta.",
      image: "🍏",
      readTime: "6 min de leitura"
    },
    {
      id: 4,
      title: "Entenda o Exame de Hemograma: O que os Resultados Dizem?",
      category: "Saúde de A a Z",
      date: "28 Mai, 2026",
      summary: "Plaquetas, leucócitos, hemácias... Desmistificamos os termos técnicos do exame mais solicitado pelos médicos e o que cada índice significa.",
      image: "🔬",
      readTime: "7 min de leitura"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>Blog LabSaúde</h2>
        <p>Informações confiáveis, dicas de prevenção e novidades da ciência médica para o seu bem-estar.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-icon">{post.image}</div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="blog-card-footer">
                <span className="read-time">{post.readTime}</span>
                <button className="read-more-btn">Ler Artigo →</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}