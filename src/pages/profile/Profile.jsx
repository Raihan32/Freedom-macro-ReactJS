import React from 'react'
import Footer from '../../component/footer/Footer';
import './profile.css'
import profil from './img/profil.png'
import menuicon from './img/menuicon.png'
import menuicon1 from './img/menuicon1.png'
import menuicon2 from './img/menuicon2.png'
import menuicon3 from './img/menuicon3.png'
import { NavLink } from "react-router-dom";
import Navbar from '../../component/Navbar/Navbar';

const Profile = () => {
  return (
    <>
    <Navbar />
    <div className='profil'>
  <div className='frame'>
    <div className='infoprofil'>
      <div className='info'>
        <img src={profil} alt="" />
        <p>Dafa Huda</p>
        <p>DafaHuda@gmail.com</p>
        <p>0877-6767-8383</p>
      </div>
      <hr />
      <div className='info2'>
        <div className='menuprofil'>
          <img src={menuicon} alt="" />
          <p style={{color:"#E36868"}}>Profil Saya</p>
        </div>
        <div className='menuprofil'>
          <img src={menuicon1} alt="" />
          <p>Komunitas</p>
        </div>
        <div className='menuprofil'>
          <img src={menuicon2} alt="" />
          <p>Pengaturan</p>
        </div>
        <div className='menuprofil'>
          <img src={menuicon3} alt="" />
          <NavLink to="/login">
            <p style={{color:"#971C1C"}}>Logout</p>
          </NavLink>
        </div>
      </div>
    </div>
    <div className='form'>
      <h2>Profil Saya</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Tanggal Lahir</label>
          <input type="date" className="form-control" id="exampleInputPassword1" />
        </div>
        <p>Jenis Kelamin</p>
        <div className='radio'>
          <div class="form-check ">
            <input class="form-check-input mb-3 " type="radio" name="exampleRadios" id="exampleRadios1" value="L" />
            <label class="form-check-label" for="exampleRadios1"> laki - Laki </label>
          </div>
          <div class="form-check">
            <input class="form-check-input mb-3" type="radio" name="exampleRadios" id="exampleRadios2" value="P" />
            <label class="form-check-label" for="exampleRadios2"> Perempuan </label>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Kota / Kabupaten</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Email</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" style={{marginTop:"10px", margin:"0px",padding:"20px", width:"100px"}} className="btn btn-primary">Simpan</button>
      </form>
      <hr />
    </div>
  </div>
</div>
    <Footer />
    </>
  )
}

export default Profile;
