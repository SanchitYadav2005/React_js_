import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render() {
        return (
             <div>
                <NavLink exact acitveClassName="active-navLink" to="/">
                    Home
                </NavLink>
                <NavLink exact acitveClassName="active-navLink" to="/wrangler">
                    Wrangler
                </NavLink>
                <NavLink exact acitveClassName="active-navLink" to="/thar">
                    Thar
                </NavLink>
                <NavLink exact acitveClassName="active-navLink" to="/defender">
                    Defender
                </NavLink>
             </div>
        );
    }
}

export default Navbar;