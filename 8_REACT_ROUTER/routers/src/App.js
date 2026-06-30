import './App.css';

//Aula 1 -> Configurações inicias do react router:
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Aula 1 -> Importamos as páginas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product';
import Info from './pages/Info'
import NotFound from './pages/NotFound';
import SearchParams from './components/SearchParams';
import Search from './pages/Search';


//Aula 2 -> Importando o componente NavBar que contem os links para navegação
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          {/* Aula 2 -> NavBar*/}
          <Navbar/> 
          {/* Aula 9 -> Search Params */}
          <SearchParams />
          {/* Aula 1 */}
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/about" element={<About />} />
          {/* Aula 9 -> Página de Search */}
            <Route path="/search" element={<Search />} />
          {/* Aula 4 -> Rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
          {/* Aula 6 -> Rested Route */}
            <Route path="/products/:id/info" element={<Info />} />
          {/* Aula 10 -> Redirect com uma URL alterada ( company -> about) */}
            <Route path="/company" element={<Navigate to="/about" />} />
          {/* Aula 7 -> 404 NOT FOUND (Padrão ser a última rota)*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
