
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
import SzobaW from './components/szobaW';

function App() {
  
  const [foglal, setFoglal] = useState([]);
  
  const [szoba, setSzoba] = useState(null);
  return (
    <>
      <BrowserRouter>
      <div id='Main' className='container mx-auto'> 
        <Top className="col-12"/>
        <div className='container'>
          <div className='row'>
            <Routes>
              <Route path='/' element={<><Bal className="col-4"/><Kozep className="col-4"/><Jobb className="col-4"/></>} />
              <Route path='/szoba' element={<><Kozep className="col-6"/> <Jobb className="col-6"/></>} />
            </Routes>
            
          </div>
          <div className='row'>
            <Routes> 
              <Route path='/' element={<><BBal foglal={foglal} setFoglal={setFoglal} szoba={szoba} setSzoba={setSzoba} /> <BJobb /></>} />
              <Route path='/szoba' element={<SzobaW foglal={foglal} szoba={szoba}/>} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
