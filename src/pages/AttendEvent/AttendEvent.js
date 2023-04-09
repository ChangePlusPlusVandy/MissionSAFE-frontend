import React from "react";
import "./AttendEvent.scss";
import { attendEvent } from "../../util/staffEPs";
import { Navigate } from "react-router";

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
        if(this.state.code.length === 5 && this.state.email.length > 0) {
            try {
                let attendanceResult = await attendEvent({
                    eventCode: this.state.code,
                    email: {email: this.state.email},
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
                <div className="page-container">
                    <p>Event Attendance</p>
                    <div className="attendace-form">
                        <div className="attendance-input">
                            <p>Email</p>
                            <input onChange={this.handleUpdate} name="email" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="attendance-input">
                            <p>Event Code</p>
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