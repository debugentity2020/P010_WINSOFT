import React, { Component } from 'react'

export class Node extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    // <div className="inline-block">
    //             <div id='node'className="text-center d-flex align-items-center justify-content-center" style={{height:'4rem',width:'4rem',borderRadius:'50%',backgroundColor:'lightblue'}}>{this.props.node}</div>
    //         </div>
    
    render() {
        let a = this.props.nodes
        console.log(a);
        return (
            <div className="inline-block d-flex flex-row">
                {this.props.nodes}
            {/* {a.map((value, index) => {
                return <div id='node'className="inline-block text-center d-flex align-items-center justify-content-center" style={{height:'4rem',width:'4rem',borderRadius:'50%',backgroundColor:'lightblue'}}>{value}</div>
              })} */}
              </div>
        )
    }
}

export default Node
