import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import StaffHome from "./pages/StaffHome/StaffHome";
import StaffRegistration from "./pages/StaffRegistration/StaffRegistration";
import YouthRegistration from "./pages/YouthRegistration/YouthRegistration";
import YouthSuccess from "./pages/YouthSuccess/YouthSuccess";
import UserContext from "./context/UserContext";
import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (user) => {
    this.setState({ user });
    console.log(this.state.user);
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user, onLogin: this.handleLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage handleLogin={this.handleLogin}/>} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/staff-register" element={<StaffRegistration handleLogin={this.handleLogin}/>} />
            <Route path="/youth-register" element={<YouthRegistration />} />
            <Route path="/youth-success" element={<YouthSuccess />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App;