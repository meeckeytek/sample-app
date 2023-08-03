import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import NewPost from "./screen/NewPost";
import PostDetails from "./screen/PostDetails";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/"  exact element={<Home />} />
      <Route path="/post"  exact element={<NewPost />} />
      <Route path="/:postId"  exact element={<PostDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
