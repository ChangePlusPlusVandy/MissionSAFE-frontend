import React from "react";
import NavButton from "../../components/NavButton/NavButton";
import "./LandingPage.scss"
import "../../App.scss"

class LandingPage extends React.Component {
    render() {
        return (
            <div className="column-container">
                <p>Welcome to MissionSAFE</p>
                <NavButton text="Login" available="available" link="/login"/>
                <NavButton text="Register" available="available"/>
            </div>
        )
    }
}

export default LandingPage;