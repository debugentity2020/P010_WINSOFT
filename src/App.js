import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import Decrypter from './components/Decrypter';
import Location from './components/Location';
// import Login from './components/Login';
import axios from 'axios'
import { useHistory } from "react-router-dom";



function App() {
  
  const name1='sanath'
  const [email,setname] = React.useState('');
  const [password,setPass]=React.useState('')
  const [bool,setBool]=React.useState('no')
  

    function click(e){
        setname(e.target.value)
        // console.log(nam);
    }
    function click1(e){
        setPass(e.target.value)
        // console.log(nam);
    }
    function onsubmit(e){
      e.preventDefault();
      axios.post('/signin' , {email,password})
      .then(response => {
        console.log(response.data.msg);
        if(response.data.msg=='success'){
          setBool('yes')
        }
        
    }
      )}
  
  
  if(bool=='yes'){
    
    return(
      <BrowserRouter>
    <Navbar />
    
      <Route exact path='/' ><Home/></Route>
      <Route exact path='/Decrypter' ><Decrypter/></Route>
      <Route exact path='/Location' ><Location/></Route>
      
      
      
    </BrowserRouter>
    )
  }
  else{
    return (
      <div className='outer-app' style={{backgroundColor:'black',color:'white',height:'100vh'}}>
        <div className="display-4 text-center pt-5" >Winsoft Technologies</div>
      <form action="" className="d-flex justify-content-center align-items-center flex-column p-5">
      <input className="form-control m-4" type="text" name='key' required value={email} onChange={click} type="text" placeholder="Enter Username" style={{width:'350px'}}/>
      <input  className="form-control m-4" type="password" name='key' required value={password} onChange={click1}  placeholder="Enter Password" style={{width:'350px'}}/>
      <br/>
      <br/>
      <button type='submit' className="btn btn-info" onClick={onsubmit}>Submit</button>
      </form>
     
      </div>
      
    );
  }
  }
  

export default App;
