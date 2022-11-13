import React from 'react'
import headerlogo from "./img/header.png"
import './header.css';


const Header = () => {
  return (
    <div className='hero'>
      <div className='herotext'>
        <p className='header'>#TolakRasisme</p>
        <p className='par'>Rasisme tidak dilawan dengan rasisme, pendekatan paling ideal untuk memerangi rasisme adalah dengan solidaritas.</p>
        <a> <button className='tombol'>Bergabung dengan kami sekarang</button> </a>
        <div className='foto'>
          <img src={headerlogo} />
        </div>
      </div> 
    </div>
  )
}

export default Header;