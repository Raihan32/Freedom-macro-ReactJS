import React from "react";
import "./diskusiStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";

import profile1 from "../../img/founder.jpg";

import cover1 from "../../img/cover-komunitas1.png";
import userpp from "../../img/userpp.png";
import founder from "../../img/founder.jpg";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Diskusi = () => {
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
        <div className="komunitas-diskusi">
          <p className="komunitas-diskusi-title">Diskusi</p>
          <div className="komunitas-diskusi-input">
            <div className="komunitas-diskusi-text">
              <img src={profile1} alt="avatar1" />
              <div className="komunitas-diskusi-text-field">
                <span>
                  <FontAwesomeIcon
                    icon={faPencil}
                    color="color: rgba(0, 0, 0, 0.6)"
                  />
                </span>
                <textarea placeholder="Bagikan sesuatu yang ingin orang ketahui...."></textarea>
              </div>
              <button className="komunitas-diskusi-button">
                <FontAwesomeIcon icon={faPaperPlane} size="2x" color="#fff" />
              </button>
            </div>
            <div className="komunitas-diskusi-action">
              <p className="komunitas-diskusi-action-button">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faImage} size="2x" />
                </span>
                Gambar{" "}
              </p>
              <p className="komunitas-diskusi-action-button">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faVideo} size="2x" />
                </span>
                Video{" "}
              </p>
              <p className="komunitas-diskusi-action-button">
                {" "}
                <span>
                  <FontAwesomeIcon icon={faLocation} size="2x" />
                </span>
                Lokasi{" "}
              </p>
            </div>
          </div>
          <div className="komunitas-diskusi-status">
            <div className="diskusi-status-1">
              <div className="diskusi-status-profile">
                <img src={profile1} alt="profile1" />
                <p>Ketua 1</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                tempora molestiae quasi atque fuga. Perspiciatis fugit totam
                adipisci, voluptatem recusandae sit eius obcaecati eligendi
                tempore, dolorem, quae libero omnis quod! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dignissimos soluta nisi quia,
                inventore iste placeat ratione ex. Saepe, optio quos.
              </p>
              <div className="diskusi-action-button">
                <div className="action-like">
                  <p style={{ fontSize: "14px", color: "#fff" }}>
                    <span style={{ marginRight: "10px" }}>
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        size="2x"
                        color="#fff"
                      />
                    </span>
                    Like
                  </p>
                </div>
                <div className="action-comment">
                  <p style={{ fontSize: "14px", color: "#fff" }}>
                    <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                      <FontAwesomeIcon
                        icon={faComment}
                        size="2x"
                        color="#fff"
                      />
                    </span>
                    Like
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diskusi;
