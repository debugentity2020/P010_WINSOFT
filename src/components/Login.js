import React from 'react'
import Decrypter from './Decrypter';
import Home from './Home';
import Location from './Location';
import Navbar from './navbar'
import {BrowserRouter,Route} from 'react-router-dom'
export default function Login(props) {

    
    if(props.password==true){

    
    return (
        <div>
           
           <BrowserRouter>
    <Navbar />
    
      <Route exact path='/' ><Home/></Route>
      <Route exact path='/Decrypter' ><Decrypter/></Route>
      <Route exact path='/Location' ><Location/></Route>
      
      
      
    </BrowserRouter>
        </div>
    )
    }
    else{
        return(
            <div></div>
        )
    }
}

export const name="sanath";