import React ,{ Component }  from 'react'
import {Form,Button} from 'react-bootstrap'
import './Decrypter.css';
import axios from 'axios'
export default class Decrypter extends Component {

    constructor(){
        super()
        this.state={
            msg:"",
            key:"",
            answer:[]
        }
        this.submit=this.submit.bind(this)
    }
    
    submit(key,input){
        let answerString=''
        axios.post('/decrypt' , this.state)
        .then(response => {
            console.log(response.data)
            answerString=response.data.data
            answerString = answerString.replaceAll( ',' , "" )
            answerString = answerString.replaceAll( '_' , "" )
            console.log(answerString);
            document.getElementById('Answer').innerHTML=answerString;
            
            
        })
        
        

    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    click(e){
        e.preventDefault();
        // console.log(this.state.msg)
        var key = this.state.key;
        var input = this.state.msg;
        this.submit(key,input)
        /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

    }

    render(){
        
    return (
        <div>
        <div className="display-4 text-warning text-center " style={{backgroundColor:'black'}}>Decryptor</div>
        <div className='outer-background text-center'>
            
        <div className='p-4 background' style={{border:'2px solid green'}}>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontSize:'1.6rem'}}>Encrypted Message</Form.Label>
    <Form.Control name='msg' required value={this.state.msg} onChange={this.change.bind(this)} type="text" placeholder="Enter encrypted message" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <br></br>
        <br></br>
  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontSize:'1.6rem'}}>Key</Form.Label>
    <Form.Control name='key' required value={this.state.key} onChange={this.change.bind(this)} type="text" placeholder="Enter key" />
  </Form.Group>
  <br></br>
  <div  className='container-fluid position-relative'>  
  <Button variant="primary" className='our-button ' type="submit" onClick={this.click.bind(this)}>
    Submit
  </Button>
  </div>
</Form>
<br></br>
<div className='text-center mt-5'>
        <h2>Your Decrypted Message Is:</h2>
        <h2 id='Answer' className='' style={{color:'aqua'}}></h2>
</div>
        </div>
        </div>
        </div>
    )
    }
}


