import React from 'react'
import './footer.css'
import tiktok from './img/tiktok.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import Logo from './img/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerisi'>
            <div className='about'><img src={Logo}  style={{width:"137px" , height:"90px"}}/>
            <p>Menyediakan informasi dan menjadi
wadah bagi para pejuang #NoRoomForRacism</p></div>
            <div className='menu'>
                <p>menu</p>
                <p>beranda</p>
                <p>artikel</p>
                <p>komunitas</p>
                <p>tindakan</p>
                <p>jurnal</p>
            </div>
            <div className='support'>
                <p>Help Center</p>
                <p>Tentang Kami</p>
                <p>Kebijakan Privasi</p>
                <p>Syarat dan kententuan</p>
                <p>status</p>
                <p>jurnal</p>
            </div>
            <div className='call'>
                <p>Hubungi Kami</p>
                <p>freedom.helpdesk@gmail.com</p>
                <p>+621-090-5578</p>
                
                <div className='icon'>
                    <img src={tiktok} />
                    <img src={twitter} />
                    <img src={youtube} />
                    <img src={instagram} />
                    <img src={facebook} />
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer;
