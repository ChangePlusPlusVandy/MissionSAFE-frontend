import React from "react";
import Firebase from "../../util/Firebase";
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
            birthday: "",
            phoneNumber: "",
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

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
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
                        <p className="registration-subtitle">Register a youth account in the system.</p>
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
                            <div className="registration-input" id="email-input-container">
                                <p className="registration-label">Email</p>
                                <input id="email-input" type="text" onChange={this.handleUpdate} name="email"/>
                            </div>
                        </div>
                        <div className="registration-input-row">
                            <div className="registration-input">
                                <p className="registration-label">Birthday</p>
                                <input type="text" onChange={this.handleUpdate} placeholder="MM/DD/YYYY" name="birthday"/>
                            </div>
                            <div className="registration-input">
                                <p className="registration-label">Phone Number</p>
                                <input type="text" onChange={this.handleUpdate} placeholder="(123) 456-7890" name="phoneNumber"/>
                            </div>
                        </div>
                        <p className="register-button" onClick={this.handleSubmit}>Register</p>
                    </div>
                </div>
            )
        }
    }
}


/*class YouthRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    async handleRegister(event) {
        event.preventDefault();
        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let birthday = document.getElementById("birthday").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        if (!firstName || !lastName || !email || !birthday || !password) {
            alert("Please fill out all required fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            let fireID = await Firebase.registerUser(email, password);
            console.log(fireID);
            // TODO: how should the other info be added?
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <div className="column-container">
                <h1>Youth Registration Page</h1>
                <form onSubmit={this.handleRegister}>
                    <div className="aligned-row-container">
                        <div className="input-field">
                            <label htmlFor="first-name">First Name*</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="last-name">Last Name*</label>
                            <input type="text" id="last-name" />
                        </div>
                    </div>
                    <div className="input-field full-width">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="aligned-row-container full-width">
                        <div className="input-field">
                            <label htmlFor="birthday">Birthday*</label>
                            <input type="date" id="birthday" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" />
                        </div>
                    </div>
                    <div className="input-field full-width">
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-field full-width">
                        <label htmlFor="confirm-password">Confirm Password*</label>
                        <input type="password" id="confirm-password" />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}*/

export default YouthRegistration;