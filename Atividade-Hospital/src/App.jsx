import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Estruturais Fixos
import Header from './assets/components/Header/index.jsx'; 
import Footer from './assets/components/Footer/index.jsx'; 

// Suas Páginas Prontas
import Home from './pages/home/index.jsx';
import QuemSomos from './pages/quem-somos/index.jsx';
import Servicos from './pages/servicos/index.jsx';
import Contato from './pages/Contato'; 
import Blog from './pages/blog'; 
import CorpoClinico from './pages/corpo-clinico'; // IMPORTADO AQUI EM MINÚSCULO!

import './index.css';

export default function App() {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/corpo-clinico" element={<CorpoClinico />} /> {/* ROTA REAL DEFINIDA! */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}