import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { PostDetail } from "./components/PostDetail";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
