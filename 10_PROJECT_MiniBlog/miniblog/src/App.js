import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'

//Hooks

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer';

//Context

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
        </div>
     
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
