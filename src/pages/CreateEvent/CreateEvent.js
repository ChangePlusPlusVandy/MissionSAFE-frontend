import React from "react";
import { Navigate } from "react-router";
import { createEvent } from "../../util/ServerInterfaceEvents";
import "./CreateEvent.scss";

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
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
        if(this.state.program.length > 0) { // DUMMY PROGRAM CHECKING
            try {
                let event = await createEvent({
                    name: this.state.name,
                    description: this.state.description,
                    programs: [this.state.program],
                });
                this.setState({
                    eventCode: event.code,
                })
            } catch(err) {
                this.setState({
                    errorMessage: "Failed to create event, please try again."
                });
            }
        }
    }

    render() {
        try {
            if(!this.props.user.active) {
                return <Navigate to="/unauthorized"/>
            } else if (this.state.eventCode) {
                return <Navigate to={`/event/${this.state.eventCode}`}/>
            } else {
                return (
                    <div className="page-container">
                        <p className="event-creation-title">Event Creation</p>
                        <div className="event-options">
                            <p>What is the name of this event?</p>
                            <input name="name" onChange={this.handleUpdate} type="text"/>
                            <p>Please provide a description of this event</p>
                            <input description="program" onChange={this.handleUpdate} type="text"/>
                            <p>What program is this event associated with?</p>
                            <input name="program" onChange={this.handleUpdate} type="text"/>
                        </div>
                        <p>{this.state.errorMessage}</p>
                        <p onClick={this.handleSubmit} className="message-page-button">Create Event</p>
                    </div>
                )
            }
        } catch(err) {
            return <Navigate to="/unauthorized"/>
        }
    }
}

export default CreateEvent