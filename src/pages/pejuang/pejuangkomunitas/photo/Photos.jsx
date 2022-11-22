import React from "react";
import "./photosStyles.css";
import Navbar from "../../../../component/Navbar/Navbar";
import Navigation from "../../components/Navigation";
import Pejuanghome from "../Pejuangkomunitas";

import foto1 from "../../img/photo1.png";
import foto2 from "../../img/photo2.png";
import foto3 from "../../img/photo3.png";
import foto4 from "../../img/photo4.png";
import foto5 from "../../img/photo5.png";

const Photos = () => {
  return (
    <>
      <Navbar />
      <Pejuanghome />
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
