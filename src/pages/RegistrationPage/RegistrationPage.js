import React from "react";
import { Link } from "react-router-dom";
import "./RegistrationPage.scss";

import Logo from "../../assets/mission-safe-logo.png";
import Youth from "../../assets/youth.png";
import Staff from "../../assets/staff.png";


class RegistrationPage extends React.Component {
    render() {
        return (
            <div className="page-container">
                <img id="registration-choice-logo" src={Logo} alt="MissionSAFE logo"/>
                <p id="registration-choice-prompt">Choose Account Type:</p>
                <div id="registration-choices" className="centered-row-container">
                    <Link to="/youthreg" id="youth-choice" className="registration-choice">
                        <img src={Youth} alt="Youth icon"/>
                        <p className="registration-choice-name">Youth</p>
                    </Link>
                    <Link to="/staffreg" className="registration-choice">
                        <img src={Staff} alt="Staff icon"/>
                        <p className="registration-choice-name">Staff</p>
                    </Link>
                </div>
                <p id="login-redirect">Already have an account? <Link to="/login">Login here.</Link></p>
            </div>
        );
    }
}

export default RegistrationPage;