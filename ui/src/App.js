import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import PostDetails from "./screen/PostDetails";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/"  exact element={<Home />} />
      <Route path="/posts"  exact element={<PostDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
