import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'; 
import Footer from './components/Footer'; 

import Home from './pages/home';
import QuemSomos from './pages/quem-somos';
import Servicos from './pages/servicos';
import Blog from './pages/blog';
import Contato from './pages/contato'; // Garanta que o 'c' está minúsculo! // Corrigido para minúsculo e apontando para o arquivo real!

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/corpo-clinico" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}