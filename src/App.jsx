import { React } from "react";
import Header from "./component/header/Header";
import Navbar from "./component/Navbar/Navbar";
import Artikel from "./component/artikel/Artikel";
import Kominitas from "./component/komunitas/Kominitas";
import Donasi from "./component/donasi/Donasi";
import Jurnal from "./component/jurnal/Jurnal";
import Footer from "./component/footer/Footer";




function App() {
  return (
    <><Navbar />
     <Header />
    <Artikel />
    <Kominitas />
    <Donasi />
    <Jurnal />
    <Footer />
    </>
  );
}

export default App;
