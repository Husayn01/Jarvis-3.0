import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Firstrow from './components/Firstrow';
import Secondrow from './components/Secondrow';
import Thirdrow from './components/Thirdrow';
import Fourthrow from './components/Fourthrow';
import Fifthrow from './components/Fifthrow';
import Sixthrow from './components/Sixthrow';
import Temp from './Temp';


ReactDOM.createRoot(document.getElementById('main')).render(

    <div className='main'>
     
     <Firstrow />

     <Secondrow />

    <Thirdrow />

    <div className='container-fluid row-title'>
      <h2>JARVIS 3.0 CAPABILITIES</h2>
    </div>

    <Fourthrow />

    <Fifthrow />

    <Sixthrow />
   
    </div>
 
)
