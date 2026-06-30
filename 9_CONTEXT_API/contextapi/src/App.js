import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Hooks

//Pages
import Home from './pages/Home'
import Data from './pages/Data'
import Details from './pages/Details'

//Components
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/data" element={<Data />}/>
          <Route path="/details" element={<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
