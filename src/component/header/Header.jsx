import React from 'react'
import headerlogo from "./img/header.png"
import './header.css';


const Header = () => {
  return (
   <div className='container'>
    <div className='hero'>
      <div className='herotext'>
        <p className='header'>#TolakRasisme</p>
        <p className='par'>“Kegelapan tidak dapat mengusir kegelapan: hanya cahaya yang dapat melakukan itu. Kebencian tidak dapat mengusir kebencian: hanya cinta yang dapat melakukan itu.”</p>
        <a> <button className='tombol'>Bergabung sekarang</button> </a>
        </div> 
      
    </div>
    <div className='foto'>
    <img src={headerlogo} style={{ marginTop:"25%" }} />
    </div>
    </div>
  )
}

export default Header;