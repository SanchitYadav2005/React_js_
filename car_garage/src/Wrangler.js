import React, { Component } from 'react';


class Thar extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "https://images.unsplash.com/photo-1633867179970-c54688bcfa33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8VGhhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    }
    render() {
        
        return (
             <div>
                <img src={this.state.src} alt='thar'/>
             </div>
        );
    }
}

export default Thar;