import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import Decrypter from './components/Decrypter';
import Location from './components/Location';
import Login from './components/Login';


function App() {
  const name1='sanath'
  const [name,setname] = React.useState('');
  const [pass,setPass]=React.useState(true)
    function click(e){
        setname(e.target.value)
        console.log(name);
    }
    function onsubmit(e){
        if(name1==name)
        {
          setPass(true)
        }

    }
  
  
  
  return (
    <div>
    {/* <input type="text" name='key' required value={name} onChange={click} type="text" placeholder="Enter the input in ',' seperated form : ref(A,B,C)"/>
    <button type='submit' onClick={onsubmit}>Submit</button> */}
    
    <Login name={(isLoggedIN)=>isLoggedIN?'ok':'notOK'} password={pass}/>
    </div>
  );
}

export default App;
