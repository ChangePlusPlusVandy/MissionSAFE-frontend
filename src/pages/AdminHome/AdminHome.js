import React from "react";
import { Navigate } from "react-router";
import { getStaff, 
    activateStaff, 
    deactivateStaff, 
    setStaffAsAdmin, 
    removeStaffAsAdmin,
    setStaffAsCounselor,
    removeStaffAsCounselor 
} from "../../util/ServerIntefaceStaff";
import "./AdminHome.scss";

class AdminHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            staff: {},
        }
        this.renderStaff = this.renderStaff.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    async componentDidMount() {
        let staffList = await getStaff();
        let idIndexedStaff = staffList.reduce((map, staff) => {
            map[staff.fireID] = staff;
            return map;
        }, {}); 
        this.setState({ staff: idIndexedStaff });
    }

    async handleToggle(event) {
        let fireID = event.target.name.split("|")[0];
        let attribute = event.target.name.split("|")[1];
        try {
            let activate = !this.state.staff[fireID][attribute];
            let status = null;
            if(activate) {
                switch(attribute) {
                    case "active":
                        status = await activateStaff(fireID);
                        break;
                    case "counselor":
                        status = await setStaffAsCounselor(fireID);
                        break;
                    case "admin":
                        status = await setStaffAsAdmin(fireID);
                        break;
                    default:
                        throw new Error("Update unavailable.")
                }
            } else {
                switch(attribute) {
                    case "active":
                        status = await deactivateStaff(fireID);
                        break;
                    case "counselor":
                        status = await removeStaffAsCounselor(fireID);
                        break;
                    case "admin":
                        status = await removeStaffAsAdmin(fireID);
                        break;
                    default:
                        throw new Error("Update unavailable.")
                }
            }
            if(!status) {
                throw new Error("Failed to make update.");
            }
            
            let oldStaff = this.state.staff;
            oldStaff[fireID][attribute] = activate;
            this.setState({
                staff: oldStaff
            }); 
        } catch(error) {
            alert(error);
        }
    }

    renderStaff(staffMap) {
        return Object.keys(staffMap).map((fireID) => {
            let staff = this.state.staff[fireID];
            return (
                <tr className="staff-row" key={fireID}>
                    <td className="staff-name">{staff.firstName} {staff.lastName}</td>
                    <td><input onChange={this.handleToggle} name={`${fireID}|active`} type="checkbox" checked={staff.active}/></td>
                    <td><input onChange={this.handleToggle} name={`${fireID}|counselor`} type="checkbox" checked={staff.counselor}/></td>
                    <td><input onChange={this.handleToggle} name={`${fireID}|admin`} type="checkbox" checked={staff.admin}/></td>
                </tr>
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
                        <table className="staff-container">
                            <tbody>
                                <tr className="header">
                                    <th>Name</th>
                                    <th>Active?</th>
                                    <th>Counselor?</th>
                                    <th>Admin?</th>
                                </tr>
                                {this.renderStaff(this.state.staff)}
                            </tbody>
                        </table>
                    </div>
                )
            }
        } catch(err) {
            return <Navigate to="/unauthorized"/>
        }
        
    }
}

export default AdminHome