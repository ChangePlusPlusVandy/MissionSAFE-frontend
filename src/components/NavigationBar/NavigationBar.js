import './NavigationBar.scss'
import { Link } from 'react-router-dom';
import React from "react"


class NavigationBar extends React.Component {
    render () {
        if (this.props.admin){
            return(
                <div className = "navContainer">
                    <ul>
                        <li><Link to="/AdminHome">Home</Link></li>
                        <li><Link to= "/Reports">Reports</Link></li>
                        <li><Link to = "/Management">Management</Link></li>
                        <li><Link to= "/Search">Search</Link></li>
                        <li><Link to= "/Forms">Forms</Link></li>
                    </ul>
                    <div className = "backdrop"/>
                </div>
            );
        }
        else{
            return (
                <div className = "navContainer">
                    <ul>
                        <li><Link to= "/StaffHome">Home</Link></li>
                        <li><Link to= "/Search">Search</Link></li>
                        <li><Link to= "/Forms">Forms</Link></li>
                    </ul>
                    <div className='backdrop'/>
                </div>
            );
        }
    }
}
export default NavigationBar;