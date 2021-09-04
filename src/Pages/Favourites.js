import React from "react";

import "../Assets/Styling/Favourites.css";

import InitialSearch from "../Assets/Images/initial_search.png";
import Card from "../Components/Card";

class Favourites extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            savedCards: [],
        };
    }

        saveCard = (result) => {
            // do nothing
        }

        
        // ? Rendering Methods

        renderFavouriteCards = () => {

            if(this.state.savedCards === null || this.state.savedCards.length === 0) {
			
                return(
                    
                    <div className="no-results-section">

                        <img
                            src={ InitialSearch }
                        />
                        <p className="no-results-text">
                            Search for keywords and star them to see them here
                        </p>


                    </div>
                )
    
            } else {

                var { savedCards } = this.state;

                return savedCards.map((result) => {

                    return(
                        <div
                            key={ result.FirstURL }
                            className="w-100"
                        >

                            <Card 
                                resultObject={result}
                                saveCard={ () => this.saveCard(result) }
                            />

                        </div>
                    );

                })
            }

        }

        // * End of Rendering Methods


        componentDidMount = () => {

            var savedCards = JSON.parse(localStorage.getItem("savedCards"));

            this.setState({
                savedCards,
            })

        };

        render() {

            return(
                <div className="favourites-container">
                    
                    <p className="favourites-text">
                        Favourites
                    </p>

                    <div className="scrollable-area">

                        {
                            this.renderFavouriteCards()
                        }

                    </div>

                </div>
            );
        }

};

export default Favourites;