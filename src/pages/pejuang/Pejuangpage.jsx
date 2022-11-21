import React from "react";
import "./pejuangpage.css";
import Navbar from "../../component/Navbar/Navbar";
import Card from "./components/Card";
import GMaps from "./components/Googlemaps";
import Container from "react-bootstrap/Container";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import heroImage from "../../pages/pejuang/img/hero.png";
import heroImage2 from "../../pages/pejuang/img/bg-2.png";
import heroImage3 from "../../pages/pejuang/img/bg-3.png";
import heroImage4 from "../../pages/pejuang/img/bg-4.png";
import heroImage5 from "../../pages/pejuang/img/bg-5.png";
// import lokasiMaps from "../../pages/pejuang/img/maps.png";
import logo1 from "../../pages/pejuang/img/logo1.png";
import logo2 from "../../pages/pejuang/img/logo2.png";
import logo3 from "../../pages/pejuang/img/logo3.png";
import logo4 from "../../pages/pejuang/img/logo4.png";
import logo5 from "../../pages/pejuang/img/logo5.png";

const Pejuangpage = () => {
  return (
    <>
      <Navbar />
      <div className="body-pejuang-page">
        <img className="image1" src={heroImage2} alt="heroImage2" />
        <img className="image2" src={heroImage3} alt="heroImage3" />
        <img className="image3" src={heroImage4} alt="heroImage4" />
        <img className="image4" src={heroImage5} alt="heroImage5" />
        <img className="heroPejuang" src={heroImage} alt="heroimage" />
        <div className="pentagon"></div>
        <Container fluid>
          <div className="titlePejuang">
            <h1>PEJUANG</h1>
            <p>
              Temukan Komunitas <span>#NoRoomForRacism</span> di sekitar Anda,
              dan jadilah bagian dari perjuangan.
            </p>
            <div className="searchPejuang">
              <div className="button-src">
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              <input type="text" placeholder="Cari Komunitas.." />
            </div>
          </div>
        </Container>
        <Container fluid>
          <div className="contentPejuang">
            <h2>
              Berbagai komunitas perjuangan anti rasisme dari seluruh daerah
              Indonesia
            </h2>
            <div className="lokasiPejuang">
              {/* <img src={lokasiMaps} alt="lokasi" /> */}
              <GMaps />
            </div>
          </div>
        </Container>
        <Container fluid>
          <div className="cardKomunitas">
            <div className="button-tambah">
              <button type="button" className="button">
                <span className="button_icon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="button_text">Tambah Komunitas</span>
              </button>
            </div>
            <div className="card-body">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="no-page">
              <ul type="none">
                <li>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </li>
                <li
                  style={{
                    backgroundColor: "#8D2D2A",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                >
                  1
                </li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} />
                </li>
              </ul>
            </div>
            <div className="logo-pejuanghome">
              <p
                style={{
                  fontSize: "30px",
                  lineHeight: "30px",
                  fontWeight: "bold",
                  padding: "10px",
                  margin: "10px 60px",
                }}
              >
                Pejuang Rasis di Dunia
              </p>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <img
                  src={logo1}
                  alt="Komunitas logo1"
                  style={{
                    height: "90px",
                    width: "90px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Black Panther Party
                </p>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <img
                  src={logo2}
                  alt="Komunitas logo2"
                  style={{
                    height: "100px",
                    width: "150px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "0px",
                  }}
                >
                  Black Live Matter
                </p>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <img
                  src={logo3}
                  alt="Komunitas logo3"
                  style={{
                    height: "90px",
                    width: "90px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Black Matter Live2
                </p>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <img
                  src={logo4}
                  alt="Komunitas logo4"
                  style={{
                    height: "90px",
                    width: "90px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Malcolm X
                </p>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <img
                  src={logo5}
                  alt="Komunitas logo5"
                  style={{
                    height: "90px",
                    width: "90px",
                  }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Nelson Mandela
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Pejuangpage;
