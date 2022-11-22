import React from 'react'
import './artikel.css'
import card1 from "./imgcard/card1.png"
import card2 from "./imgcard/card2.png"
import card3 from "./imgcard/card3.png"
import card4 from "./imgcard/card4.png"
import penulis from './imgcard/penulis.png'
import penulis2 from './imgcard/penulis2.png'
import penulis3 from './imgcard/penulis3.png'
import penulis4 from './imgcard/penulis4.png'


const Artikel = () => {
  return (
    <div className='artikel'>
    <p className='judul'>NEWS</p>
    <div className='isiartikel'>
      <div className='isiartikelbesar'>
        <img src={card4} />
        <p className='textmedia'>Kompasiana ,2022</p>
        <p className='judulartikelbesar'>Rasisme Agama dalam Psikologi Manusia</p>
        <div className='penuliasartikel'>
          <img src={penulis} />
          <div className='penulisartikelnama'>
            <p className='penulis'>H.Asrul Hoesein</p>
          </div>
        </div>
      </div>
      <div className='isiartikelkecil'>
        <div className='cardkecil'>
          <img src={card1} />
          <div className='deskripsicard'>
            <p style={{color:"black"}} className='textmedia'>Suara Papua, 2020</p>
            <h3>Rasisme terhadap bangsa papua itu nyata</h3>
            <div className='penuliasartikel'>
              <img src={penulis2} />
              <div className='penulisartikelnama'>
                <p style={{color:"black"}} className='penulis'>Made Supriatma</p>
              </div>
            </div>
          </div>
        </div>
        <div className='cardkecil'>
          <img src={card2} />
          <div className='deskripsicard'>
            <p style={{color:"black"}} className='textmedia'>Suara Papua, 2020</p>
            <h3>Rasisme terhadap bangsa papua itu nyata</h3>
            <div className='penuliasartikel'>
              <img src={penulis3} />
              <div className='penulisartikelnama'>
                <p style={{color:"black"}} className='penulis'>Made Supriatma</p>
              </div>
            </div>
          </div>
        </div>
        <div className='cardkecil'>
          <img src={card3} />
          <div className='deskripsicard'>
            <p style={{color:"black"}} className='textmedia'>Suara Papua, 2020</p>
            <h3>Rasisme terhadap bangsa papua itu nyata</h3>
            <div className='penuliasartikel'>
              <img src={penulis4} />
              <div className='penulisartikelnama'>
                <p style={{color:"black"}} className='penulis'>Made Supriatma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* <div className="row row-cols-1 row-cols-md-4 g-4">
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
    </div> */}
    <button className='btn btn-danger'>Read More</button>
    </div>
  )
}

export default Artikel;
