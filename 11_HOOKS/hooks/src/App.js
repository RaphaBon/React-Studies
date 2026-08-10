import './App.css';

//Aula 1 -> Setup Router
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'

//Aula 1 -> Pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        {/* "Fake NavBar" */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
