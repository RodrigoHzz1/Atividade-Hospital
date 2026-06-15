import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes estruturais
import Header from './assets/components/Header/index.jsx'; 
import Footer from './assets/components/Footer/index.jsx';

// Páginas
import Home from './pages/home/index.jsx'; 
import QuemSomos from './pages/quem-somos/index.jsx'; // Nova Importação!

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rota atualizada para abrir a página nova de verdade */}
          <Route path="/quem-somos" element={<QuemSomos />} /> 
          
          {/* Próximas rotas (temporárias) */}
          <Route path="/servicos" element={<Home />} />
          <Route path="/corpo-clinico" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contato" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;