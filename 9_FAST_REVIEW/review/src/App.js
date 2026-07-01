import './App.css';

//Import ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Component
import NavBar from './components/NavBar'
//Context

//Pages
import Home from './pages/Home' 
import About from './pages/About'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
