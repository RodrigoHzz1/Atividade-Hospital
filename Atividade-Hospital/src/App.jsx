import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Caminhos corrigidos: agora puxando direto da raiz de src/components/
import Header from './components/Header'; 
import Footer from './components/Footer'; 

// Suas Páginas Prontas
import Home from './pages/home/index.jsx';
import QuemSomos from './pages/quem-somos/index.jsx';
import Servicos from './pages/servicos/index.jsx';
import Contato from './pages/Contato'; 

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

          {/* Rotas temporárias das próximas páginas */}
          <Route path="/corpo-clinico" element={<Home />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}