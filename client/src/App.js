import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signin/" />
          <Route path="/auth/signup/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
