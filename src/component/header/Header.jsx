import React from 'react'
import headerlogo from "./img/header.png"
import './header.css';


const Header = () => {
  return (
    <div className='container'>
    <div className='hero'>
      <div className='herotext'>
        <p className='header'>#TolakRasisme</p>
        <p className='par'>Rasisme tidak dilawan dengan rasisme, pendekatan paling ideal untuk memerangi rasisme adalah dengan solidaritas.</p>
        <a> <button className='tombol'>Bergabung dengan kami sekarang</button> </a>
        </div> 
      <img src={headerlogo} style={{width:"25%", height:"25%", marginTop:"25%" }} />
    </div>
    </div>
  )
}

export default Header;