import React from "react";
import NavButton from "../../components/NavButton/NavButton";
import "./RegistrationPage.scss";
import "../../App.scss";

class RegistrationPage extends React.Component {
    render() {
        return (
            <div className="column-container">
                <p>Choose Account Type:</p>
                <NavButton text="Youth" available="available" link="/youthreg" />
                <NavButton text="Staff" available="available" link="/staffreg" />
            </div>
        );
    }
}

export default RegistrationPage;