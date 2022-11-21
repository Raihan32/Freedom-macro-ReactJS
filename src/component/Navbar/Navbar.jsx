import React from 'react'
import Logo from "./imgnavbar/Logo.png"
import Profile from "./imgnavbar/user.png"
import { NavLink } from "react-router-dom";
import './css.css'
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-toggler"><img style={{height:"75px",marginLeft : " 15px"}} src={Logo} /></span>
        
        <div className="collapse navbar-collapse" >
            <a><img style={{ height:"75px",marginLeft : " 85px" ,}} src={Logo} /></a>      
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                <li className="nav-item">
                    <NavLink className="nav-link active animasi-left-right" to="/beranda">Beranda</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active animasi-left-right"to="/artikel">Artikel</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active animasi-left-right"to="/">Pejuang</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active animasi-left-right"to="/jurnal">Jurnal</NavLink>
                </li>
                <NavDropdown className='nav-item ' title="Tindakan" id="basic-nav-dropdown">
                    <NavLink className='dropdown-item' to='/donasi'>Donasi</NavLink>
                    <NavLink className='dropdown-item' to='/petisi'>Petisi</NavLink>
                </NavDropdown>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                    <NavLink className="nav-link active "to="/profile"><img src={Profile} />  Hi, Dafa</NavLink>
                </li>
             
            </ul>
        </div>
        
    </div>
</nav>
    </div>
  )
}

export default Navbar;
