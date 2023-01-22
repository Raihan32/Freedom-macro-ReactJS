import React from "react";
import "./diskusiStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";
import Pejuanghome from "../Pejuangkomunitas";
import Footer from "../../../../component/footer/Footer";

import profile1 from "../../img/founder.jpg";
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
      <Pejuanghome />
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
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Diskusi;
