import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Firebasee
import { onAuthStateChanged } from 'firebase/auth';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer';

//Context
import {AuthProvider} from './context/AuthContext'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  
  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
        <NavBar />

        <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={!user ? <Register/> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/" />} />
          <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login" />} />
          <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login" />}  />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
     
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
