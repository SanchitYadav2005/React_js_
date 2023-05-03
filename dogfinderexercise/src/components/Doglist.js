import React, { Component } from 'react';
import './Doglist.css'
class Doglist extends Component{
    render() {
        return (
             <div className='Doglist'>
                <h1 className='display-1 text-center'>Dog list</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dog.map(d => (
                            <div className='Dog col-md-6 col-lg-4 text-center' key={d.name}>
                                <img src={d.src} alt={d.name}/>
                                <h3>{d.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        );
    }
}

export default Doglist;