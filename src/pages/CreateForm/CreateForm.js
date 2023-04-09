import React from "react";
import { createYouthForm, createEventForm } from "../../util/staffEPs";
import { Navigate } from "react-router";
import "./CreateForm.scss"

class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: window.location.pathname.split("/")[2], // "event" or "youth"
            id: window.location.pathname.split("/")[3], // eventCode or fireID
            program: "",
            content: "",
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
        if(this.state.program.length > 0 && this.state.content.length > 0) {
            try {
                if(this.state.type === "event") {
                    let form = await createEventForm(this.state.id, {
                        programs: [this.state.program],
                        content: this.state.content
                    });
                    if(form.ok) {
                        this.setState({
                            redirect: true,
                        })
                    } else {
                        this.setState({
                            errorMessage: "Something went wrong. Please try again."
                        })
                    }
                } else if(this.state.type === "youth") {
                    let form = await createYouthForm(this.state.id, {
                        programs: [this.state.program],
                        content: this.state.content
                    });
                    if(form.ok) {
                        this.setState({
                            redirect: true,
                        })
                    } else {
                        this.setState({
                            errorMessage: "Something went wrong. Please try again."
                        })
                    }
                }
            } catch(err) {
                this.setState({
                    errorMessage: "Failed to create form. Please try again."
                })
            }
        }
    }

    render() {
        try {
            if(!this.props.user.active) {
                return <Navigate to="/unauthorized"/>
            } else if(this.state.redirect) {
                return <Navigate to="/records"/>
            } else {
                return (
                    <div className="page-container">
                        <p className="form-creation-title">Form Creation</p>
                        <div className="form-options">
                            <div className="form-option">
                                <p>What program is this form associated with?</p>
                                <input name="program" onChange={this.handleUpdate} type="text"/>
                            </div>
                            <div className="form-option">
                                <p>Content</p>
                                <textarea name="content" onChange={this.handleUpdate}/>
                            </div>
                        </div>
                        <p onClick={this.handleSubmit} className="message-page-button">Create Form</p>
                    </div>
                )
            }
        } catch(err) {
            return <Navigate to="/unauthorized"/>
        }
    }
}

export default CreateForm;