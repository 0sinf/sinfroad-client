import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { PostDetail } from "./pages/PostDetail";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
