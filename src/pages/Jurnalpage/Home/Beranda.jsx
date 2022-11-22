import React from 'react'
import Artikel from '../../../component/artikel/Artikel';
import Donasi from '../../../component/donasi/Donasi';
import Dunia from '../../../component/dunia/Dunia';
import Footer from '../../../component/footer/Footer';
import Header from '../../../component/header/Header';
import Jurnal from '../../../component/jurnal/Jurnal';
import Kominitas from '../../../component/komunitas/Kominitas';
import Navbar from '../../../component/Navbar/Navbar';

const Beranda = () => {
  return (
    <div>
      <Navbar />
      <Header />      
      <Artikel />
      <Kominitas />
      <Donasi />
      <Jurnal />
      <Footer />
    </div>
  )
}
export default Beranda;