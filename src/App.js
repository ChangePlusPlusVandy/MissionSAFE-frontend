import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss"
import React from "react";
import StaffRegistration from "./pages/StaffRegistration/StaffRegistration";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/staffreg" element={<StaffRegistration/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;