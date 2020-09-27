import React from 'react'
import {Link} from 'react-router-dom'
export default function navbar() {
    return (
        <div style={{backgroundColor:'black'}}>
            <div id='nav-main' className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'transparent'}} >
            <Link className="navbar-brand" to="#"><b style={{color:'orange'}}>W</b>INSOFT</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <Link className="nav-link" style={{color:"greenyellow"}} to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{color:"greenyellow"}} to="/Decrypter">Decrypter</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{color:"greenyellow"}} to="/Location">Location</Link>
                </li>
                
                
                </ul>
                
            </div>
            </div>
        </div>
    )
}
