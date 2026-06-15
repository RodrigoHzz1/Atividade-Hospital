import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'; 
import Footer from './components/Footer'; 

import Home from './pages/home/index.jsx';
import QuemSomos from './pages/quem-somos/index.jsx';
import Servicos from './pages/servicos/index.jsx';
import Contato from './pages/Contato'; 
import Blog from './pages/blog/index.jsx'; // 1. IMPORTANTE: Importe o Blog da sua dupla aqui!

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
          
          {/* 2. CORREÇÃO AQUI: Mudamos de <Home /> para <Blog /> */}
          <Route path="/blog" element={<Blog />} /> 
          
          <Route path="/corpo-clinico" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}