import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AdminHome from "./pages/AdminHome/AdminHome";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import StaffRegistration from "./pages/StaffRegistration/StaffRegistration";
import YouthRegistration from "./pages/YouthRegistration/YouthRegistration";
import StaffHome from "./pages/StaffHome/StaffHome";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import AttendEvent from "./pages/AttendEvent/AttendEvent";
import CreateForm from "./pages/CreateForm/CreateForm";
import YouthSuccess from "./pages/YouthSuccess/YouthSuccess";
import StaffSuccess from "./pages/StaffSuccess/StaffSuccess";
import AttendSuccess from "./pages/AttendSuccess/AttendSuccess";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import IndividualForm from "./pages/FormDetails/IndividualForm";
import "./App.scss"
import IndividualYouth from "./pages/IndividualYouth/IndividualYouth";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage handleLogin={this.handleLogin}/>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/staff-register" element={<StaffRegistration handleLogin={this.handleLogin}/>} />
          <Route path="/youth-register" element={<YouthRegistration />} />
          <Route path="/staff-home" element={<StaffHome user={this.state.user}/>} />
          <Route path="/records" element={<SearchPage />} />
          <Route path="/admin" element={<AdminHome user={this.state.user}/> } />
          <Route path="/create-event" element={<CreateEvent user={this.state.user}/>} />
          <Route path="/attend-event" element={<AttendEvent />} />
          <Route path="/create-form/:type/:id" element={<CreateForm />} /> 
          <Route path="/youth/:id" element={<IndividualYouth /> /* TODO */} />
          <Route path="/event/:code" element={<StaffHome /> /* TODO */} />
          <Route path="/form/:id" element={<IndividualForm /> /* TODO */} />
          <Route path="/youth-success" element={<YouthSuccess />} />
          <Route path="/staff-success" element={<StaffSuccess />} />
          <Route path="/attend-success" element={<AttendSuccess />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;