import { nav_links } from "./constants/data";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import "./index.css";

import CustomToaster from "./components/ui/CustomToaster";

function App() {
  return (
    <Router>
      <Header />
      <CustomToaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
