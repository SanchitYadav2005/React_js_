import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render() {
        return (
             <div>
                <NavLink className="active-link" exact to="/">
                    Home
                </NavLink>
                <NavLink exact  to="/wrangler">
                    Wrangler
                </NavLink>
                <NavLink className="active-link" exact to="/thar">
                    Thar
                </NavLink>
                <NavLink exact  to="/defender">
                    Defender
                </NavLink>
             </div>
        );
    }
}

export default Navbar;