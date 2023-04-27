import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink className="nav-link" exact activeClassName="active-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link"  exact activeClassName="active-link" to="/images">
                    Images
                </NavLink>
            </div>
        )
    }
}

export default Navbar;