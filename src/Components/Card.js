import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa';

import "../Assets/Styling/Card.css";

import ResultImg from "../Assets/Images/result_img.png";

export default class Card extends Component {
    
    constructor(props) {

        super(props);

		var { Text, FirstURL } = props.resultObject;
		
		this.state={
			resultText: Text,
			url: FirstURL,
			saved: false
		}
		
    }

	saveCard = () => {
		
		this.setState({
			saved: true,
		});

		this.props.saveCard(this.props.resultObject);
	};

	checkSaved = (savedCards, result) => {

		var existingCards = savedCards.filter((card) => card.FirstURL === result.FirstURL);

		if(existingCards.length === 0) {

			return false;

		} else {

			return true;

		}

	};

	componentDidMount = () => {

		var savedCards = JSON.parse(localStorage.getItem("savedCards"));

		if(savedCards === null || savedCards.length === 0) {
			
			// do none

		} else if(this.checkSaved(savedCards, this.props.resultObject) === true) {

			this.setState({
				saved: true,
			});

		}
	};

    render() {
        
        return (
            
            <div className="card-container">

                <div className="info-section">

                    <img 
                        src={ ResultImg }
                        className="card-image"
                    />

                    <div className="card-text-section">

                        <div className="result-text">
                            { this.state.resultText }
                        </div>

                        <div className="result-link">
                            { this.state.url }
                        </div>
                    
					</div>

               	</div>

                <div className="star-section">

                    <FaStar 
						color={ (this.state.saved) ? "#FC9E2E" : "#A6A4A463" }
						onClick={ () => this.saveCard(this.props.resultObject) }
					/>

                </div>

            </div>

        );
    }
};
