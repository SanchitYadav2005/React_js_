import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render() {
        return (
             <div className='Navbar'>
                <NavLink className="active-link" exact to="/">
                    Home
                </NavLink>
                <NavLink className="active-link" exact  to="/wrangler">
                    Wrangler
                </NavLink>
                <NavLink className="active-link" exact to="/thar">
                    Thar
                </NavLink>
                <NavLink className="active-link" exact  to="/defender">
                    Defender
                </NavLink>
             </div>
        );
    }
}

export default Navbar;