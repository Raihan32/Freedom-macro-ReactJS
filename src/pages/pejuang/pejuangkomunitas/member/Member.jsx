import React from "react";
import "./memberStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";
import Pejuanghome from "../Pejuangkomunitas";
import Footer from "../../../../component/footer/Footer";

import profileAnggota1 from "../../img/aggota1.png";
import profileAnggota2 from "../../img/aggota2.png";
import profileAnggota3 from "../../img/aggota3.png";
import profileAnggota4 from "../../img/aggota4.png";
import profileAnggota5 from "../../img/aggota5.png";
import profileAnggota6 from "../../img/aggota6.png";
import profileAnggota7 from "../../img/aggota7.png";
import profileAnggota8 from "../../img/aggota8.png";

const Member = () => {
  return (
    <>
      <Navbar />
      <Pejuanghome />
      <div className="body-komunitas">
        <Navigation />
        <div className="komunitas-group">
          <div className="komunitas-group-ketua">
            <p>Ketua Komunitas</p>
            <div className="group-ketua-profile">
              <div className="ketua-photo-profile">
                <img src={profileAnggota6} alt="Ketua 1" />
                <p>Ketua 1</p>
              </div>
            </div>
            <div className="group-ketua-profile">
              <div className="ketua-photo-profile">
                <img src={profileAnggota7} alt="Ketua 2" />
                <p>Ketua 2</p>
              </div>
            </div>
            <div className="group-ketua-profile">
              <div className="ketua-photo-profile">
                <img src={profileAnggota8} alt="Ketua 3" />
                <p>Ketua 3</p>
              </div>
            </div>
          </div>
          <div className="komunitas-group-anggota">
            <p>Anggota Komunitas</p>
            <div className="group-aggota-profile">
              <div className="anggota-photo-profile">
                <img src={profileAnggota1} alt="Anggota 1" />
                <p>Anggota 1</p>
              </div>
            </div>
            <div className="group-aggota-profile">
              <div className="anggota-photo-profile">
                <img src={profileAnggota2} alt="Anggota 2" />
                <p>Anggota 2</p>
              </div>
            </div>
            <div className="group-aggota-profile">
              <div className="anggota-photo-profile">
                <img src={profileAnggota3} alt="Anggota 3" />
                <p>Anggota 3</p>
              </div>
            </div>
            <div className="group-aggota-profile">
              <div className="anggota-photo-profile">
                <img src={profileAnggota4} alt="Anggota 34" />
                <p>Anggota 4</p>
              </div>
            </div>
            <div className="group-aggota-profile">
              <div className="anggota-photo-profile">
                <img src={profileAnggota5} alt="Anggota 5" />
                <p>Anggota 5</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Member;
