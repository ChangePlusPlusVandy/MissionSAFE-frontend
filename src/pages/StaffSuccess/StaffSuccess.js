import React from "react";
import "./StaffSuccess.scss";

class StaffSuccess extends React.Component {
    render() {
        return (
            <div className="page-container">
                <p>You have successfully registered!</p>
                <p>Please wait for an administrator to activate your account.</p>
            </div>
        )
    }
}

export default StaffSuccess