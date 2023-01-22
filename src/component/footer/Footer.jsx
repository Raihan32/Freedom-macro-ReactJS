import React from "react";
import "./footer.css";
import tiktok from "./img/tiktok.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import Logo from "./img/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footeratas">
        <div className="footeratastext">
          <p className="textatasfooter">Suscribe Our Newsletter</p>
          <p className="textbawahfooter">
            Tetap Update Tentang Kerja Anti-Rasisme Di Seluruh Indonesia Dengan
            Berlangganan Newsletter Kami
          </p>
        </div>
        <div className="footerataslangganan">
          <input className="inputlangganan" type="text" />
          <button className="langganan">Subscribe</button>
        </div>
      </div>
      <div className="footerisi">
        <div className="menu">
          <p style={{ fontWeight: "700", fontSize: "32px", color: "white" }}>
            Menu
          </p>
          <p>beranda</p>
          <p>artikel</p>
          <p>komunitas</p>
          <p>tindakan</p>
          <p>jurnal</p>
        </div>
        <div className="menu">
          <p style={{ fontWeight: "700", fontSize: "32px", color: "white" }}>
            SUPPORT
          </p>
          <p>Help Center</p>
          <p>Kebijakan Privasi</p>
          <p>Syarat dan Ketentuan</p>
        </div>
        <div className="menu">
          <p style={{ fontWeight: "700", fontSize: "30px", color: "white" }}>
            CONTACT US
          </p>
          <p>freedom.helpdesk@gmail.com</p>
          <p>+621-090-5578</p>
          <div className="icon">
            <img src={tiktok} />
            <img src={twitter} />
            <img src={youtube} />
            <img src={instagram} />
            <img src={facebook} />
          </div>
        </div>
        <div className="tempattombol">
          <button className="tombolfooter">Donasi</button>
          <button className="tombolfooter">Petisi</button>
          <button className="tombolfooter">Bergabung</button>
        </div>
        <div className="about"></div>
      </div>
      <div className="footerbawah">
        <img src={Logo} />

        <div className="footerbawahtext">
          <h4>TENTANG KAMI</h4>
          <p>
            Menyediakan informasi dan menjadi wadah bagi para pejuang
            #NoRoomForRacism. Berkolaborasi dari seluruh pejuang dan komunitas
            anti rasisme yang ada di Indonesia demi memperjuangkan dan mengakkan
            keaddilan di negeri ini.
          </p>
        </div>
        <div className="askq">ASK QUESTION </div>
      </div>
      <p style={{ color: "white", marginLeft: "120px" }}>
        Copyright © freedom.com, 2022. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
