import React from "react";
import "./StaffRegistration.scss"
import Firebase from "../../util/Firebase";
import RegistrationHelpers from "../../util/RegistrationHelpers";

class StaffRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    async handleRegister(event) {
        event.preventDefault();
        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let employeeID = document.getElementById("employee-id").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        if (!firstName || !lastName || !email || !employeeID || !phone || !password) {
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
                <h1>Staff Registration Page</h1>
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
                            <label htmlFor="employee-id">Employee ID*</label>
                            <input type="number" id="employee-id" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone Number*</label>
                            <input type="text" id="phone" />
                        </div>
                    </div>
                    {/* <input type="text" id="zip" placeholder="Enter zipcode"/> */}
                    {/* <input type="text" id="ssn" placeholder="Enter SSN"/> */}
                    <div className="input-field full-width">
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-field full-width">
                        <label htmlFor="confirm-password">Confirm Password*</label>
                        <input type="password" id="confirm-password" />
                    </div>
                    {/* TODO: format this */}
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default StaffRegistration;