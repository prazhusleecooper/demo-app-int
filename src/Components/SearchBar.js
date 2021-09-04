import React, { Component } from 'react';
import { CgSearch } from "react-icons/cg";

import "../Assets/Styling/SearchBar.css";

export default class SearchBar extends Component {
    
    constructor(props) {
        
        super(props);

    }

    render() {
        
        return (
            
            <div className="searchbar-section">
            
                <div className="searchbar-container">

                    <CgSearch
                        size="2em"
                    />

                    <input 
                        type="text"
                        className="searchbar-input"
                        placeholder="Search Keyword"
                        value={ this.props.value }
                        onChange={ (event) => this.props.onChange(event) }
                    />

                </div>
            </div>

        )
    }
}
