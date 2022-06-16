import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Boards from "./pages/Boards/Boards";
import Board from "./pages/Board/Board";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/board:boardId" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
