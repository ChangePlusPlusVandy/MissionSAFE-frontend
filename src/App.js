import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import StaffRegistration from "./pages/StaffRegistration/StaffRegistration";
import YouthRegistration from "./pages/YouthRegistration/YouthRegistration";
import StaffHome from "./pages/StaffHome/StaffHome";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import AttendEvent from "./pages/AttendEvent/AttendEvent";
import YouthSuccess from "./pages/YouthSuccess/YouthSuccess";
import StaffSuccess from "./pages/StaffSuccess/StaffSuccess";
import AttendSuccess from "./pages/AttendSuccess/AttendSuccess";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
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
            <Route path="/staff-home" element={<StaffHome user={this.state.user}/>} />
            <Route path="/records" element={<SearchPage />} />
            <Route path="/admin" element={<StaffHome /> /* TODO */} />
            <Route path="/create-event" element={<CreateEvent user={this.state.user}/>} />
            <Route path="/attend-event" element={<AttendEvent />} /> 
            <Route path="/youth/:id" element={<StaffHome /> /* TODO */} />
            <Route path="/event/:code" element={<StaffHome /> /* TODO */} />
            <Route path="/form/:id" element={<StaffHome /> /* TODO */} />
            <Route path="/youth-success" element={<YouthSuccess />} />
            <Route path="/staff-success" element={<StaffSuccess />} />
            <Route path="/attend-success" element={<AttendSuccess />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App;