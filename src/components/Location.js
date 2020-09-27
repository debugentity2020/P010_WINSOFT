import React, { Component, createElement } from 'react'
import {Row,Container,Image,Col,InputGroup,Button,Form} from 'react-bootstrap'
// import { Formik, Field, Form } from "formik";
import axios from 'axios'
import Node from './Node'


export default function Location() {
    const [name,setname] = React.useState('');
    const [key,setKey]= React.useState('');
    const [arr,setArr] =React.useState([])
    const count=[]
    var counter=0
    function onsubmit(e){
        e.preventDefault();

         
        // var str = document.getElementById("one").innerHTML; 
        let a = name.split(",")
        let c=[]
        for(let i =0;i<a.length;i++){
            var ch = a[i];
            var index = 0;

            var j = ch.charCodeAt(index);
            // console.log(j);
            c[i]=j-65


            /*
                Output: 65
            */
        }
        console.log(c);
        

        // let b=this.state.key.split(`,`).map(x=>+x)
        // console.log(b);
        var enemy = c;
        document.getElementById('subarray').innerHTML=""
        var finalanswer=[]
        axios.post('/location',c)
        .then(response => {
            console.log(response.data.count)
            finalanswer=response.data.count
            let fugitiveString=finalanswer[0]
            let fugitive=document.createElement('DIV')
            fugitive.innerHTML=fugitiveString
            fugitive.style.fontSize='2rem'
            fugitive.style.marginBottom='15px'
            document.getElementById('subarray').appendChild(fugitive)
            for(let i=0;i<finalanswer.length;i++){
                var node = document.createElement("LI");
                        var textnode = document.createTextNode(finalanswer[i].toString().replaceAll(',',''));
                        
                        node.appendChild(textnode);
                        // document.getElementById("myList").appendChild(node);
                        if(i!=0){
                            let subarray=finalanswer[i].split('').join('')
                            console.log(subarray);
                            subarray=subarray.replaceAll('-',"")
                            subarray=subarray.replaceAll('>',"")
                            subarray=subarray.replaceAll(',',"")
                            for(let j=0;j<subarray.length;j++){
                                
                                    let subarrayDiv=document.getElementById('subarray');
                                    let smalldiv=document.createElement('DIV');
                                    smalldiv.style.height='50px';
                                    smalldiv.style.margin='4px'
                                    smalldiv.style.color='white';
                                    smalldiv.innerHTML=subarray[j];
                                    smalldiv.style.backgroundColor='navy';
                                    smalldiv.style.width='50px';
                                    smalldiv.style.display='inline-flex'
                                    smalldiv.style.borderRadius='50%'
                                    smalldiv.style.textAlign='center'
                                    smalldiv.style.justifyContent='center'
                                    smalldiv.style.alignItems='center'
                                    smalldiv.style.fontWeight='900'
                                    
                                    
                                    if(j==subarray.length-1){
                                        smalldiv.style.backgroundColor='red'
                                    }
                                    subarrayDiv.appendChild(smalldiv);
                                    if(j!=subarray.length-1){
                                        let arrow=document.createElement('DIV');
                                    arrow.style.margin='4px'
                                    arrow.style.height='50px'
                                    arrow.innerHTML='-->'
                                    arrow.style.display='inline'
                                    arrow.style.textAlign='center'
                                    arrow.style.fontWeight='900'
                                    subarrayDiv.appendChild(arrow)
                                    }
                                    


                                
                                

                            }
                            let subarrayDiv=document.getElementById('subarray');
                            let smalldiv=document.createElement('DIV');
                            smalldiv.style.height='50px';
                            subarrayDiv.appendChild(smalldiv);


                            
                        }
            }
            
        })
        /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
        
    }
    function click(e){
        setname(e.target.value)
       
    }
    
    return (
        
        <div style={{backgroundColor:'black',height:'200vh',color:'greenyellow'}}>
            <div className="display-3 text-center">Location Tracer</div>
            {/* <input type="text" value={name} onChange={click}/>
            <button type='submit' onClick={onsubmit}>Submit</button> */}
            
            <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={8} md={8} className='fluid p-4'>
                        <Image src={require('./map.jpeg')} style={{height:'auto',width:'100%'}} rounded />
                        </Col>
                        
                    </Row>
                </Container>
                <Form>
  

                <Form.Group className='px-5 d-flex justify-content-center align-items-center flex-column' controlId="formBasicPassword">
                    <Form.Label style={{fontSize:'2rem'}}>Specify Your Enemies</Form.Label>
                    <Form.Control name='key' style={{width:'450px'}} required value={name} onChange={click} type="text" placeholder="Enter the input in ',' seperated form : ref(A,B,C)" />
                </Form.Group>
                
                <Button variant="primary" style={{marginLeft:"46%",}} type="submit" onClick={onsubmit}>
                    Submit
                </Button>
                </Form>
                <div id="ANSWER">
                <ul id="myList">
                
                </ul>
                <div id="subarray" className='text-center '>

                </div>
            </div>
            {/* <Node nodes={count}/> */}

        </div>
    )
}

// let count=[]
// export function Location() {

//     constructor(){
//         super()
//         this.state={
//             msg:"",
//             key:"",
//             answer:[]
//         }
       
//     }
   
    
//     change(e){
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
//     click(e){
//         
//     render() {
//         // console.log(count);
//         return (

//             <div className='p-4'>
               

//                 <Node nodes={[1,2,3]}/>
                
//             </div>
//         )
//     }
// }

// export default Location
