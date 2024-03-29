import GlobalNav from "./components/GlobalNav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Drawer from "./components/Drawer";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <div className="App">
      <GlobalNav setShowDrawer={setShowDrawer} />
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/posts" element={<Write />} />
        <Route path="/users" element={<User />} />
        <Route path="/posts/update/:id" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
