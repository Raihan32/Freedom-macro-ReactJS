import React from "react";
import "./aboutstyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";

import bg1 from "../../img/bg-1.png";
import photo1 from "../../img/photo1.png";
import photo2 from "../../img/photo2.png";
import photo3 from "../../img/photo3.png";
import photo4 from "../../img/photo4.png";
import photo5 from "../../img/photo5.png";
import photo6 from "../../img/photo6.png";
import photo7 from "../../img/photo7.png";
import photo8 from "../../img/photo8.png";
// import profileKetua1 from "../../img/founder.jpg";
import profileKetua2 from "../../img/founder.png";
import profileAnggota1 from "../../img/aggota1.png";
import profileAnggota2 from "../../img/aggota2.png";
import profileAnggota3 from "../../img/aggota3.png";
import profileAnggota4 from "../../img/aggota4.png";
import profileAnggota5 from "../../img/aggota5.png";
import profileAnggota6 from "../../img/aggota6.png";
import profileAnggota7 from "../../img/aggota7.png";
import profileAnggota8 from "../../img/aggota8.png";
import profileAnggota9 from "../../img/aggota9.png";
import profileAnggota10 from "../../img/aggota10.png";
import profileAnggota11 from "../../img/aggota11.png";
import profileAnggota12 from "../../img/aggota12.png";
import cover1 from "../../img/cover-komunitas1.png";
import userpp from "../../img/userpp.png";
import founder from "../../img/founder.jpg";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
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
        <div className="bgImage">
          <img src={bg1} alt="background1" />
        </div>
        <div className="about-komunitas">
          <div className="about-komunitas-content">
            <div className="komunitas-content-title">
              <div className="komunitas-content-tentang">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Tentang Kami
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  corrupti possimus ullam quis explicabo soluta atque nulla
                  animi, qui quaerat eum at in tenetur! Quae quod aperiam labore
                  animi voluptate, provident inventore odio praesentium eveniet
                  omnis placeat cumque pariatur ea. Deleniti praesentium,
                  aperiam fuga nostrum at amet rerum consequatur ipsum?
                </p>
              </div>
              <div className="komunitas-content-event">
                <div className="content-event-title">
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
                <div className="content-event-card">
                  <p style={{ fontSize: "12px", color: "#fff" }}>
                    Sabtu, Januari 2022 12.00 WIB
                  </p>
                  <p style={{ fontSize: "22px", color: "#fff" }}>
                    Diskriminasi etnis di mangga dua
                  </p>
                  <p style={{ fontSize: "20px", color: "#fff" }}>
                    {" "}
                    <span style={{ paddingRight: "10px" }}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faBuildingUser}
                        size="2x"
                        color="#fff"
                      />
                    </span>
                    Jakarta Internasional Stadium
                  </p>
                </div>
                <div className="content-event-card">
                  <p style={{ fontSize: "12px", color: "#fff" }}>
                    Sabtu, Januari 2022 12.00 WIB
                  </p>
                  <p style={{ fontSize: "22px", color: "#fff" }}>
                    Diskriminasi etnis di mangga dua
                  </p>
                  <p style={{ fontSize: "20px", color: "#fff" }}>
                    {" "}
                    <span style={{ paddingRight: "10px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faSchool} size="2x" color="#fff" />
                    </span>
                    SMAN 1 Jakarta Barat
                  </p>
                </div>
                <div className="content-event-card">
                  <p style={{ fontSize: "12px", color: "#fff" }}>
                    Sabtu, Januari 2022 12.00 WIB
                  </p>
                  <p style={{ fontSize: "22px", color: "#fff" }}>
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
                <div className="content-event-photo">
                  <div className="event-photo-title">
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    >
                      Photos
                    </p>
                    <p>See All</p>
                  </div>
                  <div className="event-photo-album">
                    <div className="event-photo-album1">
                      <img src={photo1} alt="photo1" />
                      <img src={photo2} alt="photo2" />
                      <img src={photo3} alt="photo3" />
                      <img src={photo4} alt="photo4" />
                    </div>
                    <div className="event-photo-album2">
                      <img src={photo5} alt="photo5" />
                      <img src={photo6} alt="photo6" />
                      <img src={photo7} alt="photo7" />
                      <img src={photo8} alt="photo8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-komunitas-profile">
            <div className="about-ketua-profile">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Ketua Komunitas
              </p>
              <div className="about-ketua-photoprofile">
                <p>
                  <span>
                    <img src={profileKetua2} alt="profile ketua2" />
                  </span>
                  Windah Basudara
                </p>
              </div>
            </div>
            <div className="about-ketua-anggota">
              <p>Anggota Komunitas</p>
              <div className="about-ketua-photoprofile">
                <img src={profileAnggota1} alt="profile Anggota1" />
                <img src={profileAnggota2} alt="profile Anggota2" />
                <img src={profileAnggota3} alt="profile Anggota3" />
                <img src={profileAnggota4} alt="profile Anggota4" />
                <img src={profileAnggota5} alt="profile Anggota5" />
                <img src={profileAnggota6} alt="profile Anggota6" />
                <img src={profileAnggota7} alt="profile Anggota7" />
                <img src={profileAnggota8} alt="profile Anggota8" />
                <img src={profileAnggota9} alt="profile Anggota9" />
                <img src={profileAnggota10} alt="profile Anggota10" />
                <img src={profileAnggota11} alt="profile Anggota11" />
                <img src={profileAnggota12} alt="profile Anggota12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
