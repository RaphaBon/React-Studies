import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import Hooks from './pages/Hooks'

import {HookUseContext} from './components/HookUseContext'

function App() {
  return (
    <div className="App">

      <HookUseContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/hooks' element={<Hooks />}/>
          </Routes>
        </BrowserRouter>
      </HookUseContext>

    </div>
  );
}

export default App;
