import React from "react";
import "./photosStyles.css";

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

import foto1 from "../../img/photo1.png";
import foto2 from "../../img/photo2.png";
import foto3 from "../../img/photo3.png";
import foto4 from "../../img/photo4.png";
import foto5 from "../../img/photo5.png";

const Photos = () => {
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
        <div className="komunitas-album">
          <p>Semua Photos</p>
          <div className="album-photos">
            <div className="album-photos-1">
              <img src={foto1} alt="foto 1" />
              <img src={foto2} alt="foto 2" />
              <img src={foto3} alt="foto 3" />
              <img src={foto4} alt="foto 4" />
            </div>
            <div className="album-photos-1">
              <img src={foto5} alt="foto 1" />
              <img src={foto3} alt="foto 3" />
              <img src={foto2} alt="foto 2" />
              <img src={foto1} alt="foto 1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
