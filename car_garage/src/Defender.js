import React, { Component } from 'react';


class Thar extends Component{
    constructor(props){
        super(props);
        this.state = {
            srcs: [
                "https://images.unsplash.com/photo-1611001871555-1a09975c1975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVmZW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1606041802622-5ef426db7cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRlZmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1530674563461-4ea5aff2e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGRlZmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1562460899-4c2d3d2ac003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRlZmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1484404289410-44b4ebf4026d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGRlZmVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            ]
        }
    }
    render() {
        let img = this.state.srcs.map(s => (
            <img src={s} alt="new image"/>
        ))
        return (
             <div>
                {img}
             </div>
        );
    }
}

export default Thar;