import React from 'react';

//import './App.css';

import { Button,Card,Form,Image } from 'react-bootstrap';

function Login() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', verticalAlign:'center',height:"100vh", background:`url("http://getwallpapers.com/wallpaper/full/3/f/6/12523.jpg")` }}>
    <div className="Login" style={{border:"3px solid black",marginTop:"10%", backgroundColor:"rgba(0,0,0,0.5)",height:"53%"}}>
        
                      <Card style={{ width: '20em',}}>
                        <Card.Body>
                        <img  height="80px" width="auto" style={{display: 'flex', justifyContent: 'center',marginLeft:'38%',marginTop:"5%" }} src={require('./user-icon.png')} />
                          <Card.Title style={{display: 'flex', justifyContent: 'center',color:"white" }}><h2>LOGIN</h2></Card.Title>
                          
                          <Card.Text>
                          <Form>
                      <Form.Group controlId="formBasicEmail" style={{display: 'flex', justifyContent: 'center',padding:'10px', }}>
                        <Form.Label style={{paddingRight:'10px',color:"white"}}>Username:  </Form.Label>
                          <Form.Control type="text" placeholder="Enter Username" />
                  
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword" style={{display: 'flex', justifyContent: 'center',padding:'10px' }}>
                        <Form.Label style={{paddingRight:'10px',color:"white"}}>Password:  </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                
                      <Button variant="primary" type="submit" style={{backgroundColor:"lightgreen", borderRadius:"20%", marginLeft:"42%",marginTop:"10px"}}>Submit</Button>{' '} 
                      </Form>
                          </Card.Text>
                      
                        </Card.Body>
                      </Card>
    </div>
    </div>
  );
}

export default Login;