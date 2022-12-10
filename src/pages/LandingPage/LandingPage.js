import React from "react";
import ProgressionButton from "../../components/ProgressionButton/ProgressionButton";
import "./LandingPage.scss"
import "../../App.scss"

class LandingPage extends React.Component {
    render() {
        return (
            <div className="column-container">
                <p>Welcome to MissionSAFE</p>
                <ProgressionButton text="Login" direction="forward" available="available"/>
                <ProgressionButton text="Register" direction="forward" available="available"/>
            </div>
        )
    }
}

export default LandingPage;