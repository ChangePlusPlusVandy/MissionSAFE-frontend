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
          <Route path="/" element={<div>coming soon ...</div>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;