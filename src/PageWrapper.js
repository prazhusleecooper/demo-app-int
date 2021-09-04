import React from "react";

import RouterWrapper from "./Pages/RouterWrapper";

export default class PageWrapper extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            mobile: true
        };
    }

        // | NON-RENDERING METHODS

        updateScreenSize = () => {

            this.setState({
                mobile: window.innerWidth <= 760,
            });

        };

        //  * End of NON-RENDING METHODS

        // | RENDERING METHODS

        // | Method to render the Desktop View
        renderDesktopView = () => {

            return(
                
                <div>
                    Please switch to Mobile View :)
                </div>

            );

        };
        //  * End of renderDesktopView method

        // | Method to render the Mobile View
        renderMobileView = () => {

            return(
                
                <RouterWrapper />

            );

        };
        //  * End of renderMobileView method

        // | Method to conditionally render content based on the screen size
        renderContent = () => {

            if(this.state.mobile) {

                return this.renderMobileView();

            } else if(!this.state.mobile) {

                return this.renderDesktopView()

            }

        };
        // * End of renderContent method

        //  * RENDING METHODS

        // | COMPONENT LIFE-CYCLE METHODS

        // | ComponentDidMount method
        componentDidMount = () => {

            this.updateScreenSize();

            window.addEventListener(
                "resize",
                () => this.updateScreenSize()
            );
            
        };
        // * End of ComponentDidMount method

        // | ComponentWillUnmount method
        componentWillUnmount = () => {

            window.removeEventListener(
                "resize",
                () => this.updateScreenSize()
            );
            
        };
        // * End of ComponentWillUnmount method

        // * End of COMPONENT LIFE-CYCLE METHODS

        render() {

            return this.renderContent();
        }

};
