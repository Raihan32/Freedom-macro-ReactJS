import React from "react";
import "./memberStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";

import cover1 from "../../img/cover-komunitas1.png";
import userpp from "../../img/userpp.png";
import founder from "../../img/founder.jpg";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="head-cover">
        <div className="body-cover">
          <div className="komunitas-cover">
            <img src={cover1} alt="cover 1" className="cover1" />
          </div>
          <div className="text-komunitas">
            <div className="text-komunitas-title">
              <p className="komunitas-title-judul">
                Pejuang Anti Rasisme Jakarta
              </p>
              <div className="komunitas-title-info">
                <p>
                  <span className="komunitas-icon">
                    <FontAwesomeIcon icon={faLocationDot} size="xl" />
                  </span>
                  Jakarta, Indonesia
                </p>
                <p>
                  <span className="komunitas-image">
                    <img src={userpp} alt="userpp" />
                  </span>
                  1200 Members
                </p>
                <p>
                  <span className="komunitas-image-founder">
                    <img src={founder} alt="fotofounder" />
                  </span>
                  Organised by Freedom
                </p>
              </div>
              <div className="share-komunitas">
                <p>
                  Share Komunitas :
                  <span className="share-komunitas-icon">
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                  </span>
                  <span className="share-komunitas-icon">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </span>{" "}
                  <span className="share-komunitas-icon">
                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                  </span>{" "}
                  <span className="share-komunitas-icon">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </span>
                  <span className="share-komunitas-icon">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
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
      </div>
    </>
  );
};

export default Member;
