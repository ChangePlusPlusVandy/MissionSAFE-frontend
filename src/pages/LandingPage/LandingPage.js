import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mission-safe-logo.png";
import "./LandingPage.scss";
import HeaderResponsive from "../../components/Header/Header";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <HeaderResponsive />
        <div className="page-container">
          <img id="landing-logo" src={Logo} alt="MissionSAFE logo" />
          <p id="landing-subtitle">Where hope thrives.</p>
          <div id="landing-option-container" className="column-container">
            <Link className="landing-button" to="/login">
              Login
            </Link>
            <Link className="landing-button" to="/register">
              Register
            </Link>
            <Link className="landing-button" to="/attend-event">
              Attendance
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
