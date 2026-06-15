import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes estruturais (dentro de assets/components)
import Header from './assets/components/Header/index.jsx'; 
import Footer from './assets/components/Footer/index.jsx';

// Importação cirúrgica para a sua pasta pages\home atual
import Home from './assets/pages\\home/index.jsx'; 

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<Home />} />
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