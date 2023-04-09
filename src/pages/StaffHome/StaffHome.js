import React from "react";
import "./StaffHome.scss";
import { Link, Navigate } from "react-router-dom";

class StaffHome extends React.Component {
    render() {
        if(!this.props.user.active) {
            return <Navigate to="/unauthorized"/>
        } else if(this.props.user.admin) {
            return (
                <div className="page-container" id="staff-home">
                    <p>Welcome, {this.props.user.firstName}</p>
                    <div id="option-container">
                        <Link className="staff-home-button" to="/records">Record Dashboard</Link>
                        <Link className="staff-home-button" to="/create-event">Event Creation</Link>
                        <Link className="staff-home-button" to="/admin">Admin Dashboard</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="page-container" id="staff-home">
                    <p>Welcome, {this.props.user.firstName}</p>
                    <div id="option-container">
                        <Link className="staff-home-button" to="/records">Record Dashboard</Link>
                        <Link className="staff-home-button" to="/create-event">Event Creation</Link>
                    </div>
                </div>
            )
        }
    }
}

export default StaffHome;