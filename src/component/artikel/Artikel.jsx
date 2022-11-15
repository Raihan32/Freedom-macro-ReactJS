import React from 'react'
import './artikel.css'
import card1 from "./imgcard/card1.png"
import card2 from "./imgcard/card2.png"
import card3 from "./imgcard/card3.png"
import card4 from "./imgcard/card4.png"


const Artikel = () => {
  return (
        <div className='artikel'>
        <p className='judul'>NEWS</p>
        <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card">
        <img src={card1} />
          <div className="card-body">
            <h3 className="card-title">RASISME TERHADAP BANGSA PAPUA ITU NYATA</h3>
            <p  className="card-text">Suara Papua ,2020</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={card2} />
          <div className="card-body">
            <h3 className="card-title">KEBIJAKAN HUKUM TERKAIT TINDAKAN RASISME YANG MELUMPUHKAN SISTEM KEADILAN DI INDONESIA</h3>
            <p className="card-text">Oktavia, 2019</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={card3} />
          <div className="card-body">
            <h3 className="card-title">RISET: DISKRIMINASI DALAM BERAGAMA DI INDONESIA SALAH SATU YANG TERTINGGI DI DUNIA ISLAM</h3>
            <p className="card-text">The Conversation, 2019</p>
          </div>
        </div>
      </div>
      <a  href=""><div className="col">
        <div className="card ">
        <img  src={card4} />
          <div className="card-body">
            <h3 className="card-title">RASISME AGAMA DALAM PSIKOLOGI MANUSIA</h3>
            <p className="card-text">Kompasiana, 2022</p>
          </div>
        </div>
      </div></a>
    </div>
    <button className='btn btn-danger'>Read More</button>
    </div>
  )
}

export default Artikel;
