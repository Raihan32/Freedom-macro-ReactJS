import React from "react";
import "./acaraStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";

import tempat1 from "../../img/tempat1.png";
import tempat2 from "../../img/tempat2.png";
import tempat3 from "../../img/tempat3.png";
import cover1 from "../../img/cover-komunitas1.png";
import userpp from "../../img/userpp.png";
import founder from "../../img/founder.jpg";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Acara = () => {
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
        <div className="komunitas-event">
          <div className="komunitas-event-title">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Kegiatan yang akan datang
            </p>
            <p>See All</p>
          </div>
          <div className="Komunitas-event-card2">
            <div className="event-card-content">
              <img src={tempat1} alt="lokasi 1" />
              <div className="event-card-title">
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "30px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  {" "}
                  <span style={{ paddingRight: "10px" }}>
                    {" "}
                    <FontAwesomeIcon icon={faHotel} size="2x" color="#fff" />
                  </span>
                  Hotel Mekar Sari
                </p>
              </div>
            </div>
            <div className="event-card-content">
              <img src={tempat2} alt="lokasi 2" />
              <div className="event-card-title">
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "30px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  {" "}
                  <span style={{ paddingRight: "10px" }}>
                    {" "}
                    <FontAwesomeIcon icon={faHotel} size="2x" color="#fff" />
                  </span>
                  Hotel Mekar Sari
                </p>
              </div>
            </div>
            <div className="event-card-content">
              <img src={tempat3} alt="lokasi 3" />
              <div className="event-card-title">
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "30px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "20px", color: "#fff" }}>
                  {" "}
                  <span style={{ paddingRight: "10px" }}>
                    {" "}
                    <FontAwesomeIcon icon={faHotel} size="2x" color="#fff" />
                  </span>
                  Hotel Mekar Sari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acara;
