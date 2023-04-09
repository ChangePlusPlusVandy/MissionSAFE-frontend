import React from "react";
import Firebase from "../../util/Firebase";
import RegistrationHelpers from "../../util/RegistrationHelpers";
import { createStaff } from "../../util/staffEPs";
import "./StaffRegistration.scss"
import { Navigate } from "react-router";

import Logo from "../../assets/mission-safe-logo.png";


class StaffRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
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
                if(this.state.password.length >= 8) {
                    if(this.state.firstName.length > 0 && this.state.lastName.length > 0) {
                        let firebaseRegister = await Firebase.registerUser(this.state.email, this.state.password);
                        let databaseRegister = await createStaff({
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            email: this.state.email,
                            fireID: firebaseRegister,
                        })
                        this.props.handleLogin(databaseRegister);
                        this.setState({
                            redirect: true,
                        })
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
                errorMessage: "Please provide a valid email address."
            })
        }
    }

    render() {
        if(this.state.redirect) {
            return <Navigate to="/staff-success"/>;
        } else {
            return (
                <div className="page-container" id="staff-registration-page">
                    <div className="registration-header">
                        <img src={Logo} alt="MissionSAFE logo"/>
                        <p className="registration-title">Register</p>
                        <p className="registration-subtitle">Sign up as MissionSAFE Staff.</p>
                    </div>
                    <div className="registration-form" id="staff-registration-form">
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
                                <p className="registration-label">Password</p>
                                <input type="password" onChange={this.handleUpdate} name="password"/>
                            </div>
                        </div>
                        <p id="registration-error-message">{this.state.errorMessage}</p>    
                        <p className="register-button" onClick={this.handleSubmit}>Register</p>
                    </div>
                </div>
            )
        }
    }
}

export default StaffRegistration;