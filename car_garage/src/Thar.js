import React, { Component } from 'react';


class Thar extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgs: [
                "https://images.unsplash.com/photo-1633867179970-c54688bcfa33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8VGhhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1630990325544-58e7ed0d18ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1630990325533-23bd06fce1dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fFRoYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            ]
        }
    }
    render() {
        let img = this.state.imgs.map(src => (
            <img src={src}/>
        ))
        return (
             <div>
                {img}
             </div>
        );
    }
}

export default Thar;