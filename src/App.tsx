import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { PostDetail } from "./pages/PostDetail";
import PostForm from "./pages/PostForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" element={<PostDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/posts" element={<PostForm />}></Route>
        <Route path="/posts/update/:id" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
