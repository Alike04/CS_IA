import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Boards from "./pages/Boards/Boards";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(true);
  });

  if (!isLoaded) {
    return <></>;
  }
  return (
    <>
      <BrowserRouter>
        {showNav && <Navbar isLogged={user} />}
        <Routes>
          <Route path="/register" element={<Register funcNav={setShowNav} />} />
          <Route path="/login" element={<Login funcNav={setShowNav} />} />
          <Route path="/" element={<Home funcNav={setShowNav} />} />
          <Route path="/boards" element={<Boards funcNav={setShowNav} />} />
          <Route path="*" element={<NotFound></NotFound>} />
          <Route path="/boards/:boardId" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
