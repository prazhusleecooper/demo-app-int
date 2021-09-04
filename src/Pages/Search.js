import React from "react";
import SearchBar from "../Components/SearchBar";

import "../Assets/Styling/Search.css";

import InitialSearch from "../Assets/Images/initial_search.png";
import NoResultsImg from "../Assets/Images/no_results.png";
import Card from "../Components/Card";
import { toast } from "react-toastify";

class Search extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            searchQuery: "",
            searchResults: [],
        };
    }
    


        // | Non-Rendering Methods

        // ? Handle Text box input change
        handleInputChange = (event) => {

            this.setState({
                searchQuery: event.target.value
            });

            this.triggerSearch();

        }
        //  | End of handleInputChange()


        // ? Check if a card is saved/set as favourite
        checkSaved = (savedCards, result) => {

            var existingCards = savedCards.filter((card) => card.FirstURL === result.FirstURL);

            if(existingCards.length === 0) {

                return false;

            } else {

                return true;

            }

        }
        // | End of checkSaved()


        // ? Method to save/set a card as favourite 
        saveCard = (result) => {

            console.log("CARD SAVE INIT");

            var savedCards = JSON.parse(localStorage.getItem("savedCards"));

            if(savedCards === null) {

                var cardsArray = [result];

                localStorage.setItem("savedCards", JSON.stringify(cardsArray));

            } else if(savedCards.length === 0) {

                savedCards.push(result);

                localStorage.setItem("savedCards", JSON.stringify(savedCards));

            } else if(this.checkSaved(savedCards, result) === false) {

                savedCards.push(result);

                localStorage.setItem("savedCards", JSON.stringify(savedCards));

                toast.success("Card saved");

            } else if(this.checkSaved(savedCards, result) === true) {
                
                toast.warn("Card already saved");

            }

        } 
        // | End of saveCard()
        // * End of Non-Rendering Methods


        // | Rendering Methods

        // | Method to render the initial screen or screen when the search bar is empty
        initalSearchScreen = () => {

            return(

                <div className="search-empty-section">

                    <img
                        src={ InitialSearch }
                    />
                    <p className="search-empty-text">
                        To explore on your interest  click on search above
                    </p>

                </div>

            )
        }
        // * End of initalSearchScreen method

        // ? Method to initialize search API call
        triggerSearch = () => {

            if(this.state.searchQuery.length >= 3) {

                var apiURL = `https://api.duckduckgo.com/?q=${ this.state.searchQuery }&format=json&pretty=1`;

                fetch(
                    apiURL,
                    {
                        method: "GET",
                        // mode: "no-cors"
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {

                        console.log("DATA:", data.Results);


                        this.setState({
                            searchResults: data.Results,
                        });


                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            }

        };
        // | End of triggerSearch()


        // ? Method to render the search results
        renderSearchResults = () => {

            if(this.state.searchResults.length === 0) {
                
                return(

                    <div className="no-results-section">

                        <img
                            src={ NoResultsImg }
                        />
                        <p className="no-results-text">
                            No Search Results found
                        </p>

                        <p className="no-results-sub-text">
                            Please try again with different keyword
                        </p>

                    </div>

                );

            } else {

                var { searchResults } = this.state;

                
                // return <Card />
                return searchResults.slice(0, 10).map((result) => {
                    

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

                }); 

            }

        };
        //  | End of renderSearchResults()


        // ? Method to render the Search screens conditionally 
        renderSearchScreen = () => {

            if(this.state.searchQuery === "" || this.state.searchQuery.length < 3) {

                return this.initalSearchScreen();

            }

            else {

                return this.renderSearchResults();

            }
        }
        // * End of renderSearchScreen() 

        // * End of Rendering Methods


        render() {

            return(
                <div className="search-container">
                    
                    <SearchBar 
                        value={ this.state.searchQuery }
                        onChange={ (event) => this.handleInputChange(event) }
                    />

                    <div className="scrollable-area">

                        {
                            this.renderSearchScreen()
                        }

                    </div>

                </div>
            );
        }

};

export default Search;