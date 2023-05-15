import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Blogdetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Create from "./Create";
import NotFoound from "./NotFoound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Blogdetails />} />
            <Route path="*" element={<NotFoound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
