import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./petisi.css";
import foto from "../donasipage/img/foto.png";
import foto2 from "./img/foto.png";
import Footer from "../../component/footer/Footer";
import foto1 from "./img/foto1.png";
// import { Button } from "react-bootstrap";
import foto3 from "./img/foto3.png";

const Petisi = () => {
  return (
    <>
      <Navbar />
      <div className="headerpetisi">
        <div className="petisitext">
          <div className="judulpetisi">
            <img src={foto} alt="" />
            <p style={{}}>Petisi</p>
          </div>
          <p className="paragraf">
            Satu tindakan kecil bisa membawa perubahan nyata! Kamu bisa
            menyelamatkan hidup, mengubah peraturan yang tak adil dan
            membebaskan orang yang dipenjara karena alasan yang salah.{" "}
          </p>
        </div>
        <div className="fotodonasi">
          <img src={foto2} alt="" />
        </div>
      </div>
      <div className="isipetisi">
        <div className="rowpetisi">
          <div className="cardpetisi">
            {" "}
            <h3>BEBASKAN VICTOR YEIMO, AKTIVIS PAPUA YANG DIANCAM PENJARA!</h3>
            <img src={foto1} alt="" />
            <p>
              Bantu kami mendesak otoritas terkait agar Viktor segera dibebaskan
              dan penyidikannya dihentikan dengan mengirimkan email kepada
              Kapolri
            </p>
            <button className="tombolpetisi">Dukung Petisi ini!</button>
          </div>
          <div className="cardpetisi">
            {" "}
            <h3>
              STOP KRIMINALISASI HARIS AZHAR DAN FATIA MAULIDIYANTI DENGAN UU
              ITE!
            </h3>
            <img src={foto3} alt="" />
            <p>
              Bantu kami desak Kapolri untuk tidak menindaklanjuti laporan dan
              menghentikan penyelidikan terhadap Haris Azhar dan Fatia
              Maulidiyanti.
            </p>
            <button className="tombolpetisi">Dukung Petisi ini!</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Petisi;
