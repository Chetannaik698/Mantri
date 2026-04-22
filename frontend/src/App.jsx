import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import Landing from "./Landing";
import MindBridge from "./Chat-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/mindbridge" element={<MindBridge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;