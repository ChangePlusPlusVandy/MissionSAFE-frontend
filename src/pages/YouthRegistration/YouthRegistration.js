import React from "react";
import "./YouthRegistration.scss"
import "../../util/Firebase"

class YouthRegistration extends React.Component {
    render() {
        return (
            <div className="column-container">
                <p>Youth Registration Page</p>
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


export default YouthRegistration;