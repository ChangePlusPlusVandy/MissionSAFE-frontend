import React from "react";
import "./AttendEvent.scss";
import { attendEvent } from "../../util/ServerInterfaceEvents";
import { Navigate } from "react-router";

import Logo from "../../assets/mission-safe-logo.png";

class AttendEvent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            code: "",
            email: "",
            errorMessage: "",
            redirect: false,
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: "",
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if(this.state.code.length === 5 && this.state.email.length > 0) {
            try {
                let attendanceResult = await attendEvent(this.state.code, {
                    email: this.state.email
                });
                if(attendanceResult) {
                    this.setState({
                        redirect: true,
                    })
                }
            } catch(err) {
                this.setState({
                    errorMessage: "Failed to register attendance. Please try again."
                })
                document.getElementById("code-input").value = "";
            }
        }
    }

    render() {
        if(this.state.redirect) {
            return <Navigate to="/attend-success"/>
        } else {
            return (
                <div className="page-container" id="attendance-page">
                    <div id="header">
                        <img src={Logo} alt="MissionSAFE logo"/>
                        <p id="title">Event Attendance</p>
                        <p id="subtitle">Enter your information below.</p>
                    </div>
                    <div className="attendace-form">
                        <div className="attendance-input">
                            <p className="form-label">Email</p>
                            <input onChange={this.handleUpdate} name="email" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="attendance-input">
                            <p className="form-label">Event Code</p>
                            <input onChange={this.handleUpdate} id="code-input" name="code" type="text" placeholder="XXXXX"/>
                        </div>
                    </div>
                    <p className="attendance-error">{this.state.errorMessage}</p>
                    <p onClick={this.handleSubmit} className="message-page-button">Mark Attendance</p>
                </div>
            )
        }
    }
}

export default AttendEvent