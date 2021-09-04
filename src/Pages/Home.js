import React from "react";

import "../Assets/Styling/Common.css";


class Home extends React.Component {

        render() {

            return(
                <div className="page-container">
                    
                    <p className="heading-text">
                        Home
                    </p>

                    <div className="scrollable-area">

                        <p className="empty-text">
                            Left empty on purpose
                        </p>

                    </div>

                </div>
            );
        }

};

export default Home;