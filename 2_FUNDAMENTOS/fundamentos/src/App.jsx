// Aqui estamos importando nossos componentes
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import EventsComponent from './components/EventsComponent'
import ChallangeComponent from './components/ChallangeComponent'

// Importando styles
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  return (
    <div className='App'>
        <h1>Fundamento - React</h1>
    
       {/* Aqui estamos chamando nossos componentes */}          
      <FirstComponent/>  
      <SecondComponent/>
      <TemplateExpressions/>
      <EventsComponent/>
      <ChallangeComponent/>

    </div>
  )
}

export default App
