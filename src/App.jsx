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
import Pejuangpage from "./pages/pejuang/Pejuangpage";
// import Pejuangkomunitas from "./pages/pejuang/pejuangkomunitas/Pejuangkomunitas";
import About from "./pages/pejuang/pejuangkomunitas/about/About";
import Acara from "./pages/pejuang/pejuangkomunitas/acara/Acara";
import Member from "./pages/pejuang/pejuangkomunitas/member/Member";
import Diskusi from "./pages/pejuang/pejuangkomunitas/diskusi/Diskusi";
import Photos from "./pages/pejuang/pejuangkomunitas/photo/Photos";

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
        <Route path="/pejuang" element={<Pejuangpage />} />
        {/* <Route path="/pejuangkomunitas" element={<Pejuangkomunitas />} /> */}
        <Route path="/komunitas/about" element={<About />} />
        <Route path="/komunitas/acara" element={<Acara />} />
        <Route path="/komunitas/member" element={<Member />} />
        <Route path="/komunitas/diskusi" element={<Diskusi />} />
        <Route path="/komunitas/photos" element={<Photos />} />
      </Routes>
    </>
  );
}

export default App;
