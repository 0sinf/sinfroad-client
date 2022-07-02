import GlobalNav from "./components/GlobalNav";
import { Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Sidebar from "./components/Sidebar";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const app = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    const { current } = app;

    if (!current) {
      return;
    }

    setIsMobile(current.offsetWidth < 660);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App" ref={app}>
      <GlobalNav isMobile={isMobile} setShowSidebar={setShowSidebar} />
      {isMobile && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
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
