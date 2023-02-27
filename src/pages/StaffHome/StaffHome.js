import React from "react";
import "./StaffHome.scss";
import "../../App.scss";
import UserContext from "../../context/UserContext";

class StaffHome extends React.Component {
    static Context = UserContext;

    render() {
        return (
            <div className="column-container">
                <p>Staff Home</p>
            </div>
        )
    }
}

export default StaffHome;