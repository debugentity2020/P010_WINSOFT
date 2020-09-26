import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import Decrypter from './components/Decrypter';
import Location from './components/Location';
function App() {
  return (

    <BrowserRouter>
    <Navbar />
      <Route exact path='/' ><Home/></Route>
      <Route exact path='/Decrypter' ><Decrypter/></Route>
      <Route exact path='/Location' ><Location/></Route>
      
      
      
    </BrowserRouter>
  );
}

export default App;
