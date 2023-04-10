import React from "react";
import { Navigate } from "react-router";
import { getActiveStaff, getInactiveStaff } from "../../util/ServerIntefaceStaff";
import "./AdminHome.scss";

class AdminHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStaff: [],
            inactiveStaff: [],
        }

        this.renderStaff = this.renderStaff.bind(this)
    }

    async componentDidMount() {
        let activeStaff = await getActiveStaff();
        let inactiveStaff = await getInactiveStaff();

        this.setState({
            activeStaff,
            inactiveStaff
        })
    }

    renderStaff(staffList) {
        return staffList.map(staff => {
            return (
                <div className="staff" key={staff.fireID}>
                    <p>{staff.firstName} {staff.lastName}</p>
                    <p>Counselor: {staff.counselor}</p>
                    <p>Admin: {staff.admin}</p>
                </div>
            );
        });
    }

    render() {
        try {
            if(!this.props.user.active || !this.props.user.admin) {
                return <Navigate to="/unauthorized"/>
            } else {
                return (
                    <div className="page-container">
                        <p id="admin-title">Admin Dashboard</p>
                        <p>Active Staff</p>
                        <div className="staff-container">
                            {this.renderStaff(this.state.activeStaff)}
                        </div>
                        <p>Inactive Staff</p>
                        <div className="staff-container">
                            {this.renderStaff(this.state.inactiveStaff)}
                        </div>
                    </div>
                )
            }
        } catch(err) {
            return <Navigate to="/unauthorized"/>
        }
        
    }
}

export default AdminHome