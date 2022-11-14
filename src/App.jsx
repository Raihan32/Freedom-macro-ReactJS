import { React } from "react";
import Header from "./component/header/Header";
import Navbar from "./component/Navbar/Navbar";
import Artikel from "./component/artikel/Artikel";
import Kominitas from "./component/komunitas/Kominitas";
import Donasi from "./component/donasi/Donasi";
import Jurnal from "./component/jurnal/Jurnal";
import Footer from "./component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Jurnalpage/Home/Beranda";
import Jurnalpage from "./pages/Jurnalpage/Jurnalpage";



function App() {
  return (
    <><Navbar />
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="/jurnal" element={<Jurnalpage />} />
    
    </Routes>
     
    </>
  );
}

export default App;
