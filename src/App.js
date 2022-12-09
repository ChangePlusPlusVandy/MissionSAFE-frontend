import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

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
          <Route path="/" element={<div>Hello from localhost:3000!</div>}/>
          <Route path="/next" element={<div>Hello from localhost:3000/next!</div>}/>
          <Route path="/last" element={<div>Hello from localhost:3000/last!</div>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;