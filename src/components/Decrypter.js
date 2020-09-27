import React ,{ Component }  from 'react'
import {Form,Button} from 'react-bootstrap'
import './Decrypter.css';
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
        fetch("/decrypt",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                key,
                input
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
            //   M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
            //    M.toast({html:data.message,classes:"#43a047 green darken-1"})
            //    history.push('/signin')
            console.log(data);
           }
        }).catch(err=>{
            console.log(err)
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
var Decryption = (function () {
    function Decryption() {
    }
    Decryption.sortString = function (inputString) {
        var tempArray = (inputString).split('');
        /* sort */ (function (l) { l.sort(); })(tempArray);
        return tempArray.join('');
    };
    Decryption.main = function (args) {
        
        var key1 = Decryption.sortString(key);
        
        var k = 0;
        var decrypt = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return null;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([(input.length / key.length | 0), key.length]);
        for (var i = 0; i < key.length; i++) {
            {
                for (var j = 0; j < (input.length / key.length | 0); j++) {
                    {
                        if (k < input.length) {
                            var c = input.charAt(k++);
                            decrypt[j][i] = c;
                        }
                        else
                            decrypt[j][i] = ' ';
                    }
                    ;
                }
            }
            ;
        }
        for (var i = 0; i < (input.length / key.length | 0); i++) {
            {
                for (var j = 0; j < key.length; j++) {
                    {
                        // console.info(decrypt[i][j]);
                    }
                    ;
                }
                console.info();
            }
            ;
        }
        var key2 = (key).split('');
        var key3 = (key1).split('');
        console.info();
        var count = 0;
        var answer = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return null;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([(input.length / key.length | 0), key.length]);
        for (var i = 0; i < key.length; i++) {
            {
                var index = key.indexOf(key3[i]);
                for (k = 0; k < (input.length / key.length | 0); k++) {
                    {
                        answer[k][index] = decrypt[k][i];
                    }
                    ;
                }
                var temp = (key).split('');
                temp[index] = '`';
                key = temp.join('');
            }
            ;
        }
        for (var i = 0; i < (input.length / key.length | 0); i++) {
            {
                for (var j = 0; j < key.length; j++) {
                    {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(answer[i][j]) != '_'.charCodeAt(0))
                            console.log(answer[i][j]);
                            
                    }
                    ;
                }
            }
            ;
        }
        var answerString=answer.toString();
        answerString = answerString.replaceAll( ',' , "" )
        answerString = answerString.replaceAll( '_' , "" )
        document.getElementById('Answer').innerHTML=answerString;
    };
    return Decryption;
}());
Decryption["__class"] = "Decryption";
Decryption.main(null);

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
        <h3 id='Answer'></h3>
</div>
        </div>
        </div>
        </div>
    )
    }
}


