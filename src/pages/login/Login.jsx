import React from 'react'
import './login.css'
import foto from './img/foto.png'
import logo from './img/logo.png'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
    <div className='login'>
  <div className='formlogin'>
    <div className='fotologin'>
      <img style={{borderRadius:"20px"}} src={foto} />
    </div>
    <div className='formlog'>
      <img src={logo} />
      <form style={{marginTop:"90px"}}>
        <div class="mb-4">
          <input type="text" placeholder='Username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
        </div>
        <NavLink to='/beranda'>  <button type="submit" class="btn btn-primary" style={{marginTop:"20px",marginBottom:"20px", margin:"0px",padding:"20px", width:"100px"}}>Submit</button></NavLink>
        <p>Belum Punya Akun?<NavLink to='/register'> <span style={{color:"red"}}> Daftar</span></NavLink></p>
      </form>
    </div>
  </div>
</div>
    </Container>
  )
}

export default Login;
