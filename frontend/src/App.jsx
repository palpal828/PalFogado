
import 'bootstrap/dist/css/bootstrap.min.css';
import './fogado.css'
import './App.css'
import Top from './components/Top';
import Bal from './components/Bal';
import Kozep from './components/Kozep';
import Jobb from './components/Jobb';
import BBal from './components/BBal';
import BJobb from './components/BJobb';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [szoba, setSzoba] = useState(null);
  
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
            <BrowserRouter>
              <Routes> 
                <Route path='/' element={<><BBal szoba={szoba} setSzoba={setSzoba}/> <BJobb /></>} />
                <Route path='/:szoba' element={<BBal szoba={szoba} setSzoba={setSzoba}/>} />
              </Routes>
            </BrowserRouter>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
