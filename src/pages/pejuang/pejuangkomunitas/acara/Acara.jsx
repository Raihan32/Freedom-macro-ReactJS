import React from "react";
import "./acaraStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";
import Pejuanghome from "../Pejuangkomunitas";

import tempat1 from "../../img/tempat1.png";
import tempat2 from "../../img/tempat2.png";
import tempat3 from "../../img/tempat3.png";

import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Acara = () => {
  return (
    <>
      <Navbar />
      <Pejuanghome />
      <div className="body-komunitas">
        <Navigation />
        <div className="komunitas-event">
          <div className="komunitas-event-title">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "32px",
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
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "34px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  <span style={{ paddingRight: "10px" }}>
                    <FontAwesomeIcon icon={faHotel} size="2x" color="#fff" />
                  </span>
                  Hotel Mekar Sari
                </p>
              </div>
            </div>
            <div className="event-card-content">
              <img src={tempat2} alt="lokasi 2" />
              <div className="event-card-title">
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "34px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  <span style={{ paddingRight: "10px" }}>
                    <FontAwesomeIcon icon={faHotel} size="2x" color="#fff" />
                  </span>
                  Hotel Mekar Sari
                </p>
              </div>
            </div>
            <div className="event-card-content">
              <img src={tempat3} alt="lokasi 3" />
              <div className="event-card-title">
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  Sabtu, Januari 2022 12.00 WIB
                </p>
                <p style={{ fontSize: "34px", color: "#fff" }}>
                  Diskriminasi etnis di mangga dua
                </p>
                <p style={{ fontSize: "24px", color: "#fff" }}>
                  <span style={{ paddingRight: "10px" }}>
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
