import React from "react";
import "./cardStyles.css";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

import komunitaspp from "../img/logokomunitas1.png";
import userpp from "../img/userpp.png";

const Card = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-content">
          <div className="content-komunitas">
            <div className="title-card">
              <img src={komunitaspp} alt="logo komunitas1" />
              <div className="title-komunitas">
                <h5>Penjuang Anti Rasis Jakarta</h5>
                <p className="tahun-bergabung">
                  <FontAwesomeIcon icon={faCalendar} size="lg" />
                  Bergabung 2019
                </p>
                <p className="profile-members">
                  <img src={userpp} alt="userpp" />
                  1200 Members
                </p>
              </div>
            </div>
            <p className="bio-komunitas">
              Pejuang anti rasisme yang berbasi di ibu kota Jakarta di wilayah
              mangga dua, Komunitas ini dibentuk untuk melawan dan melidungi
              korban dari tindakan rasisme.
            </p>
          </div>
          <NavLink to="/komunitas/about">
            <button type="button" className="button1">
              <span className="button_text1">Begabung Komunitas</span>
              <span className="button_icon1">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
