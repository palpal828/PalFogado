
import 'bootstrap/dist/css/bootstrap.min.css';
import './fogado.css'
import './App.css'
import Top from './components/Top';
import Bal from './components/Bal';
import Kozep from './components/Kozep';
import Jobb from './components/Jobb';
import BBal from './components/BBal';
import BJobb from './components/BJobb';
function App() {
  

  return (
    <>
      <div id='Main' className='container mx-auto'> 
        <Top />
        <div className='container'>
          <div className='row'>
            <Bal />
            <Kozep />
            <Jobb />
          </div>
          <div className='row'>
            <BBal />
            <BJobb />
            </div>
          </div>
        </div>
      
    </>
  )
}

export default App
