import React from 'react'
import './Home.css'
import {BrowserRouter,Route,Link} from 'react-router-dom'
export default function Home() {
    let heading = "WINSOFT TECHNOLOGIES"
    let subHeading = "Commited to Infotech"
    return (
        <div id="body">
            
            <section className="hero">
                <div className="hero-body">
                    <div className="my-container container-fluid d-flex flex-column align-items-center justify-content-center" style={{height:"70vh", width:"100%",}}>
                        <h1 className="title " style={{color:"tomato",fontSize:"4rem"}} >
                            {heading}
                        </h1>
                        <h3 style={{color:"white",
                    fontSize:"3rem"}}>{subHeading}</h3>
                        <div className="row">
                            <div className="col-12">
                            <Link to='/Decrypter'>  <button className="m-2 px-4 py-2 btn " style={{backgroundColor:"forestgreen" ,}}>Decrypter</button></Link>
                            <Link to='/Location'>   <button className="m-2 px-4 py-2 btn " style={{backgroundColor:"forestgreen" ,}}>Location</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid padding p-4 ">
                <h1 className="text-center">Problem Statement</h1>
                
                
                <div className="row" >
                    <div className="col-10  offset-1 px-5 ">
                        <p className="lead">
                        Cryptography was used extensively during World War II.
You are all aware of the current situation between India and China, tension is growing every day and our arm forces are at high alert.
Somehow our arm forces have gathered very crucial information about the
enemy location near the border. Very few soldiers are selected to
infiltrate those areas and destroy an enemy base if required. As this
group is small, they want to position themself in such a way that they
can reach any enemy area as quickly as possible. So as a software
engineer, you have been asked to come up with an algorithm that
can determine the best possible location for our soldiers so that they
always remain close to enemy camp all the time. But we also have
one more problem here, the information gather by our Intelligence is
encrypted. Due to the harsh winter, we cannot send our soldiers or
drones to carry out surveillance and figure out the exact enemy
location, our only hope is to decode encrypted message.
Your team
has a very crucial role to play here, based on your inputs they are
going to post the Elite forces at a strategic position defined by you,
so your task is to:<br></br>
 

                        </p>

                    </div>
                    <div className="col-lg-5 d-flex flex-row-reverse">
                    <img src={require('./white-gear.png')} height="200px" width="auto" />


                    </div>
                    <div className="col-4 d-flex flex-row py-5">
                        <p>
       1. Decrypt the message<br></br>
2. Find out the strategic location in such a way that the team of elite
soldiers can reach any enemy location quickly.

                        </p>
                    </div>

                    <div className="col-12 text-center">
                        <h1 className="p-3">Team: Debug Entity</h1>
                        <ul >
                            
                                <h4>Sanath Shetty</h4>
                                 <h4>Ganesh Reddy</h4>
                                <h4>Karishma Potdukhe</h4>
                                <h4>Princely Lopes</h4>
                                
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
