import React, { Component } from 'react';


class Thar extends Component{
    constructor(props){
        super(props);
        this.state = {
            srcs: [
                "https://images.unsplash.com/photo-1633867179970-c54688bcfa33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFoaW5kcmElMjB0aGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1624958369967-000264f7fc3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFoaW5kcmElMjB0aGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1607144113358-9d8dd893a647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFoaW5kcmElMjB0aGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1630990325533-23bd06fce1dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFoaW5kcmElMjB0aGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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