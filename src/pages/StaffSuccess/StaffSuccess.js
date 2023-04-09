import React from "react";
import { Link } from "react-router-dom";
import "./StaffSuccess.scss";

class StaffSuccess extends React.Component {
    render() {
        return (
            <div className="message-page">
                <p>You have successfully registered!</p>
                <p>Please wait for an administrator to activate your account.</p>
                <Link className="message-page-button" to="/">Return Home</Link>
            </div>
        )
    }
}

export default StaffSuccess