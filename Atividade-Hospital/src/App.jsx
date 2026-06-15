import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header/index.jsx'; 
import Footer from './assets/components/Footer/index.jsx';

import Home from './pages/home/index.jsx'; 
import QuemSomos from './pages/quem-somos/index.jsx'; 
import Servicos from './pages/servicos/index.jsx'; // Nova Importação!

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          
          {/* Rota ativada para abrir os serviços de verdade */}
          <Route path="/servicos" element={<Servicos />} /> 
          
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