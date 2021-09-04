import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaStar, FaUserAlt } from 'react-icons/fa';

import "../Assets/Styling/Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
            
                <NavLink 
                    className="navbar-link"
                    activeClassName="navbar-link-active"
                    to="/home"    
                >
                    <FaHome 
                        size="1.5em"
                    />
                    Home
                </NavLink>
            
                <NavLink 
                    className="navbar-link"
                    activeClassName="navbar-link-active"
                    to="/search"    
                >
                    <FaSearch 
                        size="1.5em"
                    />
                    Search
                </NavLink>
            
                <NavLink 
                    className="navbar-link"
                    activeClassName="navbar-link-active"
                    to="/fav"    
                >
                    <FaStar 
                        size="1.5em"
                    />
                    Favourites
                </NavLink>
            
                <NavLink 
                    className="navbar-link"
                    activeClassName="navbar-link-active"
                    to="/profile"    
                >
                    <FaUserAlt 
                        size="1.5em"
                    />
                    Profile
                </NavLink>

            </div>
        );
    }
}
