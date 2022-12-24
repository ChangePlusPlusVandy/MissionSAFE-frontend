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
        let email = document.getElementById("staff-register-email").value;
        let password = document.getElementById("staff-register-password").value;
        
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
                <p>Staff Registration Page</p>
                <input type="text" id="name" placeholder="Full Name"/>
                <input type="text" id="phone" placeholder="Enter Phone number"/>
                <input type="text" id="zip" placeholder="Enter zipcode"/>
                <input type="text" id="ssn" placeholder="Enter SSN"/>
                <input type="email" id="staff-register-email" placeholder="Email"/>
                <input type="password" id="staff-register-password" placeholder="Create password"/>
                <input onClick={this.handleRegister} type="submit" value="Submit"/>
            </div>
        )
    }
}

export default StaffRegistration;