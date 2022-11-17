import { React } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Jurnalpage/Home/Beranda";
import Jurnalpage from "./pages/Jurnalpage/Jurnalpage";
import Artikelpage from "./pages/artikelpage/Artikelpage";


function App() {
  return (
    <><Navbar />
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="/jurnal" element={<Jurnalpage />} />
    <Route path="/artikel" element={<Artikelpage />} />
    </Routes>
     
    </>
  );
}

export default App;
