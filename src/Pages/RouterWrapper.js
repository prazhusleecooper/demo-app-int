import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Navbar from '../Components/Navbar';
import Search from './Search';
import Favourites from './Favourites';
import Home from './Home';
import Profile from './Profile';


import "../Assets/Styling/RouterWrapperContainer.css";


export default class RouterWrapper extends Component {
    
    render() {
        
        return (
            <Router>
                
                <div className="router-wrapper-container">

                    <Switch>

                        <Route 
                            exact
                            path="/"
                        >
                            <Redirect to="/home" />
                        </Route>
                        
                        <Route 
                            exact
                            path="/home"
                        >
                            <Home />
                        </Route>
                        
                        <Route 
                            exact
                            path="/search"
                        >
                            <Search  />
                        </Route>
                        
                        <Route 
                            exact
                            path="/fav"
                        >
                            <Favourites />
                        </Route>
                        
                        <Route 
                            exact
                            path="/profile"
                        >
                            <Profile />
                        </Route>
                        

                    </Switch>

                    <Navbar />
                
                </div>

            </Router>
        );
    }
}
