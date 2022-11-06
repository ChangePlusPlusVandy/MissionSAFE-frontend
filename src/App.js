import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotHome from "./pages/NotHome/NotHome";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/not-home" element={<NotHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;