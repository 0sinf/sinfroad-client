import GlobalNav from "./components/GlobalNav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Write from "./pages/Write";

function App() {
  return (
    <div className="App">
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Write />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
