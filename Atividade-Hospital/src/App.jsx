import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importe o Header (ajuste o caminho se a sua pasta components mudar de lugar)
import Header from './assets/components/Header'; 

// 2. Importe as suas páginas
import Home from './pages/Home';
import Contato from './pages/Contato';

// Se as outras páginas já tiverem alguma coisa dentro, pode importar elas também:
// import QuemSomos from './pages/quem-somos';
// import Servicos from './pages/servicos';
// import CorpoClinico from './pages/corpo-clinico';
// import Blog from './pages/blog';

export default function App() {
  return (
    <Router>
      {/* O Header fica AQUI, fora das Routes, para aparecer fixo no topo de todas as páginas */}
      <Header />

      <Routes>
        {/* 3. Defina qual componente carrega em cada link */}
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rotas temporárias para as outras páginas não darem erro caso ainda estejam vazias */}
        <Route path="/quem-somos" element={<div>Página Quem Somos em construção...</div>} />
        <Route path="/servicos" element={<div>Página Exames em construção...</div>} />
        <Route path="/corpo-clinico" element={<div>Página Corpo Clínico em construção...</div>} />
        <Route path="/blog" element={<div>Página Blog em construção...</div>} />
      </Routes>
    </Router>
  );
}