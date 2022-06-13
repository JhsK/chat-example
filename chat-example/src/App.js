import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mock/info" element={<MockInfo />} />
        <Route path="/mock/interview" element={<MockProblem />} />
        <Route path="/theme/info" element={<ThemeInfo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
