import React from 'react'
import Artikel from '../../../component/artikel/Artikel';
import Donasi from '../../../component/donasi/Donasi';
import Footer from '../../../component/footer/Footer';
import Header from '../../../component/header/Header';
import Jurnal from '../../../component/jurnal/Jurnal';
import Kominitas from '../../../component/komunitas/Kominitas';

const Beranda = () => {
  return (
    <div>
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
