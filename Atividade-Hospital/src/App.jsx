import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Estruturais Fixos
import Header from './assets/components/Header/index.jsx'; 
import Footer from './assets/components/Footer/index.jsx'; // Garantindo o rodapé da dupla

// Suas Páginas Prontas (Com as pastas corrigidas no padrão minúsculo!)
import Home from './pages/home/index.jsx';
import QuemSomos from './pages/quem-somos/index.jsx';
import Servicos from './pages/servicos/index.jsx';

// Rotas futuras que vocês ainda vão criar juntos
import Contato from './pages/Contato'; 

import './index.css';

export default function App() {
  return (
    <Router>
      {/* O Header fica fixo no topo de todas as páginas */}
      <Header />

      {/* Área principal do site onde o conteúdo muda */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />

          {/* Rotas temporárias das páginas que faltam fazer */}
          <Route path="/corpo-clinico" element={<Home />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </main>

      {/* O Footer fica fixo na parte de baixo de todas as páginas */}
      <Footer />
    </Router>
  );
}