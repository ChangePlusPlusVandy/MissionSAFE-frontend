import React from "react";
import { Link } from "react-router-dom";
import "./Unauthorized.scss";

class Unauthorized extends React.Component {
    render() {
        return (
            <div className="message-page">
                <p>You do not have access to the requested resource.</p>
                <p>Please contact an administrator to change your permissions.</p>
                <Link className="message-page-button" to="/">Return Home</Link>
            </div>
        )
    }
}

export default Unauthorized