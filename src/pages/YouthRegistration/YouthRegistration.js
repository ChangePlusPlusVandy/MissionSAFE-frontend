import React from "react";
import Firebase from "../../util/Firebase";
import RegistrationHelpers from "../../util/RegistrationHelpers";
import { createYouth } from "../../util/ServerInterfaceYouth";
import "./YouthRegistration.scss"
import { Navigate } from "react-router";

import Logo from "../../assets/mission-safe-logo.png";


class YouthRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            ssn: "",
            redirect: false,
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
    };

    async handleSubmit(event) {
        event.preventDefault();
        if(RegistrationHelpers.validateEmail(this.state.email)) {
            if(this.state.ssn.length === 11) {
                if(this.state.password.length >= 8) {
                    if(this.state.firstName.length > 0 && this.state.lastName.length > 0) {
                        try {
                            let firebaseRegister = await Firebase.registerUser(this.state.email, this.state.password);
                            let databaseRegister = await createYouth({
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                email: this.state.email,
                                ssn: this.state.ssn,
                                fireID: firebaseRegister,
                            })
                            this.setState({
                                redirect: true,
                            })
                        } catch(err) {
                            this.setState({
                                errorMessage: "Failed to register, please try again later."
                            });
                            console.log(err);
                        }
                    } else {
                        this.setState({
                            errorMessage: "Please provide a valid name."
                        })
                    }
                } else {
                    this.setState({
                        errorMessage: "Please provide a password with at least 8 characters"
                    })
                }
            } else {
                this.setState({
                    errorMessage: "Please provide a valid social security number."
                })
            }
        } else {
            this.setState({
                errorMessage: "Please provide a valid email address."
            })
        }
    }

    render() {
        if(this.state.redirect) {
            return <Navigate to="/youth-success"/>;
        } else {
            return (
                <div className="page-container" id="youth-registration-page">
                    <div className="registration-header">
                        <img src={Logo} alt="MissionSAFE logo"/>
                        <p className="registration-title">Register</p>
                        <p className="registration-subtitle">Sign up for MissionSAFE programs.</p>
                    </div>
                    <div className="registration-form" id="youth-registration-form">
                        <div className="registration-input-row">
                            <div className="registration-input">
                                <p className="registration-label">First Name</p>
                                <input type="text" onChange={this.handleUpdate} name="firstName"/>
                            </div>
                            <div className="registration-input">
                                <p className="registration-label">Last Name</p>
                                <input type="text" onChange={this.handleUpdate} name="lastName"/>
                            </div>
                        </div>
                        <div className="registration-input-row">
                            <div className="registration-input">
                                <p className="registration-label">Email</p>
                                <input type="text" onChange={this.handleUpdate} name="email"/>
                            </div>
                            <div className="registration-input">
                                <p className="registration-label">SSN</p>
                                <input type="text" onChange={this.handleUpdate} placeholder="XXX-XX-XXXX" name="ssn"/>
                            </div>
                        </div>
                        <div className="registration-input">
                                <p className="registration-label">Password</p>
                                <input type="password" onChange={this.handleUpdate} name="password"/>
                            </div>
                        <p id="registration-error-message">{this.state.errorMessage}</p>    
                        <p className="register-button" onClick={this.handleSubmit}>Register</p>
                    </div>
                </div>
            )
        }
    }
}

export default YouthRegistration;