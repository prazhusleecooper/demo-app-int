import React from "react";

import "../Assets/Styling/Common.css";

class Profile extends React.Component {

        render() {

            return(
                <div className="page-container">
                    
                    <p className="heading-text">
                        Profile
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

export default Profile;