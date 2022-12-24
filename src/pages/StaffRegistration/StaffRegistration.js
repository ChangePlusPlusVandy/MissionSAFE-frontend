import React, { useState } from "react";
import "./StaffRegistration.scss"
import "../../util/Firebase"

class StaffRegistration extends React.Component {
    render() {
        return (
            <div className="column-container">
                <p>Staff Registration Page</p>
                <input type="text" id="name" placeholder="Full Name"/>
                <input type="text" id="phone" placeholder="Enter Phone number"/>
                <input type="text" id="zip" placeholder="Enter zipcode"/>
                <input type="text" id="ssn" placeholder="Enter SSN"/>
                <input type="email" id="email" placeholder="Email"/>
                <input type="password" id="password" placeholder="Create password"/>
                <input type="submit" value="Submit"/>
                

            </div>

        )
    }
}

//registerUser(email, password);


export default StaffRegistration;