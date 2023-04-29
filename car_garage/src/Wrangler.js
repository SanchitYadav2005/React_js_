import React, { Component } from 'react';
import './Cars.css';

class Thar extends Component{
    constructor(props){
        super(props);
        this.state = {
            srcs: [
                "https://images.unsplash.com/photo-1579271723082-e06362391a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1620732429210-d4ba6f245040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1578169434440-9e710dfb3224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1602422813825-831b6c26f79b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            ]
        }
    }
    render() {
        let img = this.state.srcs.map(src => (
            <img src={src} className='Car' alt="new imgae"/>
        ))
        return (
             <div className='Car-container'>
                {img}
             </div>
        );
    }
}

export default Thar;