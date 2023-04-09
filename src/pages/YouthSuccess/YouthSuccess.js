import React from "react";
import { Link } from "react-router-dom";
import "./YouthSuccess.scss";

class YouthSuccess extends React.Component {
    render() {
        return (
            <div className="message-page">
                <p>You are successfully registered!</p>
                <p>Remember the email you used for attendance.</p>
                <Link className="message-page-button" to="/">Return Home</Link>
            </div>
        )
    }
}

export default YouthSuccess