import React from "react";
import { Navigate } from "react-router";
import { createEvent } from "../../util/ServerInterfaceEvents";
import "./CreateEvent.scss";

import Logo from "../../assets/mission-safe-logo.png";

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            program: "",
            eventCode: null,
            errorMessage: "",
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
        if (this.state.program.length > 0) { // DUMMY PROGRAM CHECKING
            try {
                let event = await createEvent({
                    programs: [this.state.program],
                });
                this.setState({
                    eventCode: event.code,
                })
            } catch (err) {
                this.setState({
                    errorMessage: "Failed to create event, please try again."
                });
            }
        }
    }

    render() {
        try {
            if (!this.props.user.active) {
                return <Navigate to="/unauthorized" />
            } else if (this.state.eventCode) {
                return <Navigate to={`/event/${this.state.eventCode}`} />
            } else {
                return (
                    <div className="page-container" id="create-event-page">
                        <div id="create-event-header">
                            <img src={Logo} alt="MissionSAFE logo" />
                            <p className="event-creation-title">Create Event</p>
                        </div>
                        <div className="event-options">
                            <p className="prompt">What program is this event associated with?</p>
                            <input name="program" onChange={this.handleUpdate} type="text" />
                        </div>
                        <p>{this.state.errorMessage}</p>
                        <p onClick={this.handleSubmit} className="message-page-button">Create Event</p>
                    </div>
                )
            }
        } catch (err) {
            return <Navigate to="/unauthorized" />
        }
    }
}

export default CreateEvent