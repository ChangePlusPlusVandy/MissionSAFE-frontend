import React from "react"
import Firebase from "../../util/Firebase"
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getStaffByID } from "../../util/staffEPs";
import "./LoginPage.scss"

import Logo from "../../assets/mission-safe-logo.png";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        try {
            const staffID = await Firebase.loginUser(this.state.email, this.state.password);
            const staff = await getStaffByID(staffID);
            console.log(staff);
            this.props.handleLogin(staff);
            this.setState({
                redirect: true,
            })
        } catch(err) {
            this.setState({
                errorMessage: "No staff found with that email/password",
            })
            document.getElementById("login-email").value = "";
            document.getElementById("login-password").value = "";
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Navigate to="/search"/>
        } else {
            return (
                <div className="page-container" id="login-page">
                    <div id="login-header">
                        <img src={Logo} alt="MissionSAFE logo"/>
                        <p id="login-title">Login</p>
                        <p id="login-subtitle">Please sign in to continue.</p>
                    </div>
                    <div id="login-form">
                        <div className="login-form-input">
                            <p className="login-form-label">Email</p>
                            <input id="login-email" name="email" onChange={this.handleUpdate} type="email"/>
                        </div>
                        <div className="login-form-input">
                            <p className="login-form-label">Password</p>
                            <input id="login-password" name="password" onChange={this.handleUpdate} type="password"/>
                        </div>
                        <p id="login-error-message">{this.state.errorMessage}</p>
                        <p id="login-button" onClick={this.handleSubmit}>Login</p>
                    </div>
                    <p id="login-redirect">Don't have an account? <Link to="/register">Create one here.</Link></p>
                </div>
            )
        }
    }
}

export default LoginPage