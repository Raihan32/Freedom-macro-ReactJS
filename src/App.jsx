import { React } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Jurnalpage/Home/Beranda";
import Jurnalpage from "./pages/Jurnalpage/Jurnalpage";
import Artikelpage from "./pages/artikelpage/Artikelpage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Donasipage from "./pages/donasipage/Donasipage";
import Petisi from "./pages/petisi/Petisi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/jurnal" element={<Jurnalpage />} />
        <Route path="/artikel" element={<Artikelpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donasi" element={<Donasipage />} />
        <Route path="/petisi" element={<Petisi />} />
      </Routes>
      <h1>Test Collaborators</h1>
      <h2>Perubahan ke tiga</h2>
      <h3>perubahan ke 98</h3>
    </>
  );
}

export default App;
