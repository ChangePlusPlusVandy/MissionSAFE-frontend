import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.scss"
import React from "react";
import StaffRegistration from "./pages/StaffRegistration/StaffRegistration";
import YouthRegistration from "./pages/YouthRegistration/YouthRegistration";
import UserContext from "./context/UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/staffreg" element={<StaffRegistration />} />
            <Route path="/youthreg" element={<YouthRegistration />} />
            <Route path="/search" element={<SearchPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App;