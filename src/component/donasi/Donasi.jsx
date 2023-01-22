import React from "react";
import "./donasi.css";

import donasi1 from "./img/donasi1.png";
import donasiCard from "./img/donasi-card.png";
import petisiCard from "./img/petis-card.png";
import bgLingkaran1 from "./img/Ellipse1.svg";
import bgLingkaran2 from "./img/Ellipse2.svg";
import bgLingkaran3 from "./img/Ellipse3.svg";
import bgLingkaran4 from "./img/Ellipse4.svg";

import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Donasi = () => {
  return (
    <div className="donasi">
      <div className="carddonasi">
        <div className="time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>{" "}
          15 Day Left
        </div>
        <div className="contentdonasi">
          <img src={donasi1} />
          <div className="textdonasi">
            <p className="text-eduction">Education</p>
            <div className="content">
              <p className="text1">Lifeskills for children in Papua</p>
              <p className="text2"> By kitabisa.com </p>
              <p className="text2">Rp. 5.000.000 Raised</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-title">
        <div className="background-shapes">
          <img
            className="bg-shapes-circle1"
            src={bgLingkaran1}
            alt="bg Lingakran1"
          />

          <img
            className="bg-shapes-circle1"
            src={bgLingkaran2}
            alt="bg Lingakran2"
          />
          <img
            className="bg-shapes-circle1"
            src={bgLingkaran3}
            alt="bg Lingakran3"
          />
          <img
            className="bg-shapes-circle1"
            src={bgLingkaran4}
            alt="bg Lingakran4"
          />
        </div>
        <div className="content-title-body">
          <div className="title-body-text">
            <h5>Tindakan</h5>
            <p>
              Apakah Anda hanya memiliki beberapa menit, atau lebih banyak waktu
              dan sumber daya untuk didedikasikan untuk Indonesia yang bebas
              rasisme, ada banyak cara Anda dapat terlibat dalam pekerjaan kami.
              Dengan dukungan Anda, kami dapat bertindak lebih efisien dan
              membuat perbedaan yang lebih besar menuju Indonesia yang lebih
              setara.
            </p>
          </div>
          <div className="content-body-buttom">
            <div className="body-buttom-1">
              <img src={donasiCard} alt="donasi card" />
              <NavLink to="/donasi" className="buttom-1">
                Donasi
              </NavLink>
            </div>
            <div className="body-buttom-1">
              <img src={petisiCard} alt="petisi card" />
              <NavLink to="/petisi" className="buttom-1">
                Petisi
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donasi;
