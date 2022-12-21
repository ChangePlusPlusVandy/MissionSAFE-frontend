import './NavigationBar.scss'
import React from "react"


class NavigationBar extends React.Component {
    render () {
        if (this.props.admin === "true"){
            return(
                <div className = "navContainer">
                    <ul>
                        <li><a href = "/AdminHome">Home</a></li>
                        <li><a href = "/Reports">Reports</a></li>
                        <li><a href = "/Management">Management</a></li>
                        <li><a href = "/Search">Search</a></li>
                        <li><a href = "/Forms">Forms</a></li>
                    </ul>
                    <div className = "backdrop"/>
                </div>
            );
        }
        else{
            return (
                <div className = "navContainer">
                    <ul>
                        <li><a href = "/StaffHome">Home</a></li>
                        <li><a href = "/Search">Search</a></li>
                        <li><a href = "/Forms">Forms</a></li>
                    </ul>
                    <div className='backdrop'/>
                </div>
            );
        }
    }
}
export default NavigationBar;