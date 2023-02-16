import React from "react";
import Firebase from "../../util/Firebase";
import "./YouthRegistration.scss"
import "../../util/Firebase"

class YouthRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
    }

    async handleRegister(event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        try {
            let fireID = await Firebase.registerUser(email, password);
            console.log(fireID);
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <div className="column-container">
                <p>Youth Registration Page</p>
                <input type="text" id="first-name" placeholder="First Name" />
                <input type="text" id="last-name" placeholder="Last Name" />
                <input type="email" id="email" placeholder="Email" />
                <input type="date" id="birthday" placeholder="Birthday" />
                <input type="text" id="phone" placeholder="Phone Number" />
                {/* <input type="text" id="zip" placeholder="Enter zipcode"/> */}
                {/* <input type="text" id="ssn" placeholder="Enter SSN"/> */}
                <input type="password" id="password" placeholder="Create password" />
                <input type="password" id="confirm-password" placeholder="Confirm password" />
                <input onClick={this.handleRegister} type="submit" value="Submit" />
            </div>

        )
    }
}


export default YouthRegistration;