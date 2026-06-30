import './App.css';

//Import
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import About from './pages/About'
import Product from './pages/Product'
import Search from './pages/Search';

//404 NOT FOUND
import NotFound from './pages/NotFound'

//Components
import NavBar from './components/NavBar'
import SearchComponent from './components/SearchComponent';


function App() {
  return (
    <div className="App">
      <p></p>
      <BrowserRouter>
        <NavBar/>
        <SearchComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota Dinamica */}
          <Route path="/products/:id" element={<Product />}/>
          {/* Search */}
          <Route path="/search" element={<Search />} />
          {/* 404 NOT FOUND */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
